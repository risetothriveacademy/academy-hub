"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { foundationCourse } from "@/../../data/foundation-course";
import { BRAND, brandGradients } from "@/lib/brand";
import { hubspot } from "@/lib/hubspot";

export default function FoundationDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/account/login?callbackUrl=/foundation/dashboard");
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      hubspot.trackCourseAccess("Foundation Course", undefined);
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl" style={{ color: BRAND.teal }}>Loading...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: brandGradients.charcoalGlow }}
    >
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="text-sm text-slate-300 hover:text-white transition-colors mb-2 inline-block"
              >
                ← Back to Hub
              </Link>
              <h1 className="text-3xl font-bold text-white mb-2">
                Foundation Course Portal
              </h1>
              <p className="text-slate-300">
                5-Day Intensive Faith-Based Healing Journey
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-400">Welcome back,</p>
              <p className="text-white font-semibold">{session.user?.name || session.user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {foundationCourse.map((day) => (
            <Link
              key={day.day}
              href={`/foundation/day/${day.day}`}
              className="group"
            >
              <div
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#0097B2]/50 transition-all duration-200"
                style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)' }}
              >
                {/* Day Number */}
                <div
                  className="text-6xl font-bold mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ color: BRAND.teal }}
                >
                  {day.day}
                </div>

                {/* Day Title */}
                <h3
                  className="text-xl font-bold mb-3 text-white group-hover:text-[#0097B2] transition-colors"
                >
                  Day {day.day}
                </h3>
                <h4 className="text-lg font-semibold mb-2 text-slate-200">
                  {day.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                  {day.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>📹 {day.videos.length} videos</span>
                  <span>📝 {day.questions.length} questions</span>
                </div>

                {/* Arrow */}
                <div
                  className="mt-4 text-sm font-semibold group-hover:translate-x-2 transition-transform"
                  style={{ color: BRAND.teal }}
                >
                  Start Day {day.day} →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Progress Overview */}
        <div className="mt-12 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Your Progress</h2>
          <p className="text-slate-300 mb-6">
            Complete all 5 days to unlock your certificate of completion and full transformation.
          </p>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((dayNum) => (
              <div
                key={dayNum}
                className="h-2 rounded-full bg-white/10"
                title={`Day ${dayNum}`}
              >
                {/* Progress will be tracked via user data in future */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
