import Link from "next/link";
import coursesData from "../../../data/courses.json";
import { BRAND, brandGradients, brandLayout, brandShadows } from "../../../lib/brand";

type Course = {
  slug: string;
  root_cause: string;
  course_title: string;
  page_heading: string;
  short_description: string;
  stripe_link: string;
  seo_title: string;
  redirect_url: string;
  category: string;
  product_type: string;
  cta_label: string;
};

const courses = coursesData as Course[];

export const metadata = {
  title: "Introduction to Recovery – 18 Mini-Courses | Rise to Thrive Academy",
  description:
    "18 trauma-informed, faith-based mini-courses to help you break hidden emotional and financial strongholds one root cause at a time.",
};

export default function MiniCoursesListingPage() {
  return (
    <div
      className={`min-h-screen ${brandLayout.pagePadding}`}
      style={{ backgroundImage: brandGradients.charcoalGlow }}
    >
      <div
        className="mx-auto flex w-full flex-col gap-10"
        style={{ maxWidth: brandLayout.maxWidth }}
      >
        {/* Hero Section */}
        <section className="text-center text-slate-50">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
            Rise to Thrive Academy
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Introduction to Recovery: <span style={{ color: BRAND.gold }}>Root-Cause Healing</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg max-w-3xl mx-auto">
            Start with the one that hurts the most right now—Shame, Fear, Betrayal, Rejection,
            Loneliness, or Unforgiveness—and walk through a guided, faith-based recovery path.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            {courses.length} mini-courses • 2-3 minutes each • Faith-based • Trauma-informed
          </p>
        </section>

        {/* Courses Grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.slug}
              className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111827]/80 p-6 shadow-lg backdrop-blur transition-all duration-200 hover:shadow-2xl hover:border-white/10"
              style={{ boxShadow: brandShadows.softCard }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Root Cause
                </p>
                <h2
                  className="mt-2 text-xl font-semibold"
                  style={{ color: BRAND.gold }}
                >
                  {course.root_cause}
                </h2>
                <p className="mt-2 text-base font-medium text-slate-50">
                  {course.page_heading}
                </p>
                <p className="mt-3 text-sm text-slate-300 line-clamp-3">
                  {course.short_description}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={`/intro-recovery/minicourses/${course.slug}`}
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundImage: brandGradients.tealGoldDiagonal,
                    boxShadow: brandShadows.glow,
                  }}
                >
                  View Course Overview →
                </Link>

                {course.stripe_link && (
                  <Link
                    href={course.stripe_link}
                    className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-800 transition-colors duration-200"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now – Secure Checkout
                  </Link>
                )}
              </div>
            </article>
          ))}
        </section>

        {/* Footer CTA */}
        <section className="mt-8 rounded-2xl bg-gradient-to-br from-[#0097B2]/20 to-[#DB910F]/20 border border-white/10 p-8 text-center text-slate-50">
          <h2 className="text-2xl font-semibold">Ready for Deeper Transformation?</h2>
          <p className="mt-3 text-slate-200">
            After completing a mini-course, explore our comprehensive transformation programs.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              href="/courses/transformational-course"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-200"
            >
              View All Programs
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
