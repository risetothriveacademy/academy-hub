"use client";
import React from "react";

const BRAND = { gold: "#DB910F", teal: "#0097B2", ink: "#3B3B3B" };

type Course = {
  id: number;
  title: string;
  slug: string;
  blurb: string;
  price: number;
};

const COURSES: Course[] = [
  { id: 1,  title: "Fear & Anxiety",                       slug: "fear-and-anxiety",                       blurb: "Reclaim peace through faith-anchored tools.", price: 49 },
  { id: 2,  title: "Rejection & Abandonment",              slug: "rejection-and-abandonment",              blurb: "Restore identity and secure love in Christ.", price: 49 },
  { id: 3,  title: "Shame & Guilt",                        slug: "shame-and-guilt",                        blurb: "Walk in grace, not condemnation.", price: 49 },
  { id: 4,  title: "Unforgiveness & Bitterness",           slug: "unforgiveness-and-bitterness",           blurb: "Release resentment. Receive freedom.", price: 49 },
  { id: 5,  title: "Fear of Failure & Control",            slug: "fear-of-failure-and-control",            blurb: "Trust God with the unknown.", price: 49 },
  { id: 6,  title: "Perfectionism & Performance",          slug: "perfectionism-and-performance",          blurb: "Trade striving for grace-filled excellence.", price: 49 },
  { id: 7,  title: "Identity & Worth",                     slug: "identity-and-worth",                     blurb: "Stand firm in your God-given identity.", price: 49 },
  { id: 8,  title: "Abandonment & Loneliness",             slug: "abandonment-and-loneliness",             blurb: "Experience belonging in God’s presence.", price: 49 },
  { id: 9,  title: "Betrayal & Broken Trust",              slug: "betrayal-and-broken-trust",              blurb: "Rebuild safety with God at the center.", price: 49 },
  { id: 10, title: "Grief & Loss",                         slug: "grief-and-loss",                         blurb: "Honor pain while choosing life.", price: 49 },
  { id: 11, title: "Self-Sabotage & Doubt",                slug: "self-sabotage-and-doubt",                blurb: "Rebuild confidence in your purpose.", price: 49 },
  { id: 12, title: "Anger & Resentment",                   slug: "anger-and-resentment",                   blurb: "Transform fury into freedom.", price: 49 },
  { id: 13, title: "Fear of Rejection & People-Pleasing",  slug: "fear-of-rejection-and-people-pleasing",  blurb: "Live for God’s approval alone.", price: 49 },
  { id: 14, title: "Financial Fear & Scarcity",            slug: "financial-fear-and-scarcity",            blurb: "Restore provision through faith.", price: 49 },
  { id: 15, title: "Hopelessness & Despair",               slug: "hopelessness-and-despair",               blurb: "Reignite vision through hope.", price: 49 },
];

// TEMP — Same.new can swap to Stripe price links later.
const checkoutUrl = (slug: string) => `/minicourses/${slug}`; // or https://checkout.stripe.com/pay/price_xxx

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
      {children}
    </span>
  );
}

function Card({ c }: { c: Course }) {
  const utm = typeof window !== "undefined" ? window.location.search : "";
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between gap-2 border-b border-gray-100 bg-gradient-to-r from-[#0097B210] to-[#DB910F10] px-5 py-4">
        <h3 className="text-lg font-extrabold text-[#0097B2]">{c.title}</h3>
        <Pill>${c.price}</Pill>
      </div>
      <div className="px-5 pb-5 pt-4">
        <p className="min-h-[44px] text-sm text-gray-700">{c.blurb}</p>
        <div className="mt-5 flex items-center gap-3">
          <a
            href={`/minicourses/${c.slug}${utm}`}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#0097B2] px-4 py-2 text-sm font-semibold text-[#0097B2] transition hover:bg-[#0097B2] hover:text-white"
            title="Learn more (details page)"
          >
            Learn More
          </a>
          <a
            href={`${checkoutUrl(c.slug)}${utm}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#DB910F] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c4810d]">
            Enroll — ${c.price}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RecoveryIntroductoryPage() {
  const utm = typeof window !== "undefined" ? window.location.search : "";
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#3B3B3B]">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
                Introductory Recovery — 15 Mini Courses
              </h1>
              <p className="mt-4 text-gray-700">
                Short, powerful 30-minute lessons to uncover hidden roots of distress.
                Each course includes a cinematic teaching, faith-anchored tools, and a guided workbook.
                Start anywhere — enroll instantly for <span className="font-semibold text-[#DB910F]">$49</span>.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Pill>Faith-Centered</Pill>
                <Pill>Therapeutically Informed</Pill>
                <Pill>Workbook Included</Pill>
                <Pill>30 Minutes</Pill>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href={`#catalog${utm}`}
                  className="inline-flex items-center rounded-xl bg-[#0097B2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#057a8f]">
                  Explore All 15
                </a>
                <a
                  href={`/minicourses/fear-and-anxiety${utm}`}
                  className="inline-flex items-center rounded-xl border border-[#0097B2] px-5 py-3 text-sm font-semibold text-[#0097B2] transition hover:bg-[#0097B2] hover:text-white">
                  View Sample Course
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#0097B220] to-[#DB910F20]" />
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-gray-600">
                <div className="rounded border border-gray-200 bg-white p-2 text-center">30-min</div>
                <div className="rounded border border-gray-200 bg-white p-2 text-center">Workbook</div>
                <div className="rounded border border-gray-200 bg-white p-2 text-center">Instant Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="pb-16 pt-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-extrabold">Choose Your Mini Course</h2>
            <span className="text-sm text-gray-600">{COURSES.length} courses</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((c) => <Card key={c.id} c={c} />)}
          </div>

          <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5 text-center">
            <div className="text-sm text-gray-700">
              Need help choosing? Start with <b>Fear & Anxiety</b> or <b>Shame & Guilt</b>.
            </div>
            <div className="mt-3 flex justify-center gap-3">
              <a
                href={`/minicourses/fear-and-anxiety${utm}`}
                className="rounded-lg bg-[#DB910F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c4810d]">
                Start with Fear & Anxiety
              </a>
              <a
                href={`/minicourses/shame-and-guilt${utm}`}
                className="rounded-lg border border-[#0097B2] px-4 py-2 text-sm font-semibold text-[#0097B2] hover:bg-[#0097B2] hover:text-white">
                Start with Shame & Guilt
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
