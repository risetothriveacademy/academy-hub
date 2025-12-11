import Link from "next/link";

export const metadata = {
  title: "Advanced Mastery — Lead & Multiply",
  description: "Deep-dive curriculum and leadership labs. Application required.",
};

export default function AdvancedMasteryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0097B2] to-[#10B981] text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold mb-4">
            Application Required
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Advanced Mastery — Lead & Multiply
          </h1>
          <p className="mt-6 text-xl opacity-95">
            Deep-dive curriculum and leadership labs for advanced practitioners
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Highlights */}
          <div className="rounded-2xl border-2 border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-[#3B3B3B]">Program Highlights</h2>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Advanced tools & frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Mentoring & practice labs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Community leadership development</span>
              </li>
            </ul>
          </div>

          {/* Apply */}
          <div className="rounded-2xl border-2 border-[#0097B2]/20 bg-gradient-to-br from-[#0097B2]/5 to-[#10B981]/5 p-8">
            <h2 className="text-2xl font-bold text-[#3B3B3B]">Apply Now</h2>
            <p className="mt-4 text-gray-700">
              This program is by application only. Visit the Advanced Mastery landing page for details and to submit your application.
            </p>
            <div className="mt-6">
              <a
                href="https://risetothrive-academy.com/advanced-mastery/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#0097B2] px-6 py-3 font-bold text-white hover:bg-[#057a8f] transition-all"
              >
                Go to Advanced Mastery Landing Page →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
