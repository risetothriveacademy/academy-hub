import Link from "next/link";

export const metadata = {
  title: "Universal Legal Disclosures — Rise to Thrive Academy",
  description: "Privacy Policy, Terms of Use, Refund Policy, and Faith-Based Disclaimer.",
};

export default function UniversalLegalDisclosuresPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#0097B2] hover:text-[#00c5e5] mb-6"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            UNIVERSAL LEGAL DISCLOSURES
          </h1>
          <p className="text-lg text-slate-400">
            <strong>DBA Rise to Thrive Academy</strong>
            <br />
            Effective Date: December 2025
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 rounded-2xl border border-slate-700 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
          <nav className="space-y-3">
            <a href="#privacy-policy" className="block text-[#0097B2] hover:text-[#00c5e5]">
              1. Privacy Policy
            </a>
            <a href="#terms-of-use" className="block text-[#0097B2] hover:text-[#00c5e5]">
              2. Terms of Use
            </a>
            <a href="#refund-policy" className="block text-[#0097B2] hover:text-[#00c5e5]">
              3. Refund Policy
            </a>
            <a href="#faith-based-disclaimer" className="block text-[#0097B2] hover:text-[#00c5e5]">
              4. Faith-Based & Coaching Disclaimer
            </a>
            <a href="#legal-protection" className="block text-[#0097B2] hover:text-[#00c5e5]">
              5. Legal Protection Clauses
            </a>
          </nav>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-slate max-w-none">
          {/* Introduction */}
          <div className="mb-12 rounded-lg border border-slate-700 bg-slate-900/40 p-6">
            <p className="text-slate-300 leading-relaxed">
              This master document contains five integrated legal sections that apply to all
              products, services, digital programs, ads, funnels, courses, websites,
              communication channels, and coaching systems offered under:
            </p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>• <strong>Rise to Thrive Academy Inc.</strong></li>
              <li>• <strong>Rise to Thrive Hub LLC</strong></li>
              <li>• <strong>Transforming Pain into Power</strong></li>
              <li>• <strong>Torah Mathews (DBA Rise to Thrive Academy)</strong></li>
            </ul>
            <div className="mt-6 text-sm text-slate-400">
              <p><strong>Mailing Address:</strong><br />
              5830 E 2nd St, Ste 7000 #30207, Casper, Wyoming 82609 USA</p>
              <p className="mt-2"><strong>Support Email:</strong><br />
              <a href="mailto:support@risetothrive-academy.com" className="text-[#0097B2] hover:text-[#00c5e5]">
                support@risetothrive-academy.com
              </a></p>
              <p className="mt-2 italic">
                We do not offer phone support. All customer service communication must be
                submitted in writing via email.
              </p>
            </div>
          </div>

          {/* Section 1: Privacy Policy */}
          <section id="privacy-policy" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-[#0097B2]">
              SECTION 1 — PRIVACY POLICY
            </h2>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h3>
            <p className="text-slate-300 leading-relaxed">
              This Privacy Policy explains how we collect, use, store, and protect your
              information when you access our websites, respond to Meta ads, enroll in any
              course, submit a lead form, or engage with our coaching and digital programs.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              By using any Rise to Thrive Academy service, you agree to this Privacy Policy.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h3>
            <h4 className="text-xl font-semibold text-[#0097B2] mt-6 mb-3">Information You Provide</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Full name</li>
              <li>• Email address</li>
              <li>• Phone number (optional)</li>
              <li>• Billing information</li>
              <li>• Survey or intake responses</li>
            </ul>

            <h4 className="text-xl font-semibold text-[#0097B2] mt-6 mb-3">Automatically Collected Data</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• IP address</li>
              <li>• Browser/device information</li>
              <li>• Website activity</li>
              <li>• Meta Ads event data</li>
              <li>• Google Analytics data</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h3>
            <p className="text-slate-300 leading-relaxed">We use your data to:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Deliver purchased content</li>
              <li>• Process payments through Stripe</li>
              <li>• Send course materials and updates</li>
              <li>• Deliver automated emails</li>
              <li>• Improve website performance</li>
              <li>• Provide customer support</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Sharing of Information</h3>
            <p className="text-slate-300 leading-relaxed">Your data may be shared with:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• <strong>Stripe</strong> (payment processing)</li>
              <li>• <strong>HubSpot</strong> (CRM & automation)</li>
              <li>• <strong>Meta</strong> (ad relevance & performance)</li>
              <li>• <strong>Google Analytics</strong></li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
              We <strong>do not sell personal information</strong> to third parties.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">5. Your Rights</h3>
            <p className="text-slate-300 leading-relaxed">
              You may request access, correction, or deletion of your data at any time by emailing:
              <br />
              <a href="mailto:support@risetothrive-academy.com" className="text-[#0097B2] hover:text-[#00c5e5] font-semibold">
                support@risetothrive-academy.com
              </a>
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">6. Security</h3>
            <p className="text-slate-300 leading-relaxed">
              We use industry-standard protections but cannot guarantee absolute security for
              online transmissions.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">7. Children</h3>
            <p className="text-slate-300 leading-relaxed">
              Not intended for individuals under age 18.
            </p>
          </section>

          {/* Section 2: Terms of Use */}
          <section id="terms-of-use" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-[#0097B2]">
              SECTION 2 — TERMS OF USE
            </h2>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement</h3>
            <p className="text-slate-300 leading-relaxed">
              By accessing or purchasing any Rise to Thrive Academy resource, you agree to these
              Terms of Use.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
              2. Not Medical, Psychiatric, Legal, or Financial Advice
            </h3>
            <p className="text-slate-300 leading-relaxed">Our programs provide:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Faith-based teaching</li>
              <li>• Emotional resilience tools</li>
              <li>• Trauma-informed perspectives</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">We <strong>do not</strong> provide:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Therapy</li>
              <li>• Counseling</li>
              <li>• Medical or psychiatric diagnosis</li>
              <li>• Crisis intervention</li>
              <li>• Legal or financial advice</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
              Please consult licensed professionals for medical or psychological needs.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Responsibilities</h3>
            <p className="text-slate-300 leading-relaxed">You agree to:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Use the content for personal use only</li>
              <li>• Not share login credentials</li>
              <li>• Not copy, distribute, or reproduce course content</li>
              <li>• Not resell or reuse program materials</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
              4. Intellectual Property Ownership
            </h3>
            <p className="text-slate-300 leading-relaxed">
              All course materials, videos, scripts, branding, logos, written content,
              downloads, images, coaching materials, and digital curriculum are the exclusive
              property of:
            </p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Rise to Thrive Academy Inc.</li>
              <li>• Rise to Thrive Hub LLC</li>
              <li>• Transforming Pain into Power</li>
              <li>• Torah Mathews (DBA Rise to Thrive Academy)</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              Users receive a <strong>single-user, non-transferable license</strong>.
              Unauthorized copying, distribution, or publishing of content is prohibited.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h3>
            <p className="text-slate-300 leading-relaxed">We are not liable for:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• User decisions</li>
              <li>• Emotional reactions</li>
              <li>• Business or financial outcomes</li>
              <li>• Technical interruptions</li>
              <li>• Website downtime</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">6. Governing Law</h3>
            <p className="text-slate-300 leading-relaxed">
              These Terms are governed by the laws of the <strong>State of Wyoming, USA</strong>.
            </p>
          </section>

          {/* Section 3: Refund Policy */}
          <section id="refund-policy" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-[#DB910F]">
              SECTION 3 — REFUND POLICY
            </h2>

            <div className="rounded-lg border-2 border-[#DB910F] bg-[#DB910F]/10 p-6 mb-6">
              <h3 className="text-2xl font-bold text-[#DB910F] mb-4">ALL SALES ARE FINAL</h3>
              <p className="text-slate-300 leading-relaxed">
                Because all programs include immediate digital access upon purchase,{" "}
                <strong>all sales are final</strong>.
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed">This applies to:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Foundation Course</li>
              <li>• All Mini-Courses</li>
              <li>• All Christian coaching programs</li>
              <li>• All digital downloads and resources</li>
              <li>• Membership programs</li>
              <li>• Online events and workshops</li>
              <li>• All future products or offerings</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mt-6">
              We intentionally maintain accessible pricing to support emotional and faith-based
              recovery.
            </p>

            <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
              By completing your purchase, you acknowledge, understand, and accept that all
              sales made through Rise to Thrive Academy are final.
            </p>
          </section>

          {/* Section 4: Faith-Based Disclaimer */}
          <section id="faith-based-disclaimer" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-[#0097B2]">
              SECTION 4 — FAITH-BASED & COACHING DISCLAIMER
            </h2>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Christian Foundation</h3>
            <p className="text-slate-300 leading-relaxed">
              Our programs integrate Christian faith, prayer, Scripture, and spiritual
              encouragement. Christ is honored as the source of healing and transformation.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. No Guaranteed Outcomes</h3>
            <p className="text-slate-300 leading-relaxed">
              While many participants experience breakthroughs, results depend on:
            </p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Personal engagement</li>
              <li>• Individual effort</li>
              <li>• Consistency in applying the tools</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4 font-semibold">
              We do <strong>not</strong> guarantee emotional, spiritual, or financial outcomes.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">
              3. Not a Substitute for Professional Care
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Our programs are educational and faith-based. They do <strong>not</strong> replace:
            </p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Therapy</li>
              <li>• Medical treatment</li>
              <li>• Psychiatric care</li>
              <li>• Crisis services</li>
            </ul>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Personal Responsibility</h3>
            <p className="text-slate-300 leading-relaxed">
              You acknowledge responsibility for your own decisions, actions, interpretations,
              and results.
            </p>
          </section>

          {/* Section 5: Legal Protection */}
          <section id="legal-protection" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b-2 border-[#0097B2]">
              SECTION 5 — LEGAL PROTECTION CLAUSES
            </h2>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">1. Binding Arbitration</h3>
            <p className="text-slate-300 leading-relaxed">
              Any dispute arising from the use of our services shall be resolved through{" "}
              <strong>binding arbitration</strong> in Wyoming. Users waive the right to sue in
              court, except where prohibited by law.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">2. No Class Action</h3>
            <p className="text-slate-300 leading-relaxed">You agree not to participate in:</p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Class action lawsuits</li>
              <li>• Class arbitration</li>
              <li>• Collective legal actions</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              All disputes must be handled individually.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">3. Indemnification</h3>
            <p className="text-slate-300 leading-relaxed">
              You agree to indemnify and hold harmless:
            </p>
            <ul className="space-y-2 text-slate-300 mt-3">
              <li>• Rise to Thrive Academy Inc.</li>
              <li>• Rise to Thrive Hub LLC</li>
              <li>• Transforming Pain into Power</li>
              <li>• Torah Mathews</li>
            </ul>
            <p className="text-slate-300 leading-relaxed mt-4">
              from claims, damages, losses, or liabilities resulting from misuse of content or
              violation of terms.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">4. Copyright Enforcement</h3>
            <p className="text-slate-300 leading-relaxed">
              We reserve the right to issue takedown notices, suspend accounts, and pursue
              legal action in response to unauthorized copying, sharing, or distribution of
              course content.
            </p>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-4">5. DMCA-Style Notice</h3>
            <p className="text-slate-300 leading-relaxed">
              If you believe your rights were infringed, email:
              <br />
              <a href="mailto:support@risetothrive-academy.com" className="text-[#0097B2] hover:text-[#00c5e5] font-semibold">
                support@risetothrive-academy.com
              </a>
            </p>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-slate-700 text-center">
            <p className="text-slate-400 text-sm">
              <strong>Support inquiries:</strong>{" "}
              <a href="mailto:support@risetothrive-academy.com" className="text-[#0097B2] hover:text-[#00c5e5]">
                support@risetothrive-academy.com
              </a>
            </p>
            <p className="text-slate-400 text-sm mt-2">
              <strong>Mailing Address:</strong><br />
              5830 E 2nd St, Ste 7000 #30207, Casper, Wyoming 82609 USA
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0097B2] hover:text-[#00c5e5] font-semibold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            Back to Top
          </a>
        </div>
      </div>
    </main>
  );
}
