import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Privacy Policy
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
              This Privacy Policy is part of our integrated legal document titled{" "}
              <strong>"Universal Legal Disclosures"</strong>.
            </p>
            <p className="text-slate-300 mt-4">
              For the full, detailed Privacy Policy (including how we collect, use, store, and protect your data),
              please review <strong>Section 1 — Privacy Policy</strong> in the Universal Legal Disclosures.
            </p>
          </div>

          {/* Link to Full Document */}
          <div className="flex justify-center">
            <Link
              https://academy-hub-masterfile.netlify.app/disclosures/universal-legal-disclosures
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

          {/* Summary Section */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              In Summary
            </h2>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.teal }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p className="text-lg">
                  Collect only the information necessary to deliver our programs, process payments, and communicate with you
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
                  Use trusted third-party services such as Stripe, HubSpot, Meta, and Google Analytics to operate our business
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
                  Do not sell your personal information to third parties
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
                  Provide a way for you to request access, correction, or deletion of your data by emailing{" "}
                  <a
                    href="mailto:support@risetothrive-academy.com"
                    className="font-semibold hover:underline"
                    style={{ color: BRAND.gold }}
                  >
                    support@risetothrive-academy.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Agreement Notice */}
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 text-center leading-relaxed">
              By using any <strong className="text-white">Rise to Thrive Academy</strong> or{" "}
              <strong className="text-white">Transforming Pain into Power</strong> service, course, program, or website,
              you agree to this Privacy Policy and to the full Universal Legal Disclosures.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Questions About Your Privacy?
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
