import { createClient } from '@/lib/supabase/server';
import Navbar from '@/components/Navbar';
import { DEFAULT_PROGRESS } from '@/lib/types';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
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

  return (
    <>
      <Navbar progress={progress} />
      <main className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        {children}
      </main>
    </>
  );
}
