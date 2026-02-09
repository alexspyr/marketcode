import { createClient } from '@/lib/supabase/server';
import { CATEGORIES, EXERCISES } from '@/lib/exercises';
import { DEFAULT_PROGRESS } from '@/lib/types';
import Link from 'next/link';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let progress = { ...DEFAULT_PROGRESS };
  if (user) {
    const { data } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .single();
    if (data) {
      progress = {
        solved: data.solved || {},
        activity: data.activity || [],
        streak: data.streak || 0,
        lastActiveDate: data.last_active_date,
        totalPoints: data.total_points || 0,
      };
    }
  }

  const solvedCount = Object.keys(progress.solved).length;
  const displayName = user?.email?.split('@')[0] || 'Marketer';

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back, {displayName}!</h1>
        <p className="text-text-secondary text-sm mt-1">
          Sharpen your marketing skills daily. Pick a category and start solving.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Solved', value: solvedCount, color: 'text-accent-orange' },
          { label: 'Total Problems', value: EXERCISES.length, color: 'text-text-primary' },
          { label: 'Total Points', value: progress.totalPoints, color: 'text-accent-orange' },
          { label: 'Day Streak', value: progress.streak, color: 'text-accent-orange' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-bg-card border border-border rounded-xl p-5 text-center hover:border-accent-orange transition-colors"
          >
            <div className={`text-3xl font-bold font-mono ${stat.color}`}>{stat.value}</div>
            <div className="text-text-secondary text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
        {CATEGORIES.map((cat) => {
          const exercises = EXERCISES.filter((e) => e.category === cat.id);
          const solved = exercises.filter((e) => progress.solved[e.id]).length;
          const total = exercises.length;
          const percent = total > 0 ? Math.round((solved / total) * 100) : 0;

          return (
            <Link
              key={cat.id}
              href={`/problems?category=${cat.id}`}
              className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-light hover:-translate-y-0.5 transition-all group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: cat.color }}
              />
              <div className="flex justify-between items-start mb-3">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-xl"
                  style={{ background: `${cat.color}20` }}
                >
                  {cat.icon}
                </div>
                <span className="text-xs text-text-muted bg-bg-primary px-2.5 py-0.5 rounded-full">
                  {solved}/{total} solved
                </span>
              </div>
              <div className="font-semibold text-sm mb-1">{cat.name}</div>
              <div className="text-xs text-text-secondary mb-4 leading-relaxed">{cat.description}</div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-bg-primary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${percent}%`, background: cat.color }}
                  />
                </div>
                <span className="text-xs text-text-muted font-mono">{percent}%</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="bg-bg-card border border-border rounded-xl p-4">
        {(!progress.activity || progress.activity.length === 0) ? (
          <p className="text-text-muted text-center text-sm py-6">No activity yet. Start solving problems!</p>
        ) : (
          <div className="space-y-1">
            {progress.activity.slice(-10).reverse().map((a, i) => {
              const exercise = EXERCISES.find((e) => e.id === a.exerciseId);
              return (
                <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-bg-card-hover transition-colors">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs bg-accent-green/15 text-accent-green shrink-0">
                    ✓
                  </div>
                  <div className="flex-1 text-sm">
                    Solved <strong>{exercise?.title || 'Unknown'}</strong> — earned {a.points} pts
                  </div>
                  <div className="text-xs text-text-muted shrink-0">
                    {new Date(a.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
