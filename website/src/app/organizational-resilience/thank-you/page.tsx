import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Organizational Resilience | Rise to Thrive Hub",
  description:
    "Thank you for contacting Rise to Thrive Hub about organizational resilience support.",
  robots: { index: false, follow: true },
};

export default function OrganizationalResilienceThankYouPage() {
  return (
    <main className="min-h-[70vh] bg-[#202833] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C45B]">
          Thank You
        </p>
        <h1 className="mt-4 text-4xl font-bold">
          Your Organizational Resilience Inquiry Has Been Received
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-200">
          Thank you for sharing what your organization is navigating. We will review
          the information you provided and use it to help identify an appropriate
          starting point for the conversation.
        </p>
        <p className="mt-6 text-xl font-semibold text-[#F1D77B]">
          Protect the Person. Build Resilience. Strengthen Performance,
          Productivity and Profitability.™
        </p>
        <a
          href="/organizational-resilience"
          className="mt-9 inline-block rounded-full bg-[#D4A017] px-7 py-4 font-bold text-[#202833]"
        >
          Return to Organizational Resilience
        </a>
      </div>
    </main>
  );
}
