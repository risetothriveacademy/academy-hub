"use client";

import React, { useState } from "react";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  ink: "#3B3B3B",
};

export default function CreateAccountPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // TEMP: Just a front-end handler.
  // Later this will:
  // 1) Send the data to HubSpot (form or API),
  // 2) Trigger the “Create your account” email,
  // 3) Create a login for the course portal.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async call
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-xl rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
        {/* Top banner */}
        <div
          className="px-6 py-4 text-center text-white font-semibold tracking-wide"
          style={{
            backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
          }}
        >
          Create Your Rise to Thrive Account
        </div>

        <div className="px-6 py-6 space-y-4">
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-600">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND.teal }}
              />
              Step 1 · Secure your login details
            </span>
          </div>

          <h1 className="text-center text-2xl font-semibold text-slate-900">
            Welcome to the{" "}
            <span style={{ color: BRAND.teal }}>5-Day Foundation Course</span>
          </h1>

          <p className="text-sm text-center text-slate-600">
            Use the <strong>same email address</strong> you used for your
            purchase. This keeps your Stripe payment, HubSpot profile, and
            course progress all in sync.
          </p>

          {submitted ? (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              <p className="font-semibold">Account details received ✅</p>
              <p className="mt-1">
                Your account information has been captured. Next, check your
                inbox for your login confirmation email. If you don’t see it,
                please check your promotions or spam folder.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2 space-y-4">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-[#0097B2]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-[#0097B2]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (same as purchase)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-[#0097B2]"
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  This must match the email you used at checkout so HubSpot can
                  attach your course access correctly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Create Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-[#0097B2]"
                  />
                  <p className="mt-1 text-[11px] text-slate-500">
                    Minimum 8 characters. You&apos;ll use this to log in to your
                    course portal.
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    minLength={8}
                    required
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0097B2] focus:border-[#0097B2]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
                }}
              >
                {isSubmitting ? "Creating your account..." : "Create Account"}
              </button>

              <p className="text-[11px] text-slate-500 text-center mt-2">
                By continuing, you agree to receive course-related emails about
                your{" "}
                <span className="font-semibold">
                  Rise to Thrive Foundation Course
                </span>{" "}
                and portal access.
              </p>
            </form>
          )}

          {/* Already have account */}
          <div className="mt-5 border-t border-slate-100 pt-4 text-center">
            <p className="text-xs text-slate-600 mb-2">
              Already created your account?
            </p>
            <a
              href="/auth/login"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Go to Login Portal
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
