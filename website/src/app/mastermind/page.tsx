import Link from "next/link";

export const metadata = {
  title: "Mastermind — Growth & Accountability",
  description: "Cohort-based coaching with live sessions and implementation support.",
};

export default function MastermindPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DB910F] to-[#0097B2] text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Mastermind — Growth & Accountability
          </h1>
          <p className="mt-6 text-xl opacity-95">
            Cohort-based coaching with live sessions and implementation support
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Who It's For */}
          <div className="rounded-2xl border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-[#3B3B3B]">Who It's For</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Graduates of the Foundation Course</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Leaders who want structure and accountability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Those committed to community progress</span>
              </li>
            </ul>
          </div>

          {/* Enroll */}
          <div className="rounded-2xl border-2 border-[#DB910F]/20 bg-gradient-to-br from-[#DB910F]/5 to-[#0097B2]/5 p-8">
            <h2 className="text-2xl font-bold text-[#3B3B3B]">Join the Mastermind</h2>
            <p className="mt-4 text-gray-700">
              Ready to take your healing and growth to the next level? Visit our Mastermind landing page for pricing, dates, and enrollment.
            </p>
            <div className="mt-6">
              <a
                href="https://risetothrive-academy.com/mastermind/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#DB910F] px-6 py-3 font-bold text-white hover:bg-[#B25B00] transition-all"
              >
                Go to Mastermind Landing Page →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
