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
          Log in to{" "}
          <span style={{ color: BRAND.teal }}>My Courses</span>
        </h1>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          Use the <span className="font-semibold" style={{ color: BRAND.gold }}>same email address</span> you
          used when you purchased any course.
          <span className="block mt-2 text-xs text-slate-400">
            💡 Can't remember which email? Check your Stripe payment receipt.
          </span>
        </p>

        {/* Login form */}
       <form className="mt-8 space-y-4">
    
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-medium uppercase tracking-wide text-slate-300"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs font-semibold hover:underline"
                style={{ color: BRAND.gold }}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password recovery is automated!\n\n1. Enter your email below\n2. Click 'Send Reset Link'\n3. Check your inbox for reset link (instant)\n4. Click link and set new password\n\nForgot which email you used?\n→ Check your Stripe payment receipt\n→ Search inbox for 'Rise to Thrive Receipt'\n\nNo receipt found? Account may be locked for security. Contact support@risetothrive-academy.com");
                }}
              >
                Forgot password?
              </a>
            </div>
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
            Log in & continue to your courses
          </button>
        </form>

        {/* Helper links */}
        <div className="mt-6 space-y-3 text-xs text-slate-300">
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

          {/* Security Notice */}
          <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/40 p-3 text-[11px] text-slate-400">
            <p className="font-semibold text-slate-300 mb-2" style={{ color: BRAND.gold }}>
              🔒 Account Security & Recovery
            </p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Sharing login credentials violates our Terms of Service</li>
              <li>We monitor for suspicious activity as workbooks may contain user confidential information</li>
              <li>Forgot password? Use the automated reset link above (email sent instantly)</li>
              <li>Forgot which email you used? Check your Stripe payment receipt - it shows your login email</li>
              <li>Lost your receipt? Search your email inbox for "Rise to Thrive" or "Stripe Receipt"</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
