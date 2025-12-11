import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-[#0097B2]">Rise to Thrive Academy</h3>
            <p className="mt-2 text-sm text-slate-400">
              Transforming pain into power through faith-based healing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Programs</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><Link href="https://foundation.risetothrive-academy.com/offer-video-a" className="hover:text-[#0097B2] transition-colors">Foundation Course</Link></li>
              <li><Link href="/minicourses" className="hover:text-[#0097B2] transition-colors">Emotional Recovery</Link></li>
              <li><Link href="/courses/transformational-course" className="hover:text-[#0097B2] transition-colors">Recovery Series</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Account</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><Link href="/login" className="hover:text-[#0097B2] transition-colors">Log In</Link></li>
              <li><Link href="/auth/create-account" className="hover:text-[#0097B2] transition-colors">Create Account</Link></li>
              <li><Link href="/support" className="hover:text-[#0097B2] transition-colors">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-slate-400">
              <li><Link href="/disclosures/universal-legal-disclosures" className="hover:text-[#0097B2] transition-colors">Universal Legal Disclosures</Link></li>
              <li><Link href="/privacy" className="hover:text-[#0097B2] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#0097B2] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="text-center">
            <p className="text-sm text-slate-400">
              For support inquiries, contact us at{" "}
              <a
                href="mailto:support@risetothrive-academy.com"
                className="text-[#0097B2] hover:text-[#00c5e5] transition-colors"
              >
                support@risetothrive-academy.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rise to Thrive Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
