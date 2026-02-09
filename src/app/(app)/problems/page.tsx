'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CATEGORIES, EXERCISES } from '@/lib/exercises';
import { loadLocalProgress } from '@/lib/progress';
import { createClient } from '@/lib/supabase/client';
import type { UserProgress } from '@/lib/types';
import { DEFAULT_PROGRESS } from '@/lib/types';

export default function ProblemsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [filter, setFilter] = useState(initialCategory);
  const [progress, setProgress] = useState<UserProgress>({ ...DEFAULT_PROGRESS });

  useEffect(() => {
    async function load() {
      const local = loadLocalProgress();
      setProgress(local);

      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .single();
        if (data) {
          setProgress({
            solved: data.solved || {},
            activity: data.activity || [],
            streak: data.streak || 0,
            lastActiveDate: data.last_active_date,
            totalPoints: data.total_points || 0,
          });
        }
      }
    }
    load();
  }, []);

  const filtered = filter === 'all'
    ? EXERCISES
    : EXERCISES.filter((e) => e.category === filter);

  const difficultyColor: Record<string, string> = {
    easy: 'text-easy',
    medium: 'text-medium',
    hard: 'text-hard',
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 flex-wrap mb-6">
        {[{ id: 'all', name: 'All' }, ...CATEGORIES].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              filter === cat.id
                ? 'bg-accent-orange border-accent-orange text-black font-semibold'
                : 'bg-bg-card border-border text-text-secondary hover:border-accent-orange hover:text-text-primary'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_140px_90px_70px] px-5 py-3 bg-bg-secondary border-b border-border text-xs font-semibold text-text-muted uppercase tracking-wider">
          <span className="text-center">Status</span>
          <span>Title</span>
          <span className="hidden md:block">Category</span>
          <span>Difficulty</span>
          <span>Points</span>
        </div>
        <div>
          {filtered.map((ex) => {
            const isSolved = !!progress.solved[ex.id];
            const cat = CATEGORIES.find((c) => c.id === ex.category);
            return (
              <Link
                key={ex.id}
                href={`/problems/${ex.id}`}
                className="grid grid-cols-[50px_1fr_140px_90px_70px] px-5 py-3.5 border-b border-border text-sm hover:bg-bg-card-hover transition-colors items-center"
              >
                <span className="flex justify-center">
                  {isSolved ? (
                    <span className="w-5 h-5 rounded-full bg-accent-green/20 text-accent-green flex items-center justify-center text-[11px]">
                      ✓
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border-2 border-border-light" />
                  )}
                </span>
                <span className="font-medium text-text-primary">
                  {ex.id}. {ex.title}
                </span>
                <span className="text-xs text-text-secondary hidden md:block">{cat?.name}</span>
                <span className={`text-xs font-semibold ${difficultyColor[ex.difficulty]}`}>
                  {ex.difficulty.charAt(0).toUpperCase() + ex.difficulty.slice(1)}
                </span>
                <span className="text-xs font-mono text-accent-orange">{ex.points} pts</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
