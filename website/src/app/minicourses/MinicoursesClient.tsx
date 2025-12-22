"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const MINI_COURSES = [
  {
    order: 1,
    slug: "shame-guilt",
    stripe_product_id: "prod_TSOXfjMDZolCjf",
    stripe_name: "Introductory – Recovery: Shame & Guilt",
    title: "Stuck in Shame & Guilt",
    description: `Shame doesn't just remember what happened; it quietly rewrites who you believe you are. Many clinical approaches teach coping skills, but never touch the lie at the root. In this course, we help you expose the spiritual and emotional roots of shame and guilt, and invite God to heal what no generic method can reach. Our coaching team has walked through deep shame themselves, and knows how hard it is to believe you're lovable again.`
  },
  {
    order: 2,
    slug: "fear",
    stripe_product_id: "prod_TSOLXn2nBDbZQP",
    stripe_name: "Introductory – Recovery: Fear",
    title: "Breaking the Cycle of Fear",
    description: `Fear isn't just "anxiety" to manage; it's often the echo of trauma, loss, and spiritual warfare against your calling. Traditional therapy may teach you to calm your body, but still leave the fear story untouched. Here, we go after the root beliefs and spiritual agreements that keep you bracing for the worst. You'll be guided by people who know what it is to live terrified—and what it is to be set free.`
  },
  {
    order: 3,
    slug: "hidden-pattern",
    stripe_product_id: "prod_TSMpZT57p9oDAq",
    stripe_name: "Introductory – Recovery: Subconscious Drivers & Patterns",
    title: "The Hidden Pattern Holding You Back",
    description: `If you keep ending up in the same emotional place, there's usually a hidden pattern running in the background. Clinical tools can name the behavior, but rarely show you the spiritual and heart-level script underneath. This course helps you uncover that script—where it started, why it formed, and how to break it with God's truth. Our team has lived these cycles and now walks you step-by-step through real, root-cause change.`
  },
  {
    order: 4,
    slug: "move-on",
    stripe_product_id: "prod_TSMmWH9yzOYL73",
    stripe_name: "Introductory – Recovery: Past Emotional Attachments",
    title: "Why You Can't Move On",
    description: `"Just move on" is cruel advice when your nervous system is still holding unhealed pain. Many recoveries stall because the focus stays on surface behavior instead of the wound beneath it. In this course, we help you understand why your heart can't simply "get over it" and how God heals the root so you can truly move forward. You are not stuck because you're weak—you're stuck because something real still needs to be healed.`
  },
  {
    order: 5,
    slug: "hopelessness",
    stripe_product_id: "prod_TSMFWg6XFMg9eE",
    stripe_name: "Introductory – Recovery: Hopelessness & Despair",
    title: "Fighting Hopelessness",
    description: `Hopelessness is what settles in when you've tried to heal and nothing seemed to work. Clinical methods may stabilize you, but they can't always restore hope where your spirit has been crushed. This course goes to the root of your hopelessness—disappointments, spiritual battles, and silent questions you've carried before God. You'll be led by people who know what it is to feel done with life, and to find real hope again.`
  },
  {
    order: 6,
    slug: "purpose",
    stripe_product_id: "prod_TSMCerVH0BXsZ3",
    stripe_name: "Introductory – Recovery: Purpose & Calling",
    title: "Feeling Lost in Your Purpose",
    description: `Trauma doesn't just hurt your emotions; it scrambles your sense of purpose and calling. Many approaches talk about "finding your purpose" without understanding how shattered identity and spiritual warfare block clarity. In this course, we dig into the root wounds that disconnected you from who God made you to be. Our team has walked through seasons of total confusion and will help you rebuild your sense of purpose from the inside out.`
  },
  {
    order: 7,
    slug: "exhausted",
    stripe_product_id: "prod_TSM6FuEC0lytHa",
    stripe_name: "Introductory – Recovery: Emotional Burnout",
    title: "Exhausted but Still Broken",
    description: `When you've done the counseling, read the books, and still feel broken, exhaustion sets in. Clinical recovery can keep you functioning, but not always healed—and that constant striving wears your soul out. This course addresses the root causes draining your emotional and spiritual strength, not just your schedule. You'll walk with coaches who know what it is to serve, perform, and still feel shattered—and how God meets you there.`
  },
  {
    order: 8,
    slug: "resentment",
    stripe_product_id: "prod_TSLzM8bFDDKr65",
    stripe_name: "Introductory – Recovery: Fear of Rejection & People-Pleasing",
    title: "Resentment Ruining Your Peace",
    description: `Resentment is often a sign of a wound that was never fully acknowledged or validated. You can talk about forgiveness in therapy, but if the root injustice and pain aren't brought into God's light, bitterness lingers. This course helps you safely explore where resentment started, why it stayed, and how to release it without denying the harm that was done. Our team understands betrayal and disappointment firsthand, and will guide you toward real peace, not forced pretending.`
  },
  {
    order: 9,
    slug: "anger",
    stripe_product_id: "prod_TSLtNDxCh1xPrx",
    stripe_name: "Introductory – Recovery: Anger & Resentment",
    title: "When Anger Turns Inward",
    description: `When anger can't be expressed safely, it often turns inward as self-hatred, self-harmful choices, or depression. Clinical tools may label it as a mood issue, but rarely address why your heart decided to attack itself. In this course, we go to the root of that inward anger—what you were never allowed to say, feel, or grieve. You'll be mentored by people who have lived with internal rage and learned how God transforms it into healing and healthy boundaries.`
  },
  {
    order: 10,
    slug: "trauma",
    stripe_product_id: "prod_TSLqD4IgqeE9qm",
    stripe_name: "Introductory – Recovery: Trauma Healing",
    title: "Overwhelmed by Trauma",
    description: `Learn how trauma silently rewires your thoughts, emotions, and body—and how to begin reclaiming peace, clarity, and hope through a faith-based recovery approach.`
  },
  {
    order: 11,
    slug: "past",
    stripe_product_id: "prod_TSLogcuruN2fnZ",
    stripe_name: "Introductory – Recovery: Rejection & Abandonment",
    title: "Stuck in Your Past",
    description: `Break free from replaying old memories, regrets, and "what ifs" so you can finally move forward without feeling chained to your past.`
  },
  {
    order: 12,
    slug: "boundaries",
    stripe_product_id: "prod_TSLjC8OEvYczgR",
    stripe_name: "Introductory – Recovery: Healthy Boundaries",
    title: "Struggling to Set Boundaries",
    description: `Discover how to say "no" without guilt, honor your God-given limits, and protect your emotional and spiritual health—without feeling selfish.`
  },
  {
    order: 13,
    slug: "financial-despair",
    stripe_product_id: "prod_TSLfseLSAWx7wC",
    stripe_name: "Introductory – Recovery: Financial Recovery",
    title: "Financial Despair",
    description: `Money fears are often rooted in much more than numbers—they carry memories of loss, shame, survival, and feeling unprotected. Budgeting tools can help, but they won't heal the panic and scarcity mindset born in trauma. In this course, we address the emotional and spiritual roots of financial anxiety and how they affect your decisions, relationships, and calling. Our coaches have walked through severe financial distress and know how God heals both the heart and the practical patterns.`
  },
  {
    order: 14,
    slug: "forgiveness",
    stripe_product_id: "prod_TSLaH2YvBa12HK",
    stripe_name: "Introductory – Recovery: Unforgiveness & Bitterness",
    title: "When Forgiveness Feels Impossible",
    description: `People-pleasing is self-protection dressed up as kindness. Many methods teach boundaries, but without healing the original rejection or abandonment, the fear never truly leaves. This course helps you identify where rejection first wounded you and how that pain shaped your relationships and identity. You'll be guided by coaches who have lived in that fear and learned how to receive love without constantly performing for it.`
  },
  {
    order: 15,
    slug: "identity",
    stripe_product_id: "prod_TSLSFJjIbtJ2ZU",
    stripe_name: "Introductory – Recovery: Identity & Self-Worth",
    title: "Losing Your Identity & Self-Worth",
    description: `Pulling away and going numb can feel safer than risking more hurt. Clinical approaches may label it as depression or shutdown, but often miss the deep story of why your heart closed its doors. This course gently explores the root events and spiritual battles that taught you to disconnect in order to survive. You'll walk with people who know what it is to feel unreachable—and how God slowly brings a numb heart back to life.`
  },
  {
    order: 16,
    slug: "grief",
    stripe_product_id: "prod_TSLM7m8TYevDco",
    stripe_name: "Introductory – Recovery: Grief & Loss",
    title: "Carrying the Weight of Grief",
    description: `When your mind is constantly spinning, it's hard to tell what is trauma, what is fear, and what is God. Coping skills can quiet the noise for a moment, but they don't always address the root confusion created by long-term stress and spiritual warfare. This course helps you understand why your thoughts feel tangled and how to invite God's clarity into the chaos. Our team has lived in mental fog and found practical, faith-centered ways back to clear thinking.`
  },
  {
    order: 17,
    slug: "depression",
    stripe_product_id: "prod_TSLEywmKicQnGz",
    stripe_name: "Introductory – Recovery: Depression",
    title: "Trapped in Depression",
    description: `Betrayal shakes the foundation of how you see people, yourself, and even God. Many clinical approaches can name the trauma, but they can't always walk with you through the spiritual questions and shattered trust that follow. This course goes to the root of that betrayal—what was lost, what was stolen, and what lies tried to attach to your heart. You'll be accompanied by coaches who have survived deep betrayal and know what it means to rebuild trust with wisdom and with God.`
  },
  {
    order: 18,
    slug: "anxiety",
    stripe_product_id: "prod_TSL8wAz7zBSFaL",
    stripe_name: "Introductory – Recovery: Anxiety",
    title: "Why Anxiety Won't Let Go",
    description: `Constant anxiety is not just "worrying too much"; it's often your body still reacting to past moments when you were unsafe or blindsided. Medication and coping strategies can quiet symptoms, but they don't always heal the terror beneath. This course helps you trace your anxiety back to its emotional and spiritual roots and invite God into those specific memories and fears. Our coaches know what it's like to live on high alert and will walk with you toward genuine peace.`
  },
];

