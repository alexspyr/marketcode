import { createClient } from '@/lib/supabase/server';
import { CATEGORIES, EXERCISES } from '@/lib/exercises';
import { DEFAULT_PROGRESS } from '@/lib/types';

export default async function ProgressPage() {
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
  const totalCount = EXERCISES.length;
  const percent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Your Progress</h1>

      {/* Progress Ring */}
      <div className="flex justify-center mb-10">
        <div className="relative w-[200px] h-[200px]">
          <svg className="-rotate-90" width="200" height="200">
            <circle cx="100" cy="100" r="85" fill="none" stroke="var(--color-border)" strokeWidth="10" />
            <circle
              cx="100" cy="100" r="85"
              fill="none"
              stroke="var(--color-accent-orange)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-mono text-accent-orange">{percent}%</span>
            <span className="text-xs text-text-muted">Complete</span>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {CATEGORIES.map((cat) => {
          const exercises = EXERCISES.filter((e) => e.category === cat.id);
          const solved = exercises.filter((e) => progress.solved[e.id]).length;
          const total = exercises.length;
          const catPercent = total > 0 ? Math.round((solved / total) * 100) : 0;
          const catPoints = exercises.reduce((sum, e) => sum + (progress.solved[e.id]?.points || 0), 0);
          const maxPoints = exercises.reduce((sum, e) => sum + e.points, 0);

          return (
            <div key={cat.id} className="bg-bg-card border border-border rounded-xl p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm">{cat.icon} {cat.name}</span>
                <span className="font-mono text-sm text-accent-orange">{catPoints}/{maxPoints} pts</span>
              </div>
              <div className="h-2 bg-bg-primary rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${catPercent}%`, background: cat.color }}
                />
              </div>
              <div className="text-xs text-text-muted">{solved}/{total} problems solved</div>
            </div>
          );
        })}
      </div>

      {/* Points History */}
      <h2 className="text-lg font-semibold mb-4">Points History</h2>
      <div className="bg-bg-card border border-border rounded-xl p-4 max-h-[400px] overflow-y-auto">
        {(!progress.activity || progress.activity.length === 0) ? (
          <p className="text-text-muted text-center text-sm py-6">No points earned yet. Start solving!</p>
        ) : (
          <div className="space-y-0.5">
            {[...progress.activity].reverse().map((a, i) => {
              const ex = EXERCISES.find((e) => e.id === a.exerciseId);
              return (
                <div key={i} className="flex justify-between items-center p-2.5 rounded-lg odd:bg-white/[0.02]">
                  <span className="text-sm font-medium">{ex?.title || 'Unknown'}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono font-semibold text-accent-green">+{a.points} pts</span>
                    <span className="text-xs text-text-muted">
                      {new Date(a.timestamp).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
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
