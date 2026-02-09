import Link from 'next/link';
import { CATEGORIES, EXERCISES } from '@/lib/exercises';

export default function LandingPage() {
  const previewExercises = [EXERCISES[0], EXERCISES[10], EXERCISES[20]];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 h-14 bg-bg-secondary/80 backdrop-blur-lg border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-lg">✎</span>
          <span className="text-lg font-bold bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent">
            MarketCode
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/login" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Sign In
          </Link>
          <Link
            href="/login"
            className="text-sm font-semibold bg-accent-orange text-black px-4 py-1.5 rounded-lg hover:bg-accent-orange/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-accent-orange/10 text-accent-orange text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          50+ exercises across 5 categories
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Level Up Your
          <br />
          <span className="bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent">
            Marketing Skills
          </span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          LeetCode-style daily exercises for copywriters, social media managers, and content creators.
          Practice real-world scenarios. Get AI-powered feedback. Track your progress.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/login"
            className="bg-accent-orange text-black font-semibold px-8 py-3 rounded-lg text-sm hover:bg-accent-orange/90 transition-colors"
          >
            Start Practicing Free
          </Link>
          <a
            href="#preview"
            className="text-text-secondary font-medium px-6 py-3 rounded-lg text-sm border border-border hover:border-border-light transition-colors"
          >
            See Exercises
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '🎯', title: '50+ Exercises', desc: 'Real-world marketing scenarios across 5 categories — from ad copy to campaign strategy.' },
            { icon: '🤖', title: 'AI Feedback', desc: 'Get instant, detailed feedback on your answers powered by ChatGPT evaluation.' },
            { icon: '📈', title: 'Track Progress', desc: 'Daily streaks, points, and completion tracking to keep you motivated.' },
            { icon: '💡', title: 'Learn by Doing', desc: 'No boring theory. Practice with scenarios from real marketing challenges.' },
          ].map((f, i) => (
            <div key={i} className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-light transition-colors">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-3">5 Categories to Master</h2>
        <p className="text-text-secondary text-center mb-10">From AI image prompting to audience analysis</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="bg-bg-card border border-border rounded-xl p-5 text-center">
              <div className="text-3xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-sm mb-1">{cat.name}</div>
              <div className="text-xs text-text-muted">10 exercises</div>
            </div>
          ))}
        </div>
      </section>

      {/* Exercise Preview */}
      <section id="preview" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-3">Try a Sample Exercise</h2>
        <p className="text-text-secondary text-center mb-10">Here is what practicing on MarketCode looks like</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {previewExercises.map((ex) => {
            const cat = CATEGORIES.find((c) => c.id === ex.category);
            const diffColor: Record<string, string> = { easy: 'text-easy', medium: 'text-medium', hard: 'text-hard' };
            return (
              <div key={ex.id} className="bg-bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue font-semibold">
                    {cat?.name}
                  </span>
                  <span className={`text-xs font-semibold ${diffColor[ex.difficulty]}`}>
                    {ex.difficulty.charAt(0).toUpperCase() + ex.difficulty.slice(1)}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{ex.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">{ex.prompt}</p>
                <Link href="/login" className="text-xs text-accent-orange hover:underline font-medium">
                  Try this exercise →
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Pick a Category', desc: 'Choose from Image Prompting, Campaign Strategy, Content Planning, Facebook Campaigns, or Target Audience.' },
            { step: '2', title: 'Write Your Answer', desc: 'Read the real-world marketing scenario and write your strategic response in the editor.' },
            { step: '3', title: 'Get AI Feedback', desc: 'Submit and get instant AI-powered evaluation with a score, criteria breakdown, and feedback.' },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-12 h-12 bg-accent-orange/15 text-accent-orange rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Progress */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-3">Watch Your Skills Grow</h2>
        <p className="text-text-secondary text-center mb-10">See how your marketing expertise improves over time</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-bg-card border border-border rounded-xl p-6">
            <div className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-4">Day 1</div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-[100px] h-[100px]">
                <svg className="-rotate-90" width="100" height="100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-border)" strokeWidth="6" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold font-mono text-text-muted">0%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-text-muted">Problems Solved</span><span>0</span></div>
              <div className="flex justify-between"><span className="text-text-muted">Points</span><span>0</span></div>
              <div className="flex justify-between"><span className="text-text-muted">Streak</span><span>0 days</span></div>
            </div>
          </div>
          <div className="bg-bg-card border border-accent-orange/30 rounded-xl p-6 relative">
            <div className="absolute top-3 right-3 bg-accent-orange text-black text-[10px] font-bold px-2 py-0.5 rounded-full">YOU</div>
            <div className="text-xs text-accent-orange font-semibold uppercase tracking-wider mb-4">Day 30</div>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-[100px] h-[100px]">
                <svg className="-rotate-90" width="100" height="100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-border)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-accent-orange)" strokeWidth="6" strokeLinecap="round" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * 0.4} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold font-mono text-accent-orange">60%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-text-muted">Problems Solved</span><span className="text-accent-green font-semibold">30</span></div>
              <div className="flex justify-between"><span className="text-text-muted">Points</span><span className="text-accent-orange font-semibold">520</span></div>
              <div className="flex justify-between"><span className="text-text-muted">Streak</span><span className="font-semibold">🔥 30 days</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to sharpen your marketing skills?</h2>
        <p className="text-text-secondary mb-8 max-w-lg mx-auto">Join marketers who practice daily. Free to start. No credit card required.</p>
        <Link href="/login" className="inline-block bg-accent-orange text-black font-semibold px-10 py-3.5 rounded-lg text-sm hover:bg-accent-orange/90 transition-colors">
          Start Practicing Free
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span>✎</span>
            <span className="font-semibold bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent">MarketCode</span>
          </div>
          <span>Practice marketing. Get better. Daily.</span>
        </div>
      </footer>
    </div>
  );
}
