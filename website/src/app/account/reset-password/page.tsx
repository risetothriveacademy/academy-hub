"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { BRAND, brandGradients } from "@/lib/brand";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing reset token");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to reset password");
        return;
      }

      setSuccess(true);

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/account/login?reset=true");
      }, 3000);
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: brandGradients.charcoalGlow }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <img
              src="/brand/logo-rth.png"
              alt="Rise to Thrive Academy"
              className="h-16 w-auto mx-auto mb-4"
            />
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Reset Your Password</h1>
          <p className="text-slate-300">Enter your new password below</p>
        </div>

        {/* Reset Password Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {success ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Password Reset Successful!</h2>
              <p className="text-sm text-gray-600">
                Your password has been updated successfully.
              </p>
              <p className="text-xs text-gray-500">
                Redirecting you to login...
              </p>
              <Link
                href="/account/login"
                className="inline-block mt-6 font-semibold hover:underline"
                style={{ color: BRAND.teal }}
              >
                Go to Login →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0097B2] focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
                <p className="mt-1 text-xs text-gray-500">Minimum 8 characters</p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0097B2] focus:border-transparent outline-none transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                disabled={loading || !token}
                className="w-full py-3 px-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundImage: brandGradients.tealGoldDiagonal }}
              >
                {loading ? "Resetting Password..." : "Reset Password"}
              </button>

              <div className="text-center">
                <Link
                  href="/account/login"
                  className="text-sm font-semibold hover:underline"
                  style={{ color: BRAND.teal }}
                >
                  ← Back to Login
                </Link>
              </div>
            </form>
          )}
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-slate-300 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
