import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { getExerciseById } from '@/lib/exercises';
import type { EvaluationResponse } from '@/lib/types';

function keywordFallback(exerciseId: number, answer: string): NextResponse {
  const exercise = getExerciseById(exerciseId);
  if (!exercise) {
    return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
  }

  const lowerAnswer = answer.toLowerCase();
  const criteriaResults = exercise.criteria.map((c) => {
    const keywords = c.keyword.split('|');
    const met = keywords.some((kw) => {
      const regex = new RegExp(kw.replace(/\./g, '[\\s\\-_.]?'), 'i');
      return regex.test(lowerAnswer);
    });
    return { label: c.label, met, comment: met ? 'Keyword found' : 'Not detected in answer' };
  });

  const metCount = criteriaResults.filter((c) => c.met).length;
  const ratio = metCount / criteriaResults.length;
  const score = Math.round(ratio * 100);

  let status: 'pass' | 'partial' | 'fail';
  let pointsEarned: number;
  if (ratio >= 0.7) {
    status = 'pass';
    pointsEarned = exercise.points;
  } else if (ratio >= 0.4) {
    status = 'partial';
    pointsEarned = Math.round(exercise.points * 0.4);
  } else {
    status = 'fail';
    pointsEarned = 0;
  }

  return NextResponse.json({
    status,
    score,
    pointsEarned,
    feedback: 'AI evaluation unavailable. Using keyword-based scoring as fallback.',
    criteriaResults,
  } satisfies EvaluationResponse);
}

export async function POST(request: NextRequest) {
  // Parse body once upfront so it's available for both LLM and fallback
  let exerciseId: number;
  let answer: string;

  try {
    const body = await request.json();
    exerciseId = body.exerciseId;
    answer = body.answer;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!exerciseId || !answer || typeof answer !== 'string') {
    return NextResponse.json({ error: 'Missing exerciseId or answer' }, { status: 400 });
  }

  if (answer.trim().length < 30) {
    return NextResponse.json({ error: 'Answer too short' }, { status: 400 });
  }

  const exercise = getExerciseById(exerciseId);
  if (!exercise) {
    return NextResponse.json({ error: 'Exercise not found' }, { status: 404 });
  }

  // Try OpenAI evaluation
  try {
    const criteriaList = exercise.criteria
      .map((c, i) => `${i + 1}. "${c.label}" (keywords: ${c.keyword})`)
      .join('\n');

    const systemPrompt = `You are an expert marketing instructor evaluating a student's answer to a marketing exercise.

Exercise: "${exercise.title}"
Category: ${exercise.category}
Difficulty: ${exercise.difficulty}
Description: ${exercise.description}

Scenario/Prompt given to the student:
${exercise.prompt}

Sample/Reference Answer:
${exercise.sample_answer}

Evaluation Criteria (the student should address these):
${criteriaList}

Instructions:
1. Evaluate the student's answer against each criterion listed above
2. For each criterion, determine if it was MET or NOT MET, and write a brief 5-10 word comment
3. Give an overall score from 0-100 based on:
   - Completeness (did they cover the key areas?)
   - Quality (is their thinking sound and strategic?)
   - Specificity (did they give concrete examples/details?)
   - Relevance (does the answer actually address the prompt?)
4. Write 2-3 sentences of constructive feedback

You MUST respond with valid JSON only, in this exact format:
{
  "score": <number 0-100>,
  "feedback": "<2-3 sentence constructive feedback>",
  "criteriaResults": [
    {"label": "<criterion label>", "met": <true/false>, "comment": "<brief comment>"}
  ]
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Student's Answer:\n\n${answer.trim()}` },
      ],
      temperature: 0.3,
      max_tokens: 1000,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error('No response from LLM');

    const parsed = JSON.parse(content);

    const score = Math.min(100, Math.max(0, Number(parsed.score) || 0));
    let status: 'pass' | 'partial' | 'fail';
    let pointsEarned: number;

    if (score >= 70) {
      status = 'pass';
      pointsEarned = exercise.points;
    } else if (score >= 40) {
      status = 'partial';
      pointsEarned = Math.round(exercise.points * 0.4);
    } else {
      status = 'fail';
      pointsEarned = 0;
    }

    const response: EvaluationResponse = {
      status,
      score,
      pointsEarned,
      feedback: parsed.feedback || 'No feedback available.',
      criteriaResults: Array.isArray(parsed.criteriaResults)
        ? parsed.criteriaResults.map((c: { label?: string; met?: boolean; comment?: string }) => ({
            label: c.label || '',
            met: !!c.met,
            comment: c.comment || '',
          }))
        : [],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('OpenAI evaluation error:', error instanceof Error ? error.message : error);

    // Fallback to keyword-based evaluation
    return keywordFallback(exerciseId, answer);
  }
}