// Course Card Component
function CourseCard({
  course,
  isRecommended = false,
  cardRef
}: {
  course: typeof MINI_COURSES[0];
  isRecommended?: boolean;
  cardRef?: React.RefObject<HTMLDivElement>;
}) {
  const [isExpanded, setIsExpanded] = useState(isRecommended);
  const [isProcessing, setIsProcessing] = useState(false);

  // Auto-expand recommended course
  useEffect(() => {
    if (isRecommended) {
      setIsExpanded(true);
      // Scroll to recommended course after a short delay
      setTimeout(() => {
        cardRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }, [isRecommended, cardRef]);

  const handleEnrollClick = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stripe_product_id: course.stripe_product_id,
          course_title: course.title,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to create checkout session. Please try again.');
        setIsProcessing(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl border-2 bg-slate-900/90 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-2xl ${
        isRecommended
          ? 'border-[#DB910F] ring-2 ring-[#DB910F]/50 shadow-2xl'
          : 'border-slate-700 hover:border-[#DB910F]'
      }`}
    >
      {isRecommended && (
        <div className="absolute -top-3 left-6 px-4 py-1 bg-gradient-to-r from-[#DB910F] to-[#0097B2] rounded-full shadow-lg">
          <span className="text-xs font-bold text-white">⭐ Recommended for you</span>
        </div>
      )}

      <div className="absolute top-4 right-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#DB910F] to-[#0097B2] text-sm font-bold text-white">
          {course.order}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white pr-12 mb-4">
        {course.title}
      </h3>

      {isExpanded && (
        <div className="mb-4 rounded-lg bg-slate-800/60 p-4 border border-slate-700 animate-in slide-in-from-top-2">
          <p className="text-sm text-slate-300 leading-relaxed">
            {course.description}
          </p>
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-[#0097B2] hover:text-[#00c5e5] transition-colors py-2 px-4 rounded-lg border border-[#0097B2]/30 hover:border-[#0097B2] hover:bg-[#0097B2]/10"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          <svg
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <button
          onClick={handleEnrollClick}
          disabled={isProcessing}
          className="w-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="h-12 px-6 flex items-center justify-center text-sm font-bold text-white bg-[#DB910F] hover:bg-[#c4810d]">
            {isProcessing ? 'Processing...' : 'Enroll Now — $49'}
          </div>
        </button>

        <p className="mt-1 text-xs text-center" style={{ color: "#4db8c9" }}>
          Guided workbook is available inside the course portal after purchase.
        </p>
      </div>
    </div>
  );
}

export default function MinicoursesClient() {
  const searchParams = useSearchParams();
  const recommendedSlug = searchParams.get('course');

  const cardRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>(
    MINI_COURSES.reduce((acc, course) => {
      acc[course.slug] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> })
  );

  return (
    <main className="min-h-screen bg-slate-950">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0097B2]/10 via-transparent to-[#DB910F]/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-slate-300 mb-6">
              <div className="h-8 w-8 rounded-lg bg-[#DB910F] flex items-center justify-center text-white text-sm font-bold mr-3">
                18
              </div>
              Root-Cause Recovery Courses
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Discover the Root Cause that Prevents Your Healing
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
              Breakthrough teachings with practical workbooks designed to address the root causes holding you back.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 text-lg font-semibold text-slate-300 mb-8">
              {MINI_COURSES.map((course) => (
                <div key={course.slug} className="flex items-start gap-2">
                  <span className="text-[#DB910F] font-bold mt-0.5">•</span>
                  <span>{course.title}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-6">
              <span className="text-3xl font-bold text-[#DB910F]">$49 each</span>
              <span className="text-lg text-slate-400">
                18 powerful mini-courses targeting specific root causes
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Browse All Courses
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Click "Learn More" to see how each course addresses the root cause.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MINI_COURSES.map((course) => (
            <CourseCard
              key={course.slug}
              course={course}
              isRecommended={course.slug === recommendedSlug}
              cardRef={cardRefs.current[course.slug]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
