import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Terms of Use
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
              These Terms of Use are part of our integrated legal document titled{" "}
              <strong>"Universal Legal Disclosures"</strong>.
            </p>
            <p className="text-slate-300 mt-4">
              For the complete Terms of Use, please review <strong>Section 2 — Terms of Use</strong> in the Universal Legal Disclosures.
            </p>
          </div>

          {/* Link to Full Document */}
          <div className="flex justify-center">
            <Link
              href="/disclosures/universal-legal-disclosures"
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

          {/* Agreement Notice */}
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 text-center leading-relaxed">
              By accessing or purchasing any <strong className="text-white">Rise to Thrive Academy</strong> resource,
              you agree to these Terms of Use and to the full Universal Legal Disclosures.
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
