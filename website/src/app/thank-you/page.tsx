"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const session_id = searchParams.get("session_id") || "";
    const amountParam = searchParams.get("amount");
    const currency = (searchParams.get("currency") || "USD").toUpperCase();
    const value = amountParam ? Number(amountParam) : undefined;

    const gtag = (window as any).gtag;
    if (gtag && value) {
      try {
        gtag("event", "purchase", {
          transaction_id: session_id || undefined,
          value,
          currency,
        });
      } catch {}
    }
    const dl = (window as any).dataLayer;
    if (dl && value) {
      try {
        dl.push({
          event: "purchase",
          transaction_id: session_id || undefined,
          value,
          currency,
        });
      } catch {}
    }
  }, [searchParams]);

  const amount = searchParams.get("amount");
  const currency = (searchParams.get("currency") || "USD").toUpperCase();

  return (
    <main className="min-h-screen bg-white text-[#3B3B3B]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Thank you!</h1>
        <p className="mt-2">Your payment was successful.</p>
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-2 text-sm">
            <div>Amount: {amount ? `$${amount}` : "—"}</div>
            <div>Currency: {currency}</div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <Link href="/portal" className="inline-flex items-center rounded-2xl bg-[#0097B2] px-6 py-3 font-semibold text-white">Go to Portal</Link>
          <Link href="/" className="inline-flex items-center rounded-2xl border border-gray-300 px-6 py-3 font-semibold">Return to Home</Link>
        </div>
        <p className="mt-4 text-xs opacity-70">If you didn't receive your access email, contact support.</p>
      </section>
    </main>
  );
}
