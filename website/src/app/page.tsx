import Link from "next/link";
import { BRAND } from "@/lib/brand";

export default function Home() {
  const programs = [
    {
      id: 1,
      title: "Introductory Recovery",
      description: "18 faith-based mini-courses targeting specific root causes like shame, fear, anxiety, and more.",
      href: "/intro-recovery/minicourses",
      badge: "18 Mini-Courses",
      color: BRAND.teal,
    },
    {
      id: 2,
      title: "Foundation Course",
      description: "5-day transformational program to break free from anxiety, grief, burnout, and loss.",
      href: "https://same-x3an0bjktsr-latest.netlify.app/foundation-course-",
      badge: "5-Day Program",
      color: BRAND.gold,
      external: true,
    },
    {
      id: 3,
      title: "Mastermind",
      description: "Cohort-based coaching with live sessions, accountability, and implementation support.",
      href: "https://same-0erqnwjk0zo-latest.netlify.app/mastermind/",
      badge: "Group Coaching",
      color: BRAND.teal,
      external: true,
    },
    {
      id: 4,
      title: "Advanced Mastery",
      description: "Advanced leadership training and certification pathway for graduates.",
      href: "#",
      badge: "Coming Soon",
      color: BRAND.charcoal,
      comingSoon: true,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B3B3B]">
            Rise to Thrive Academy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Faith-centered transformation programs designed to help you break free from pain
            and step into the purpose God has for your life.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#3B3B3B]">
            Choose Your Path
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#3B3B3B]">
                    {program.title}
                  </h3>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: program.color }}
                  >
                    {program.badge}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 min-h-[60px]">
                  {program.description}
                </p>

                {program.comingSoon ? (
                  <button
                    disabled
                    className="w-full rounded-xl px-6 py-3 text-sm font-semibold bg-gray-200 text-gray-500 cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                ) : program.external ? (
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: program.color }}
                  >
                    Learn More →
                  </a>
                ) : (
                  <Link
                    href={program.href}
                    className="block w-full text-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: program.color }}
                  >
                    Explore Courses →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#0097B2] to-[#DB910F] text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Already Enrolled?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Access your courses and track your progress
          </p>
          <Link
            href="https://same-7alif4078a8-latest.netlify.app/account/login"
            className="inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-[#0097B2] hover:bg-gray-100 transition-all duration-200"
          >
            Log In to Your Account
          </Link>
        </div>
      </section>
    </main>
  );
}
