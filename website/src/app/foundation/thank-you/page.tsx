import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
};

export const metadata = {
  title: "Thank You — Rise to Thrive Academy",
  description: "Thank you for taking the first step toward healing.",
};

export default function FoundationThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-3xl px-6 py-20">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="h-20 w-20 rounded-full flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
            }}
          >
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          Thank You for Taking the First Step
        </h1>

        {/* Confirmation Message */}
        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-[#0097B2] mb-4">
            What Happens Next?
          </h2>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ background: BRAND.teal }}
              >
                1
              </div>
              <div>
                <h3 className="font-semibold text-white">Check Your Email</h3>
                <p className="text-sm">
                  We've sent a confirmation email to your inbox with important
                  information about the Foundation Course.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ background: BRAND.gold }}
              >
                2
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  We'll Be In Touch Shortly
                </h3>
                <p className="text-sm">
                  A member of our team will reach out within 24-48 hours to
                  answer any questions and guide you through the next steps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div
                className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ background: BRAND.teal }}
              >
                3
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Review Program Details
                </h3>
                <p className="text-sm">
                  In the meantime, you can learn more about the Foundation
                  Course and what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 rounded-lg border border-slate-700 bg-slate-900/40 p-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            Important Reminder
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            This program is designed to support you through faith-based education
            and practical tools. Please remember this does not replace professional
            medical, mental health, legal, or financial care. If you are in crisis,
            please contact a licensed professional or call the National Suicide
            Prevention Lifeline at{" "}
            <a
              href="tel:988"
              className="text-[#0097B2] hover:text-[#00c5e5] font-semibold"
            >
              988
            </a>
            .
          </p>
          <p className="mt-3 text-xs text-slate-400">
            You can review our full{" "}
            <Link
              href="/disclosures/universal-legal-disclosures"
              className="text-[#0097B2] hover:text-[#00c5e5] underline"
            >
              Universal Legal Disclosures
            </Link>{" "}
            at any time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="https://foundation.risetothrive-academy.com/offer-video-a"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-slate-950 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
            }}
          >
            Learn More About Foundation Course
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border-2 border-slate-700 bg-slate-900/60 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white hover:bg-slate-800/60 transition-all"
          >
            Return to Home
          </Link>
        </div>

        {/* Support Contact */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400">
            Questions? Contact us at{" "}
            <a
              href="mailto:support@risetothrive-academy.com"
              className="text-[#0097B2] hover:text-[#00c5e5] font-semibold"
            >
              support@risetothrive-academy.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
