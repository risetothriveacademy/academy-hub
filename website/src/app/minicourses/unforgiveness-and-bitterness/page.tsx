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

export default function Page() {
  const COURSE = { title: "Unforgiveness & Bitterness", slug: "unforgiveness-and-bitterness" };
  const WORKBOOK_URL = "#"; // placeholder

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#3B3B3B]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold md:text-4xl">{COURSE.title}</h1>
          <p className="mt-2 text-gray-700">30-minute cinematic lesson with workbook.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Faith-Centered</Pill>
            <Pill>Workbook</Pill>
            <Pill>30 Minutes</Pill>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Lesson Video</h2>
              <div className="mt-3 aspect-video w-full rounded-xl bg-gradient-to-br from-[#0097B220] to-[#DB910F20] flex items-center justify-center text-gray-500">
                Video placeholder — embed to be added
              </div>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Key Takeaways</h2>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Placeholder insight 1</li>
                <li>Placeholder insight 2</li>
                <li>Placeholder insight 3</li>
              </ul>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Reflection & Scripture (NLV)</h2>
              <blockquote className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                Scripture placeholder — add verse reference and text here.
              </blockquote>
            </section>
          </div>
          <div className="md:col-span-1 space-y-6">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Workbook</h2>
              <p className="mt-2 text-sm text-gray-700">Download or open the fillable workbook.</p>
              <a href={WORKBOOK_URL} className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#0097B2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#057a8f]">
                Open Workbook (PDF)
              </a>
            </section>
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-extrabold">Continue Your Healing Journey</h2>
              <p className="mt-2 text-sm text-gray-700">Go deeper with our core programs.</p>
              <a href="/courses/transformational-course" className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[#DB910F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#c4810d]">
                Explore Programs
              </a>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
