import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-300">
            Effective Date: December 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Notice */}
          <div
            className="rounded-xl border-2 p-6"
            style={{
              borderColor: BRAND.teal,
              backgroundColor: 'rgba(0, 151, 178, 0.1)'
            }}
          >
            <p className="text-lg text-white leading-relaxed">
              These Terms of Service are part of our integrated legal document titled{" "}
              <strong>"Universal Legal Disclosures"</strong>.
            </p>
            <p className="text-slate-300 mt-4">
              For the full, detailed Terms (including intellectual property, user responsibilities, limitation of liability, and dispute resolution), please review:
            </p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span style={{ color: BRAND.teal }}>•</span>
                <span><strong>Section 2</strong> — Terms of Use</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: BRAND.teal }}>•</span>
                <span><strong>Section 3</strong> — Refund Policy</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: BRAND.teal }}>•</span>
                <span><strong>Section 4</strong> — Faith-Based, Coaching & Format Disclaimer</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: BRAND.teal }}>•</span>
                <span><strong>Section 5</strong> — Legal Protection Clauses</span>
              </li>
            </ul>
            <p className="text-slate-300 mt-4">
              in the Universal Legal Disclosures.
            </p>
          </div>

          {/* Link to Full Document */}
          <div className="flex justify-center">
            <Link
          href="https://academy-hub-masterfile.netlify.app/disclosures/universal-legal-disclosures"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
          style={{
          background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`
          }}
          >
              🔗 View the full Universal Legal Disclosures
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Summary - By Accessing or Purchasing */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <p className="text-lg text-white mb-6 leading-relaxed">
              By accessing or purchasing any resource from <strong>Rise to Thrive Academy Inc.</strong>,
              <strong> Rise to Thrive Hub LLC</strong>, <strong>Transforming Pain into Power</strong>, or{" "}
              <strong>Torah Mathews (DBA Rise to Thrive Academy)</strong>, you agree that:
            </p>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  All programs are faith-based and educational and do not replace professional medical, psychological, legal, or financial care
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  All sales are final due to immediate digital access
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  You receive a single-user, non-transferable license to use the content
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  You will not copy, distribute, resell, or publicly share the course materials
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  Any disputes will be handled according to the arbitration and governing-law clauses in the Universal Legal Disclosures
                </p>
              </div>
            </div>
          </div>

          {/* Acceptance Notice */}
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 text-center leading-relaxed text-lg">
              Use of this website and all related programs indicates your acceptance of these Terms and the full Universal Legal Disclosures.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-slate-300 mb-4">
              Contact us at:
            </p>
            <a
              href="mailto:support@risetothrive-academy.com"
              className="text-lg font-semibold hover:underline"
              style={{ color: BRAND.gold }}
            >
              support@risetothrive-academy.com
            </a>
            <p className="text-slate-400 text-sm mt-4">
              Mailing Address: 5830 E 2nd St, Ste 7000 #30207, Casper, Wyoming 82609 USA
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
