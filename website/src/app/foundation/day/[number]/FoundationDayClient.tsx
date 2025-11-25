"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { type DayContent, type Video } from "@/../../data/foundation-course";
import { BRAND, brandGradients } from "@/lib/brand";
import { hubspot } from "@/lib/hubspot";

export default function FoundationDayClient({
  dayContent,
  dayNumber,
}: {
  dayContent: DayContent;
  dayNumber: number;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/account/login?callbackUrl=/foundation/day/${dayNumber}`);
    }
  }, [status, router, dayNumber]);

  useEffect(() => {
    if (session?.user) {
      hubspot.trackCourseAccess("Foundation Course", dayNumber);
    }
  }, [session, dayNumber]);

  if (status === "loading") {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundImage: brandGradients.charcoalGlow }}
      >
        <div className="text-center">
          <div className="text-xl text-white">Loading Day {dayNumber}...</div>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleVideoPlay = (video: Video) => {
    setPlayingVideo(video.id);
    hubspot.trackVideoPlay(video.id, video.title, dayNumber);
  };

  const mainVideos = dayContent.videos.filter((v) => v.type === "main");
  const bonusVideos = dayContent.videos.filter((v) => v.type === "bonus");
  const reflectionVideos = dayContent.videos.filter((v) => v.type === "reflection");

  return (
    <div
      className="min-h-screen pb-16"
      style={{ backgroundImage: brandGradients.charcoalGlow }}
    >
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link
            href="/foundation/dashboard"
            className="text-sm text-slate-300 hover:text-white transition-colors mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl font-bold" style={{ color: BRAND.teal }}>
                  Day {dayContent.day}
                </span>
                <span className="text-sm text-slate-400 bg-white/10 px-3 py-1 rounded-full">
                  {dayContent.videos.length} videos
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {dayContent.title}
              </h1>
              <p className="text-slate-300 max-w-3xl">{dayContent.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Videos */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Main Lessons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {mainVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden hover:border-[#0097B2]/50 transition-all"
              >
                <div className="aspect-video bg-black/40 relative group">
                  <video className="w-full h-full" controls onPlay={() => handleVideoPlay(video)}>
                    <source src={video.url} type="video/mp4" />
                  </video>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1">{video.title}</h3>
                  {video.description && (
                    <p className="text-sm text-slate-400 mb-2">{video.description}</p>
                  )}
                  <span className="text-xs text-slate-500">⏱️ {video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bonus Videos */}
        {bonusVideos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Bonus Content</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {bonusVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-gradient-to-br from-[#DB910F]/10 to-[#0097B2]/10 backdrop-blur border border-[#DB910F]/30 rounded-xl overflow-hidden"
                >
                  <div className="aspect-video bg-black/40 relative">
                    <video className="w-full h-full" controls onPlay={() => handleVideoPlay(video)}>
                      <source src={video.url} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: BRAND.gold, color: "#000" }}
                      >
                        BONUS
                      </span>
                      <h3 className="font-semibold text-white flex-1">{video.title}</h3>
                    </div>
                    {video.description && (
                      <p className="text-sm text-slate-400 mb-2">{video.description}</p>
                    )}
                    <span className="text-xs text-slate-500">⏱️ {video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reflection Videos */}
        {reflectionVideos.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Reflection & Integration</h2>
            <div className="grid gap-6">
              {reflectionVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="aspect-video bg-black/40 relative">
                    <video className="w-full h-full" controls onPlay={() => handleVideoPlay(video)}>
                      <source src={video.url} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1">{video.title}</h3>
                    {video.description && (
                      <p className="text-sm text-slate-400 mb-2">{video.description}</p>
                    )}
                    <span className="text-xs text-slate-500">⏱️ {video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Assignment Questions */}
        <section className="mb-12">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Day {dayContent.day} Assignment Questions
            </h2>
            <p className="text-slate-300 mb-6">
              Reflect on these questions and complete them in your workbook for deeper transformation.
            </p>
            <ol className="space-y-4">
              {dayContent.questions.map((question, index) => (
                <li key={index} className="flex gap-4 text-slate-200">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold"
                    style={{ backgroundColor: BRAND.teal, color: "#fff" }}
                  >
                    {index + 1}
                  </span>
                  <p className="flex-1 pt-1">{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          {dayContent.day > 1 ? (
            <Link
              href={`/foundation/day/${dayContent.day - 1}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              ← Day {dayContent.day - 1}
            </Link>
          ) : (
            <div></div>
          )}

          {dayContent.day < 5 ? (
            <Link
              href={`/foundation/day/${dayContent.day + 1}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
              style={{ backgroundImage: brandGradients.tealGoldDiagonal }}
            >
              Day {dayContent.day + 1} →
            </Link>
          ) : (
            <Link
              href="/foundation/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all hover:scale-105"
              style={{ backgroundImage: brandGradients.goldGradient }}
            >
              ✓ Complete Course
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
