"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push("/admin/reviews");
      } else {
        const err = await response.json();
        setError(err.error || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to login");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-ink via-ink-soft to-ink-2 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold-light to-gold-dark flex items-center justify-center">
                <span className="text-ink font-display font-bold text-lg">TS</span>
              </div>
              <div>
                <p className="font-display text-2xl text-paper font-bold">TikTok Shop</p>
                <p className="text-xs uppercase tracking-wider text-gold">Solutions</p>
              </div>
            </div>
          </Link>
          <h1 className="font-display text-3xl text-paper mt-6">Admin Access</h1>
          <p className="text-paper/50 mt-2">Manage reviews and content</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="bg-ink-2 rounded-2xl border border-line p-8 shadow-2xl">
          <div className="mb-5">
            <label className="block text-sm font-medium text-paper mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-paper placeholder-paper/30 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              placeholder="adeel123@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-paper mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-line bg-ink px-4 py-2.5 text-paper placeholder-paper/30 transition-all focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="mb-4 rounded-lg bg-red-50/20 p-3 text-sm text-red-400">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gold px-4 py-2.5 font-medium text-ink transition-all hover:bg-gold-dark disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Test Credentials Info */}
        <div className="mt-6 p-4 rounded-lg bg-ink-2/50 border border-gold/20">
          <p className="text-xs text-paper/60 mb-2">Test Credentials:</p>
          <p className="text-xs font-mono text-gold">Email: adeel123@gmail.com</p>
          <p className="text-xs font-mono text-gold">Password: Pakistan@1947</p>
        </div>

        {/* Footer */}
        <p className="text-center text-paper/40 text-sm mt-6">
          <Link href="/" className="text-gold hover:underline">
            ← Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
