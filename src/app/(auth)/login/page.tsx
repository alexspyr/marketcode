'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/callback`,
      },
    });

    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
    } else {
      setStatus('sent');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 justify-center mb-8">
          <span className="text-2xl">✎</span>
          <span className="text-2xl font-bold bg-gradient-to-r from-accent-orange to-accent-yellow bg-clip-text text-transparent">
            MarketCode
          </span>
        </Link>

        <div className="bg-bg-card border border-border rounded-xl p-8">
          <h1 className="text-xl font-semibold text-center mb-2">Welcome to MarketCode</h1>
          <p className="text-text-secondary text-sm text-center mb-6">
            Enter your email to receive a magic sign-in link. No password needed.
          </p>

          {!mounted ? (
            <div className="space-y-4">
              <div className="h-5 w-24 bg-bg-input rounded animate-pulse" />
              <div className="h-12 bg-bg-input rounded-lg animate-pulse" />
              <div className="h-12 bg-accent-green/30 rounded-lg animate-pulse" />
            </div>
          ) : status === 'sent' ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-green text-2xl">✓</span>
              </div>
              <h2 className="text-lg font-semibold mb-2">Check your email</h2>
              <p className="text-text-secondary text-sm">
                We sent a magic link to <strong className="text-text-primary">{email}</strong>.
                Click the link to sign in.
              </p>
              <p className="text-text-muted text-xs mt-4">
                Don&apos;t see it? Check your spam folder. The link expires in 1 hour.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-accent-orange text-sm hover:underline"
              >
                Try a different email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="block text-sm text-text-muted mb-2 uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
                suppressHydrationWarning
                className="w-full bg-bg-input border border-border rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-orange transition-colors"
              />

              {status === 'error' && (
                <p className="text-accent-red text-sm mt-2">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-4 bg-accent-green text-black font-semibold py-3 rounded-lg hover:bg-accent-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Magic Link'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-text-muted text-xs mt-6">
          By signing in, you agree to practice marketing daily.
        </p>
      </div>
    </div>
  );
}
