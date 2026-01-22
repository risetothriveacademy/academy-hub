import Link from "next/link";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-lg text-slate-300">
            Effective Date: December 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* ALL SALES FINAL Notice */}
          <div
            className="rounded-xl border-2 p-8 text-center"
            style={{
              borderColor: BRAND.gold,
              backgroundColor: 'rgba(219, 145, 15, 0.1)'
            }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              ALL SALES ARE FINAL
            </h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              Because all programs include immediate digital access upon purchase,{" "}
              <strong>all sales are final</strong>.
            </p>
          </div>

          {/* Notice */}
          <div
            className="rounded-xl border-2 p-6"
            style={{
              borderColor: BRAND.teal,
              backgroundColor: 'rgba(0, 151, 178, 0.1)'
            }}
          >
            <p className="text-lg text-white leading-relaxed">
              This Refund Policy is part of our integrated legal document titled{" "}
              <strong>"Universal Legal Disclosures"</strong>.
            </p>
            <p className="text-slate-300 mt-4">
              For the complete Refund Policy, please review <strong>Section 3 — Refund Policy</strong> in the Universal Legal Disclosures.
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

          {/* Policy Applies To */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              This Policy Applies To:
            </h2>

            <div className="space-y-3 text-slate-300 text-lg">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>Foundation Course</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>All Mini-Courses</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>All Christian coaching programs</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>All digital downloads and resources</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>Membership programs</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>Online events and workshops</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: BRAND.gold }}
                >
                  <span className="text-white text-sm font-bold">•</span>
                </div>
                <p>All future products or offerings</p>
              </div>
            </div>
          </div>

          {/* Intentional Pricing Notice */}
          <div className="bg-slate-900/40 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 text-center leading-relaxed">
              We intentionally maintain accessible pricing to support emotional and faith-based recovery.
            </p>
          </div>

          {/* Agreement Notice */}
          <div
            className="rounded-xl border-2 p-6"
            style={{
              borderColor: BRAND.gold,
              backgroundColor: 'rgba(219, 145, 15, 0.05)'
            }}
          >
            <p className="text-lg text-white text-center leading-relaxed">
              <strong>By completing your purchase</strong>, you acknowledge, understand, and accept that all sales made
              through Rise to Thrive Academy are final.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold text-white mb-4">
              Questions About This Policy?
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
