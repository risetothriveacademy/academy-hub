"use client";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl backdrop-blur-md p-8 sm:p-10">
        {/* Pill */}
        <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-300 mb-4">
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full"
            style={{ background: BRAND.teal }}
          />
          Rise to Thrive · Secure Login
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
          Log in to your{" "}
          <span style={{ color: BRAND.teal }}>Rise to Thrive</span> course portal
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Use the <span className="font-semibold">same email address</span> you
          used when you purchased the course. This keeps your{" "}
          <span className="font-semibold">progress and access</span> synced in
          HubSpot.
        </p>

        {/* Login form */}
        <form
          className="mt-8 space-y-4"
          // NOTE: This will eventually post to your HubSpot / auth backend.
          onSubmit={(e) => {
            e.preventDefault();
            // Temporary: front-end only – real logic will be wired later.
            alert(
              "Login UI is working.\nNext step: connect this form to HubSpot authentication."
            );
          }}
        >
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
              placeholder="Enter your password"
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
            Log in & continue to your course
          </button>
        </form>

        {/* Helper links */}
        <div className="mt-6 space-y-2 text-xs text-slate-300">
          <p>
            New here?{" "}
            <a
              href="/auth/create-account"
              className="font-semibold"
              style={{ color: BRAND.teal }}
            >
              Create your account first
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
            For security, do not share your login details. If you need help,
            contact our support team and we’ll resend your access link.
          </p>
        </div>
      </div>
    </main>
  );
}
