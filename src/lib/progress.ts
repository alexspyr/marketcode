'use client';

import { createClient } from '@/lib/supabase/client';
import { UserProgress, DEFAULT_PROGRESS, SolvedEntry, ActivityEntry } from './types';

const STORAGE_KEY = 'marketcode_progress';

export function loadLocalProgress(): UserProgress {
  if (typeof window === 'undefined') return { ...DEFAULT_PROGRESS };
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed to load local progress:', e);
  }
  return { ...DEFAULT_PROGRESS };
}

export function saveLocalProgress(state: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save local progress:', e);
  }
}

export async function loadCloudProgress(userId: string): Promise<UserProgress | null> {
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code === 'PGRST116') return null;
    if (error) throw error;

    return {
      solved: data.solved || {},
      activity: data.activity || [],
      streak: data.streak || 0,
      lastActiveDate: data.last_active_date,
      totalPoints: data.total_points || 0,
    };
  } catch (e) {
    console.error('Failed to load cloud progress:', e);
    return null;
  }
}

export async function saveCloudProgress(userId: string, state: UserProgress): Promise<void> {
  const supabase = createClient();
  try {
    const { error } = await supabase.from('user_progress').upsert(
      {
        user_id: userId,
        solved: state.solved,
        activity: state.activity,
        streak: state.streak,
        last_active_date: state.lastActiveDate,
        total_points: state.totalPoints,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' }
    );
    if (error) throw error;
  } catch (e) {
    console.error('Failed to save to cloud:', e);
  }
}

export function mergeProgress(local: UserProgress, cloud: UserProgress): UserProgress {
  const merged: UserProgress = {
    solved: { ...cloud.solved },
    activity: [],
    streak: 0,
    lastActiveDate: null,
    totalPoints: 0,
  };

  for (const [id, localEntry] of Object.entries(local.solved)) {
    const cloudEntry = cloud.solved[id];
    if (!cloudEntry || localEntry.points > cloudEntry.points) {
      merged.solved[id] = localEntry;
    }
  }

  const activityMap = new Map<string, ActivityEntry>();
  for (const a of [...(cloud.activity || []), ...(local.activity || [])]) {
    const key = `${a.exerciseId}-${a.timestamp}`;
    activityMap.set(key, a);
  }
  merged.activity = Array.from(activityMap.values()).sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  merged.totalPoints = Object.values(merged.solved).reduce(
    (sum, entry) => sum + (entry.points || 0),
    0
  );

  const localDate = local.lastActiveDate ? new Date(local.lastActiveDate) : new Date(0);
  const cloudDate = cloud.lastActiveDate ? new Date(cloud.lastActiveDate) : new Date(0);
  if (localDate >= cloudDate) {
    merged.streak = local.streak;
    merged.lastActiveDate = local.lastActiveDate;
  } else {
    merged.streak = cloud.streak;
    merged.lastActiveDate = cloud.lastActiveDate;
  }

  return merged;
}

export function updateStreak(state: UserProgress): UserProgress {
  const today = new Date().toISOString().split('T')[0];
  if (state.lastActiveDate === today) return state;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  const newStreak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;

  return { ...state, streak: newStreak, lastActiveDate: today };
}

export function evaluateAnswerLocally(
  answer: string,
  criteria: { keyword: string; label: string }[]
): { met: string[]; unmet: string[] } {
  const lowerAnswer = answer.toLowerCase();
  const met: string[] = [];
  const unmet: string[] = [];

  criteria.forEach((c) => {
    const keywords = c.keyword.split('|');
    const found = keywords.some((kw) => {
      const regex = new RegExp(kw.replace(/\./g, '[\\s\\-_.]?'), 'i');
      return regex.test(lowerAnswer);
    });
    if (found) met.push(c.label);
    else unmet.push(c.label);
  });

  return { met, unmet };
}
