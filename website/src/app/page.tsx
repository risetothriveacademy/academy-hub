"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
  slate: "#0f172a", // slate-950
};

// Day Card Component with Pop-up Expansion
function DayCard({ day, title, gradient, imageSrc, children }: { day: number; title: string; gradient: string; imageSrc?: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left rounded-lg p-4 transition-all ${
          isOpen ? 'bg-gradient-to-r ' + gradient : 'bg-slate-800/60 hover:bg-slate-800'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white text-base font-bold bg-gradient-to-br ${gradient}`}>
              {day}
            </div>
            <span className="text-lg font-semibold text-white">
              Day {day}: {title}
            </span>
          </div>
          <svg
            className={`h-5 w-5 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className={`mt-2 rounded-lg p-4 bg-gradient-to-br ${gradient} text-white text-sm animate-in slide-in-from-top-2`}>
          {/* Image */}
          {imageSrc && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={`Day ${day}: ${title}`}
                width={400}
                height={225}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* Custom content or default */}
          {children || (
            <>
              <p className="font-semibold mb-3">What you'll discover:</p>
              <ul className="space-y-1 text-sm opacity-95">
                <li>• Transformational video lesson</li>
                <li>• Practical workbook exercises</li>
                <li>• Faith-based healing tools</li>
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section - Dark Premium */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0097B2]/10 via-transparent to-[#DB910F]/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-slate-300 mb-6">
              <span
                className="mr-2 inline-block h-2 w-2 rounded-full"
                style={{ background: BRAND.teal }}
              />
              Faith-Based Trauma Recovery
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Transforming Pain Into Power
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 leading-relaxed">
              Faith-based healing programs for trauma recovery, emotional freedom, and spiritual breakthrough.
            </p>

            {/* Stats moved up under breakthrough */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl" style={{ color: BRAND.teal }}>✓</span>
                <span>1,000+ Lives Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl" style={{ color: BRAND.teal }}>✓</span>
                <span>Faith-Based Recovery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl" style={{ color: BRAND.teal }}>✓</span>
                <span>Trauma-Informed Care</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid - Dark Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 bg-slate-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Healing Programs
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Choose the program that meets you where you are in your healing journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Foundation Course */}
          <div className="flex flex-col space-y-6">
            {/* Start 5-Day Foundation Course Button */}
            <Link
              href="https://foundation.risetothrive-academy.com/offer-video-a"
              className="block"
            >
              <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
                <div className="h-20 md:h-24 px-12 md:px-16 flex items-center justify-center text-xl md:text-2xl font-bold text-slate-950"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
                  }}
                >
                  Start 5-Day Foundation Course
                </div>
              </div>
            </Link>

            <div className="flex flex-col flex-1 group relative rounded-2xl border-2 border-[#0097B2]/30 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:border-[#0097B2] transition-all">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-[#DB910F] px-3 py-1 text-xs font-bold text-white">
                  FEATURED
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#0097B2] transition-colors">
                'Rewire Your Mind' in 5 Days or less
              </h3>

              {/* Break Free From Section */}
              <div className="mt-4">
                <p className="text-xl font-semibold text-[#0097B2]">Break free from:</p>
                <ul className="mt-2 space-y-1 text-lg text-slate-300">
                  <li>• Grief, Anxiety, Depression</li>
                  <li>• Feeling-Stuck, Lack of Focus</li>
                  <li>• Business Loss, Financial Crises</li>
                </ul>
              </div>

              {/* 5 Day Cards */}
              <div className="mt-6 space-y-2 flex-1">
                <DayCard day={1} title="Understanding — The Unseen Battle" gradient="from-[#0097B2] to-[#10B981]" imageSrc="/images/foundation-days/day1.png">
                  <div>
                    <h4 className="font-bold text-base mb-2">Day 1: Understanding — The Unseen Battle that Controls Your Mind</h4>
                    <p className="text-sm italic mb-3 opacity-90">Theme: Awareness & Acknowledgement</p>
                    <ul className="space-y-1.5 text-sm opacity-95">
                      <li>• What is trauma and why it lingers</li>
                      <li>• Trauma-Informed Care (TIC)</li>
                      <li>• Understanding links between trauma, unseen battles and spiritual strongholds</li>
                      <li>• Day 1 workbook assignment</li>
                    </ul>
                  </div>
                </DayCard>
                <DayCard day={2} title="Rewiring Your Mind" gradient="from-[#DB910F] to-[#0097B2]" imageSrc="/images/foundation-days/day2.jpg">
                  <div>
                    <h4 className="font-bold text-base mb-2">Day 2: Rewiring Your Mind — Breaking Mental Strongholds</h4>
                    <p className="text-sm italic mb-3 opacity-90">Theme: Renewal & Transformation</p>
                    <p className="font-semibold mb-3 text-sm">What you'll discover:</p>
                    <ul className="space-y-1.5 text-sm opacity-95">
                      <li>• How negative thought patterns form and persist</li>
                      <li>• The science of neuroplasticity and mind renewal</li>
                      <li>• Biblical principles for renewing your mind (Romans 12:2)</li>
                      <li>• Practical exercises to rewire limiting beliefs</li>
                      <li>• Day 2 workbook assignment</li>
                    </ul>
                  </div>
                </DayCard>
                <DayCard day={3} title="Breaking Free" gradient="from-[#0097B2] to-[#10B981]" imageSrc="https://ugc.same-assets.com/_mj2XbIk5ljKkNu0aV2dsp68pgpDMbdc.png">
                  <div>
                    <h4 className="font-bold text-base mb-2">Day 3: Breaking Free — From Emotional Bondage to Freedom</h4>
                    <p className="text-sm italic mb-3 opacity-90">Theme: Liberation & Release</p>
                    <p className="font-semibold mb-3 text-sm">What you'll discover:</p>
                    <ul className="space-y-1.5 text-sm opacity-95">
                      <li>• Identifying emotional triggers and bondage patterns</li>
                      <li>• Breaking free from shame, guilt, and condemnation</li>
                      <li>• The power of forgiveness (self and others)</li>
                      <li>• Releasing past trauma through faith-based healing</li>
                      <li>• Day 3 workbook assignment</li>
                    </ul>
                  </div>
                </DayCard>
                <DayCard day={4} title="Emotional & Financial Recovery" gradient="from-[#DB910F] to-[#0097B2]" imageSrc="/images/foundation-days/day4.jpg">
                  <div>
                    <h4 className="font-bold text-base mb-2">Day 4: Emotional & Financial Recovery — Restoration & Breakthrough</h4>
                    <p className="text-sm italic mb-3 opacity-90">Theme: Restoration & Rebuilding</p>
                    <p className="font-semibold mb-3 text-sm">What you'll discover:</p>
                    <ul className="space-y-1.5 text-sm opacity-95">
                      <li>• The connection between emotional trauma and financial loss</li>
                      <li>• Breaking poverty mindset and scarcity thinking</li>
                      <li>• Biblical principles for financial restoration</li>
                      <li>• Healing emotional wounds that block abundance</li>
                      <li>• Day 4 workbook assignment</li>
                    </ul>
                  </div>
                </DayCard>
                <DayCard day={5} title="Reclaiming Purpose & Peace" gradient="from-[#0097B2] to-[#10B981]" imageSrc="/images/foundation-days/day5.jpg">
                  <div>
                    <h4 className="font-bold text-base mb-2">Day 5: Reclaiming Purpose & Peace — Walking in Your Destiny</h4>
                    <p className="text-sm italic mb-3 opacity-90">Theme: Purpose & Kingdom Alignment</p>
                    <p className="font-semibold mb-3 text-sm">What you'll discover:</p>
                    <ul className="space-y-1.5 text-sm opacity-95">
                      <li>• Rediscovering your God-given purpose and calling</li>
                      <li>• Moving from survival mode to purposeful living</li>
                      <li>• Creating a sustainable peace in daily life</li>
                      <li>• Building a faith-based action plan for breakthrough</li>
                      <li>• Day 5 workbook assignment and next steps</li>
                    </ul>
                  </div>
                </DayCard>
              </div>

              {/* Bottom button - aligned */}
              <div className="mt-6">
                <Link
                  href="https://foundation.risetothrive-academy.com/offer-video-a"
                  className="block"
                >
                  <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
                    <div className="h-20 md:h-24 px-12 md:px-16 flex items-center justify-center text-xl md:text-2xl font-bold text-slate-950"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
                      }}
                    >
                      Start 5-Day Foundation Course — $99
                    </div>
                  </div>
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-[#0097B2]">$99</span>
                <Link
                href="https://academy-hub-masterfile.netlify.app/disclosures/universal-legal-disclosures"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
                style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`
                }}
                >
                  Enroll Now
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Root-Cause Recovery */}
          <div className="flex flex-col space-y-6">
            {/* Enroll now - Root-Cause Recovery Button */}
            <Link
              href="/minicourses"
              className="block"
            >
              <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
                <div className="h-20 md:h-24 px-12 md:px-16 flex items-center justify-center text-xl md:text-2xl font-bold text-slate-950"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
                  }}
                >
                  Enroll now - Root-Cause Recovery
                </div>
              </div>
            </Link>

            <div className="flex flex-col flex-1 group relative rounded-2xl border-2 border-slate-700 bg-slate-900/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:border-[#DB910F] transition-all">
              <div className="h-12 w-12 rounded-xl bg-[#DB910F] flex items-center justify-center text-white text-xl font-bold mb-4">
                18
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-[#DB910F] transition-colors">
                Discover the Root Cause that Prevents Your Healing
              </h3>
              <p className="mt-3 text-slate-300 leading-relaxed text-lg">
                Breakthrough teachings with practical workbooks designed to address the root causes holding you back.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-lg font-semibold text-slate-400 flex-1">
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Shame & Guilt</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Breaking Fear</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Hidden Patterns</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Can't Move On</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Hopelessness</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Lost Purpose</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Exhausted but Broken</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Resentment</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Anger Turned Inward</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Overwhelmed by Trauma</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Stuck in Your Past</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Setting Boundaries</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Financial Despair</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Forgiveness</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Lost Identity</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Weight of Grief</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Trapped in Depression</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>Anxiety Won't Let Go</span>
                </div>
              </div>

              {/* Bottom section - aligned */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-bold text-[#DB910F]">$49 each</span>
                <Link
                  href="/minicourses"
                  className="inline-flex items-center gap-2 text-[#DB910F] font-semibold hover:gap-3 transition-all"
                >
                  Browse Library
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="mt-6 text-center text-lg font-bold text-white leading-relaxed">
                18 powerful mini-courses targeting specific root causes of trauma, pain, and emotional distress.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/minicourses"
                  className="block"
                >
                  <div className="overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02]">
                    <div className="h-20 md:h-24 px-12 md:px-16 flex items-center justify-center text-xl md:text-2xl font-bold text-slate-950 whitespace-nowrap"
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
                      }}
                    >
                      Enroll now - Root-Cause Recovery
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Recovery Series */}
          <div className="group relative rounded-2xl border-2 border-slate-700 bg-slate-900/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:border-[#0097B2] transition-all">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, #10B981)`,
              }}
            >
              15+
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#0097B2] transition-colors">
              Recovery Series
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Deep-dive courses on specific recovery topics: anxiety, depression, grief, boundaries, identity, forgiveness, and more.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Comprehensive topic coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Biblical foundations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0097B2] font-bold">✓</span>
                <span>Long-term transformation tools</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/courses/transformational-course"
                className="inline-flex items-center gap-2 text-[#0097B2] font-semibold hover:gap-3 transition-all"
              >
                View All Courses
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mastermind */}
          <div className="group relative rounded-2xl border-2 border-slate-700 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:border-[#DB910F] transition-all">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.teal})`,
              }}
            >
              ★
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-[#DB910F] transition-colors">
              Mastermind Group
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Join a community of high-achieving believers committed to breakthrough, accountability, and kingdom-driven success.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-[#DB910F] font-bold">✓</span>
                <span>Live group coaching sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#DB910F] font-bold">✓</span>
                <span>Peer accountability & support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#DB910F] font-bold">✓</span>
                <span>Exclusive resources & training</span>
              </li>
            </ul>
            <div className="mt-6">
              <span className="text-sm text-slate-500 italic">Application required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Root Cause Section - PRESERVED FOR MINI-COURSES PAGE */}
      {/* This section content will be moved to /minicourses page hero
      <section className="bg-slate-900 border-y border-slate-800 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Discover the Root Cause that Prevents Your Healing
          </h2>
          <p className="mt-4 text-xl text-slate-300">
            18 powerful mini-courses targeting specific root causes of trauma, pain, and emotional distress.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/minicourses"
              className="group relative"
            >
              <div className="overflow-hidden rounded-xl border-2 border-slate-700 bg-slate-900/60 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-slate-600 transition-all">
                <div className="h-20 md:h-24 px-12 md:px-16 flex items-center justify-center text-xl md:text-2xl font-bold text-white">
                  Enroll now - Root-Cause Recovery
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Testimonials - Dark Theme */}
      <section className="bg-slate-900 border-y border-slate-800 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Lives Transformed
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Real stories from real people experiencing real breakthrough.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-1 text-[#DB910F]">
                <span className="text-2xl">★★★★★</span>
              </div>
              <blockquote className="text-slate-300 leading-relaxed">
                "The Foundation Course gave me tools I never knew existed. For the first time in years, I feel hope and clarity."
              </blockquote>
              <div className="mt-4 text-sm font-semibold text-[#0097B2]">
                — Sarah M., Entrepreneur
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-1 text-[#DB910F]">
                <span className="text-2xl">★★★★★</span>
              </div>
              <blockquote className="text-slate-300 leading-relaxed">
                "This program helped me break generational patterns of shame and fear. My entire family is experiencing the overflow."
              </blockquote>
              <div className="mt-4 text-sm font-semibold text-[#0097B2]">
                — David R., Pastor
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 backdrop-blur-sm p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-1 text-[#DB910F]">
                <span className="text-2xl">★★★★★</span>
              </div>
              <blockquote className="text-slate-300 leading-relaxed">
                "Torah's compassionate, faith-based approach met me exactly where I was. I'm finally free from decades of anxiety."
              </blockquote>
              <div className="mt-4 text-sm font-semibold text-[#0097B2]">
                — Michelle T., Healthcare Professional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Begin Your Healing Journey?
          </h2>

          {/* Social Proof Testimonial */}
          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-slate-200 italic leading-relaxed">
              "This changed my life. I finally found freedom from 20 years of shame."
            </blockquote>
            <p className="mt-3 text-base font-semibold text-[#0097B2]">
              — Sarah M., Foundation Graduate
            </p>
          </div>

          <p className="mt-6 text-lg text-slate-300">
            Join 1,000+ who transformed their pain into power.
          </p>

          {/* Two Enrollment Buttons Side-by-Side */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="https://foundation.risetothrive-academy.com/offer-video-a"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-slate-950 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
              }}
            >
              Foundation Course — $99
            </Link>
            <Link
              href="/minicourses"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-bold text-slate-950 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND.teal}, ${BRAND.gold}, ${BRAND.teal})`,
              }}
            >
              Browse Mini-Courses — $49
            </Link>
          </div>

          {/* Login Button Below */}
          <div className="mt-6 flex justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-700 bg-slate-900/60 backdrop-blur-sm px-8 py-4 text-lg font-bold text-white hover:bg-slate-800/60 transition-all"
            >
              <div className="flex flex-col items-center leading-tight">
                <span>Log In</span>
                <span className="text-sm">My Courses</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
