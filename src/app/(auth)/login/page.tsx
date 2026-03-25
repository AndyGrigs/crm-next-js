'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/dashboard');
    } else {
      const data = await res.json();
      setError(data.message || 'Invalid credentials');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-gray-900 p-12">
        <div>
          {/* Logo placeholder — замінити на реальний /icons/logo.svg */}
          <svg width="122" height="25" viewBox="0 0 122 25" fill="none">
            <rect width="122" height="25" rx="4" fill="#4B5563" />
            <text x="12" y="17" fill="#F9FAFB" fontSize="12" fontFamily="sans-serif">
              CRM
            </text>
          </svg>
        </div>
        <div>
          <p className="text-3xl font-semibold text-white leading-snug">
            Manage your companies <br />
            <span className="text-gray-400">all in one place.</span>
          </p>
        </div>
        <p className="text-sm text-gray-500">© 2024 CRM App</p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center bg-zinc-50 px-8">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Sign in to your account to continue
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                required
                className="h-11 px-3 rounded border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-11 px-3 rounded border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-11 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 active:bg-gray-950 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}