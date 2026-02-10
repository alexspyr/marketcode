'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getExerciseById, getCategoryById, EXERCISES } from '@/lib/exercises';
import { createClient } from '@/lib/supabase/client';
import { loadLocalProgress, saveLocalProgress, saveCloudProgress, updateStreak } from '@/lib/progress';
import type { UserProgress, EvaluationResponse, SolvedEntry } from '@/lib/types';
import { DEFAULT_PROGRESS } from '@/lib/types';

export default function ExercisePage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const exercise = getExerciseById(id);
  const category = exercise ? getCategoryById(exercise.category) : null;

  const [answer, setAnswer] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<EvaluationResponse | null>(null);
  const [progress, setProgress] = useState<UserProgress>({ ...DEFAULT_PROGRESS });
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const local = loadLocalProgress();

      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        const { data } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (data) {
          const cloud: UserProgress = {
            solved: data.solved || {},
            activity: data.activity || [],
            streak: data.streak || 0,
            lastActiveDate: data.last_active_date,
            totalPoints: data.total_points || 0,
          };
          setProgress(cloud);
          if (cloud.solved[id]) {
            setAnswer(cloud.solved[id].answer);
          }
          return;
        }
      }

      setProgress(local);
      if (local.solved[id]) {
        setAnswer(local.solved[id].answer);
      }
    }
    load();
  }, [id]);

  if (!exercise || !category) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Problem not found</h1>
        <Link href="/problems" className="text-accent-orange hover:underline">Back to Problems</Link>
      </div>
    );
  }

  const solved = progress.solved[id];
  const prevId = id > 1 ? id - 1 : null;
  const nextId = id < EXERCISES.length ? id + 1 : null;

  const diffColor: Record<string, string> = {
    easy: 'bg-easy text-black',
    medium: 'bg-medium text-black',
    hard: 'bg-hard text-black',
  };

  async function handleSubmit() {
    if (!exercise || answer.trim().length < 30) return;
    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/evaluate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ exerciseId: exercise.id, answer: answer.trim() }),
      });

      if (!res.ok) throw new Error('Evaluation failed');
      const result: EvaluationResponse = await res.json();
      setFeedback(result);

      // Save progress
      if (result.pointsEarned > 0) {
        const prevPoints = progress.solved[exercise.id]?.points || 0;
        if (result.pointsEarned > prevPoints) {
          const solvedEntry: SolvedEntry = {
            answer: answer.trim(),
            points: result.pointsEarned,
            solvedAt: new Date().toISOString(),
            ratio: result.score / 100,
            feedback: result.feedback,
            criteriaResults: result.criteriaResults,
          };

          const newProgress: UserProgress = {
            ...progress,
            solved: { ...progress.solved, [exercise.id]: solvedEntry },
            totalPoints: progress.totalPoints - prevPoints + result.pointsEarned,
            activity: [
              ...progress.activity,
              { exerciseId: exercise.id, points: result.pointsEarned, timestamp: new Date().toISOString() },
            ],
          };

          const updated = updateStreak(newProgress);
          setProgress(updated);
          saveLocalProgress(updated);
          if (userId) {
            saveCloudProgress(userId, updated);
          }
        }
      }
    } catch {
      setFeedback({
        status: 'fail',
        score: 0,
        pointsEarned: 0,
        feedback: 'Something went wrong evaluating your answer. Please try again.',
        criteriaResults: [],
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {/* Breadcrumb + Nav */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/problems" className="text-text-muted hover:text-text-primary transition-colors">
            Problems
          </Link>
          <span className="text-text-muted">/</span>
          <span className="text-text-secondary">#{exercise.id}</span>
        </div>
        <div className="flex gap-2">
          {prevId && (
            <Link href={`/problems/${prevId}`} className="text-xs bg-bg-card border border-border rounded-lg px-3 py-1.5 text-text-secondary hover:text-text-primary transition-colors">
              ← Prev
            </Link>
          )}
          {nextId && (
            <Link href={`/problems/${nextId}`} className="text-xs bg-bg-card border border-border rounded-lg px-3 py-1.5 text-text-secondary hover:text-text-primary transition-colors">
              Next →
            </Link>
          )}
        </div>
      </div>

      {/* Split Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Problem Description */}
        <div className="space-y-5">
          <div>
            <div className="text-xs text-text-muted font-mono mb-1">Problem #{exercise.id}</div>
            <h1 className="text-xl font-semibold mb-3">{exercise.title}</h1>
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue font-semibold">
                {category.name}
              </span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${diffColor[exercise.difficulty]}`}>
                {exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1)}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent-orange/15 text-accent-orange font-semibold">
                {exercise.points} pts
              </span>
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-text-primary">{exercise.description}</p>

          <div className="bg-bg-secondary border border-border rounded-lg p-5">
            <h3 className="text-xs font-semibold text-accent-orange uppercase tracking-wider mb-3">
              Prompt / Scenario
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">{exercise.prompt}</p>
          </div>

          {/* Hints */}
          <div>
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-sm text-text-secondary hover:text-accent-purple transition-colors flex items-center gap-1.5"
            >
              <span>💡</span> {showHints ? 'Hide Hints' : 'Show Hints'}
            </button>
            {showHints && (
              <div className="mt-3 bg-accent-purple/8 border border-accent-purple/20 rounded-lg p-5">
                <h3 className="text-xs font-semibold text-accent-purple uppercase tracking-wider mb-3">
                  Hints & Key Points
                </h3>
                <ul className="space-y-1.5">
                  {exercise.hints.map((h, i) => (
                    <li key={i} className="text-sm text-text-secondary ml-4 list-disc">{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Already Solved */}
          {solved && !feedback && (
            <div className="bg-accent-green/6 border border-accent-green/15 rounded-lg p-5">
              <div className="inline-block bg-accent-green text-black text-xs font-bold px-3 py-1 rounded-full mb-2">
                ✓ Solved — {solved.points} pts earned
              </div>
              <p className="text-xs text-text-secondary mb-3">Your previous answer:</p>
              <div className="bg-bg-input rounded-lg p-4 text-sm text-text-primary whitespace-pre-wrap max-h-48 overflow-y-auto">
                {solved.answer}
              </div>
              {solved.feedback && (
                <p className="text-xs text-text-secondary mt-3 italic">{solved.feedback}</p>
              )}
            </div>
          )}
        </div>

        {/* Right: Answer & Feedback */}
        <div className="space-y-5">
          <div>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Your Answer</h3>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here... (minimum 30 characters)"
              rows={12}
              className="w-full bg-bg-input border border-border rounded-lg px-4 py-3 text-sm text-text-primary leading-relaxed resize-y min-h-[200px] focus:outline-none focus:border-accent-orange transition-colors placeholder:text-text-muted"
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-text-muted">
                {answer.length} characters {answer.length < 30 && answer.length > 0 && '(min 30)'}
              </span>
              <button
                onClick={handleSubmit}
                disabled={submitting || answer.trim().length < 30}
                className="bg-accent-green text-black font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-accent-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Evaluating...
                  </>
                ) : (
                  <>✓ Submit Answer</>
                )}
              </button>
            </div>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className="rounded-xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300 bg-bg-card border border-border">
              <div
                className={`px-5 py-4 font-semibold text-sm flex items-center gap-2 ${
                  feedback.status === 'pass'
                    ? 'bg-[#1a3a2a] text-[#4ade80] border-b border-[#2a5a3a]'
                    : feedback.status === 'partial'
                    ? 'bg-[#3a3520] text-[#fbbf24] border-b border-[#5a5030]'
                    : 'bg-[#3a1a1a] text-[#fca5a5] border-b border-[#5a2a2a]'
                }`}
              >
                {feedback.status === 'pass'
                  ? '✓ Accepted!'
                  : feedback.status === 'partial'
                  ? '⚠ Partial Credit'
                  : '✗ Needs Improvement'}
                <span className="ml-auto text-xs opacity-90">Score: {feedback.score}/100</span>
              </div>
              <div className="px-5 py-4 text-sm text-text-primary leading-relaxed border-b border-border">
                {feedback.feedback}
              </div>
              {feedback.criteriaResults.length > 0 && (
                <div className="px-5 py-4 space-y-2.5">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Criteria</div>
                  {feedback.criteriaResults.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <span className={`mt-0.5 font-bold ${c.met ? 'text-[#4ade80]' : 'text-[#fca5a5]'}`}>
                        {c.met ? '✓' : '✗'}
                      </span>
                      <span className="text-text-primary">
                        <strong>{c.label}</strong>
                        {c.comment && <span className="text-text-secondary ml-1.5">— {c.comment}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="px-5 py-3 bg-bg-secondary border-t border-border text-sm font-semibold flex items-center gap-1.5">
                Points earned: <span className="text-accent-orange font-mono">+{feedback.pointsEarned}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
