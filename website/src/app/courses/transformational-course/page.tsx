"use client";
import React from "react";

const BRAND = { gold: "#DB910F", teal: "#0097B2", ink: "#3B3B3B" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
      {children}
    </span>
  );
}

type Program = {
  id: number;
  title: string;
  blurb: string;
  bullets: string[];
  ctaText: string;
  href: string;
  accent?: "gold" | "teal";
};

const PROGRAMS: Program[] = [
  {
    id: 1,
    title: "5-Day Foundation Course",
    blurb:
      "Reset your inner life with trauma-informed, faith-anchored teaching. Day-by-day unlock with practical assignments and guided prayer.",
    bullets: [
      "Root cause awareness & mind renewal",
      "Guided videos + daily workbook",
      "Unlock Day 1 instantly after purchase",
    ],
    ctaText: "Go to Offer Page",
    href: "https://foundation.risetothrive-academy.com/offer-video-a",
    accent: "teal",
  },
  {
    id: 2,
    title: "Mastermind Program",
    blurb:
      "A guided implementation pathway with group mentorship, accountability, and deeper healing strategies.",
    bullets: [
      "Weekly sessions & community support",
      "Personalized growth plans",
      "Faith-based transformation at depth",
    ],
    ctaText: "Enter Mastermind Portal",
    href: "https://same-0erqnwjk0zo-latest.netlify.app/mastermind/",
    accent: "gold",
  },
  {
    id: 3,
    title: "Advanced Mastery Certification",
    blurb:
      "For graduates ready to step into leadership: advanced tools, practice hours, and (optional) retreat pathway.",
    bullets: [
      "Advanced facilitation & ministry tools",
      "Live intensives / retreat track",
      "Serve, lead, and multiply impact",
    ],
    ctaText: "Coming Soon",
    href: "#",
    accent: "teal",
  },
];

function ProgramCard({ p }: { p: Program }) {
  const utm = typeof window !== "undefined" ? window.location.search : "";
  const border =
    p.accent === "gold" ? "border-[#DB910F]" : "border-[#0097B2]";
  const text =
    p.accent === "gold" ? "text-[#DB910F]" : "text-[#0097B2]";
  const bg =
    p.accent === "gold" ? "bg-[#DB910F]" : "bg-[#0097B2]";
  const hover =
    p.accent === "gold" ? "hover:bg-[#c4810d]" : "hover:bg-[#057a8f]";

  return (
    <div className={`group rounded-2xl border ${border} bg-white shadow-sm transition hover:shadow-md`}>
      <div className="flex items-center justify-between gap-2 border-b border-gray-100 bg-gradient-to-r from-[#0097B210] to-[#DB910F10] px-5 py-4">
        <h3 className={`text-lg font-extrabold ${text}`}>{p.title}</h3>
        <div className="flex gap-2">
          <Pill>Faith-Centered</Pill>
          <Pill>Guided</Pill>
        </div>
      </div>
      <div className="px-5 pb-5 pt-4">
        <p className="min-h-[48px] text-sm text-gray-700">{p.blurb}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {p.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          {p.href === "#" ? (
            <button
              disabled
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 cursor-not-allowed opacity-60"
              title="Coming soon"
            >
              {p.ctaText}
            </button>
          ) : (
            <a
              href={`${p.href}${utm}`}
              className={`inline-flex w-full items-center justify-center rounded-xl ${bg} px-4 py-2 text-sm font-semibold text-white transition ${hover}`}
            >
              {p.ctaText}
            </a>
          )}
          {p.id === 1 && (
            <a
              href="https://same-x3an0bjktsr-latest.netlify.app/foundation-course-"
              className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              title="Already purchased? Enter Foundation Portal"
            >
              Enter Foundation Portal
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TransformationalCoursePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#3B3B3B]">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Transformational Coaching Pathways
          </h1>
          <p className="mt-4 max-w-3xl text-gray-700">
            Choose your growth path — start with the 5-Day Foundation Course,
            deepen your transformation through the Mastermind, and step into
            leadership with Advanced Mastery.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Pill>Faith-Anchored</Pill>
            <Pill>Trauma-Informed</Pill>
            <Pill>Action-Oriented</Pill>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-16 pt-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-4">
            <h2 className="text-2xl font-extrabold">Programs</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p) => (
              <ProgramCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
