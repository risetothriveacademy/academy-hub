import Link from "next/link";
import { BRAND } from "@/lib/brand";

// IMPORTANT: env var uses underscores, not hyphens
// Example: recovery-forgiveness → NEXT_PUBLIC_STRIPE_URL_recovery_forgiveness
const CHECKOUT_URL = process.env.NEXT_PUBLIC_STRIPE_URL_recovery_forgiveness || "#";

export const metadata = {
  title: "Forgiveness — Recovery Series",
  description: "Focused 30-minute lesson + workbook. Faith-based recovery: Forgiveness.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#3B3B3B]">
      <section className="bg-gradient-to-b from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9]">
        <div className="mx-auto max-w-6xl px-6 py-14 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">Forgiveness</h1>
          <p className="mt-2 opacity-90 max-w-2xl">30-minute cinematic lesson with a practical workbook. Part of the Rise To Thrive Recovery Series.</p>
          <div className="mt-6">
            <Link href="#details" className="inline-flex rounded-2xl bg-white/10 px-5 py-2 font-semibold ring-1 ring-white/30 hover:bg-white/15">See Details</Link>
          </div>
        </div>
      </section>

      <section id="details" className="mx-auto max-w-6xl px-6 py-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Lesson Video</h2>
            <div className="mt-3 aspect-video w-full rounded-xl bg-gradient-to-br from-[#8B5CF620] to-[#10B98120] flex items-center justify-center text-gray-500">
              Video placeholder — embed coming soon
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Workbook</h2>
            <p className="mt-2 text-sm text-gray-700">Download or open the fillable workbook to apply the teaching to your story.</p>
            <p className="mt-1 text-xs text-gray-500">Workbooks are standardized across Recovery Series; specific prompts appear in-lesson.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Enroll</h2>
            <p className="mt-2 text-sm text-gray-700">Instant access after purchase. Your receipt and access email will arrive within minutes.</p>
            <div className="mt-4">
              <Link href={CHECKOUT_URL} className="inline-flex w-full items-center justify-center rounded-xl bg-[#0EA5E9] px-5 py-2 text-sm font-semibold text-white hover:bg-[#0284C7]">
                Enroll Now
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-500">Secure checkout via Stripe.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">Continue Your Healing</h2>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5 space-y-1">
              <li><Link href="/foundation/start" className="underline">Start the 5‑Day Foundation</Link></li>
              <li><Link href="/mastermind" className="underline">Explore the Mastermind</Link></li>
              <li><Link href="/courses/transformational-course" className="underline">All programs</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
