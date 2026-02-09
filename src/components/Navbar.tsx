'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import type { UserProgress } from '@/lib/types';

export default function Navbar({ progress }: { progress: UserProgress }) {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setEmail(user?.email ?? null);
    });
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  }

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/problems', label: 'Problems' },
    { href: '/progress', label: 'Progress' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-14 bg-bg-secondary border-b border-border flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-6 lg:gap-8">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="text-lg">✎</span>
          <span className="text-lg font-bold bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent">
            MarketCode
          </span>
        </Link>
        <div className="flex gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-text-primary bg-bg-tertiary'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-sm font-semibold bg-bg-card border border-border rounded-full px-3 py-1">
          <span>🔥</span>
          <span>{progress.streak}</span>
          <span className="hidden sm:inline text-text-secondary font-normal">day streak</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-semibold bg-bg-card border border-border rounded-full px-3 py-1">
          <span className="text-accent-orange">★</span>
          <span>{progress.totalPoints}</span>
          <span className="hidden sm:inline text-text-secondary font-normal">pts</span>
        </div>
        {email && (
          <div className="flex items-center gap-2 ml-2">
            <span className="text-xs text-text-muted hidden md:inline max-w-[120px] truncate">{email}</span>
            <button
              onClick={handleSignOut}
              className="text-xs text-text-secondary hover:text-text-primary bg-bg-card border border-border rounded-full px-3 py-1 transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
