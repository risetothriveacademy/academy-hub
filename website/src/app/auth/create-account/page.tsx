"use client";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
};

export default function CreateAccountPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl backdrop-blur-md p-8 sm:p-10">
        {/* Pill */}
        <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 mb-4">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full"
            style={{ background: BRAND.teal }}
          />
          Rise to Thrive · Create Account
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Create your{" "}
          <span style={{ color: BRAND.teal }}>Rise to Thrive</span> account
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Use the <span className="font-semibold">same email address</span> you
          used when you purchased the course. This keeps your{" "}
          <span className="font-semibold">progress and access</span> synced in
          HubSpot.
        </p>

        {/* Create Account form */}
        <form
          className="mt-8 space-y-4"         
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="firstName"
                className="text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                required
                placeholder="John"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2 focus:ring-offset-slate-950"
                style={
                  {
                    "--brand-teal": BRAND.teal,
                  } as React.CSSProperties
                }
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="lastName"
                className="text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                required
                placeholder="Doe"
                className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2 focus:ring-offset-slate-950"
                style={
                  {
                    "--brand-teal": BRAND.teal,
                  } as React.CSSProperties
                }
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2 focus:ring-offset-slate-950"
              style={
                {
                  "--brand-teal": BRAND.teal,
                } as React.CSSProperties
              }
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="Create a secure password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2 focus:ring-offset-slate-950"
              style={
                {
                  "--brand-teal": BRAND.teal,
                } as React.CSSProperties
              }
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-xs font-medium uppercase tracking-wide text-slate-300"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              placeholder="Re-enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2 focus:ring-offset-slate-950"
              style={
                {
                  "--brand-teal": BRAND.teal,
                } as React.CSSProperties
              }
            />
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition hover:shadow-xl"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
            }}
          >
            Create Account & Access Your Course
          </button>
        </form>

        {/* Helper links */}
        <div className="mt-6 space-y-2 text-xs text-slate-300">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold"
              style={{ color: BRAND.teal }}
            >
              Log in here
            </a>
            .
          </p>

          <p>
            Already logged in and just need the course portal?{" "}
            <a
              href="/foundation/start"
              className="font-semibold"
              style={{ color: BRAND.gold }}
            >
              Go to your Foundation Course portal
            </a>
            .
          </p>

          <p className="mt-3 text-[11px] text-slate-400">
            By creating an account, you agree to our{" "}
            <a
              href="https://foundation.risetothrive-academy.com/privacy"
              className="underline"
              style={{ color: BRAND.teal }}
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://foundation.risetothrive-academy.com/disclaimer"
              className="underline"
              style={{ color: BRAND.teal }}
            >
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
