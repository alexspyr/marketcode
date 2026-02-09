export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface Criterion {
  keyword: string;
  label: string;
}

export interface Exercise {
  id: number;
  category: string;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  description: string;
  prompt: string;
  hints: string[];
  criteria: Criterion[];
  sample_answer: string;
}

export interface SolvedEntry {
  answer: string;
  points: number;
  solvedAt: string;
  ratio: number;
  feedback?: string;
  criteriaResults?: CriteriaResult[];
}

export interface ActivityEntry {
  exerciseId: number;
  points: number;
  timestamp: string;
}

export interface UserProgress {
  solved: Record<string, SolvedEntry>;
  activity: ActivityEntry[];
  streak: number;
  lastActiveDate: string | null;
  totalPoints: number;
}

export interface CriteriaResult {
  label: string;
  met: boolean;
  comment: string;
}

export interface EvaluationResponse {
  status: 'pass' | 'partial' | 'fail';
  score: number;
  pointsEarned: number;
  feedback: string;
  criteriaResults: CriteriaResult[];
}

export const DEFAULT_PROGRESS: UserProgress = {
  solved: {},
  activity: [],
  streak: 0,
  lastActiveDate: null,
  totalPoints: 0,
};
