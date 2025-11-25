import { notFound } from "next/navigation";
import Link from "next/link";
import coursesData from "../../../../data/courses.json";
import { BRAND, brandGradients, brandLayout, brandShadows } from "../../../../lib/brand";

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

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) {
    return {
      title: "Mini-Course Not Found – Rise to Thrive Academy",
    };
  }

  return {
    title: course.seo_title,
    description: course.short_description,
  };
}

export default function MiniCoursePage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const hasStripeLink = course.stripe_link && course.stripe_link.trim() !== "";

  return (
    <div
      className={brandLayout.pagePadding}
      style={{ backgroundImage: brandGradients.charcoalGlow, minHeight: "100vh" }}
    >
      <div
        className="mx-auto flex w-full flex-col gap-10 lg:flex-row"
        style={{ maxWidth: brandLayout.maxWidth }}
      >
        {/* Left: Content */}
        <section className="flex-1 space-y-6 text-slate-50">
          <Link
            href="/intro-recovery/minicourses"
            className="inline-flex items-center text-sm text-slate-300 hover:text-slate-100 transition-colors duration-200"
          >
            ← Back to all mini-courses
          </Link>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Root Cause: {course.root_cause}
            </p>

            <h1
              className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl"
              style={{ color: BRAND.gold }}
            >
              {course.page_heading}
            </h1>
          </div>

          <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
            {course.short_description}
          </p>

          <div
            className="space-y-4 rounded-2xl bg-black/40 p-6 text-sm text-slate-200 border border-white/5"
            style={{ boxShadow: brandShadows.softCard }}
          >
            <h2 className="text-lg font-semibold text-slate-50">
              What you'll explore in this mini-course
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#DB910F]">
              <li>How trauma and spiritual warfare are connected to this root cause.</li>
              <li>The emotional, physical, and financial fallout when this wound is ignored.</li>
              <li>Guided reflection to help you identify where this root is still active.</li>
              <li>Faith-based steps to invite Jesus into this area and begin real recovery.</li>
            </ul>
          </div>

          <div
            className="rounded-2xl bg-gradient-to-br from-[#0097B2]/10 to-[#DB910F]/10 border border-white/10 p-6 text-sm text-slate-200"
          >
            <h2 className="text-base font-semibold text-slate-50 mb-3">
              This Mini-Course Is For You If:
            </h2>
            <ul className="space-y-2 pl-5 list-disc marker:text-[#0097B2]">
              <li>You feel stuck in {course.root_cause.toLowerCase()} and don't know where to start</li>
              <li>You want a faith-based perspective on emotional and spiritual healing</li>
              <li>You're ready to understand the root cause, not just manage symptoms</li>
              <li>You need practical, actionable steps you can take today</li>
            </ul>
          </div>
        </section>

        {/* Right: Enrollment Card */}
        <aside
          className="w-full max-w-md rounded-3xl border border-white/10 bg-[#020617]/90 p-8 text-slate-50 shadow-xl backdrop-blur self-start lg:sticky lg:top-8"
          style={{ boxShadow: brandShadows.softCard }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Step Into Healing
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            Start your {course.root_cause} recovery path
          </h2>
          <p className="mt-4 text-sm text-slate-200">
            This focused, 2–3 minute mini-course is designed to meet you where you are, reveal the
            unseen battle behind this struggle, and point you toward a deeper healing journey.
          </p>

          {hasStripeLink ? (
            <div className="mt-6 space-y-4">
              <Link
                href={course.stripe_link}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
                className="flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-slate-900 transition-all duration-200 hover:scale-105"
                style={{
                  backgroundImage: brandGradients.tealGoldDiagonal,
                  boxShadow: brandShadows.button,
                }}
              >
                {course.cta_label || "Start This Recovery Lesson"} →
              </Link>
              <p className="text-xs text-slate-400 text-center">
                You'll be redirected to a secure Stripe page. Once complete, you'll receive instant
                access to this mini-course and your confirmation email.
              </p>
            </div>
          ) : (
            <div className="mt-6 p-4 rounded-lg bg-yellow-900/20 border border-yellow-600/30">
              <p className="text-sm text-yellow-300">
                ⚠️ Coming Soon – Stripe link not yet connected. This course will be available shortly.
              </p>
            </div>
          )}

          <div className="mt-6 border-t border-slate-700/80 pt-6 space-y-3">
            <h3 className="text-sm font-semibold text-slate-300">What's Included:</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex gap-2">
                <span style={{ color: BRAND.teal }}>✓</span>
                <span>2-3 minute guided video lesson</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: BRAND.teal }}>✓</span>
                <span>Downloadable reflection workbook</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: BRAND.teal }}>✓</span>
                <span>Scripture-based healing framework</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: BRAND.teal }}>✓</span>
                <span>Lifetime access to course materials</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 border-t border-slate-700/80 pt-6 text-xs text-slate-400">
            <p>No long contracts. No pressure. Just a safe starting point to begin rewiring your mind.</p>
          </div>
        </aside>
      </div>

      {/* Bottom CTA Section */}
      <div
        className="mt-16 mx-auto rounded-2xl bg-gradient-to-br from-[#3B3B3B] to-[#1F2937] border border-white/10 p-8 text-center text-slate-50"
        style={{ maxWidth: brandLayout.maxWidth }}
      >
        <h2 className="text-2xl font-semibold">
          Ready for Comprehensive Transformation?
        </h2>
        <p className="mt-3 text-slate-200 max-w-2xl mx-auto">
          This mini-course is just the beginning. Explore our full transformation programs for deeper,
          lasting change.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link
            href="/intro-recovery/minicourses"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
          >
            ← Explore All Mini-Courses
          </Link>
          <Link
            href="/courses/transformational-course"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:scale-105"
            style={{
              backgroundImage: brandGradients.goldGradient,
              boxShadow: brandShadows.button,
            }}
          >
            View Full Programs →
          </Link>
        </div>
      </div>
    </div>
  );
}
