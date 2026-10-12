"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
};

type NavLink = {
  label: string;
  sublabel?: string;
  href: string;
  external?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Foundation Course", href: "https://foundation.risetothrive-academy.com/offer-video-a", external: true },
  { label: "Emotional Recovery", sublabel: "Identify Root Cause", href: "/minicourses" },
  { label: "Mastermind", href: "/mastermind" },
  { label: "Advanced Mastery", href: "/advanced-mastery" },
  { label: "Blogs", href: "/blogs" },
];

const CORPORATE_LINKS = [
  ["Workforce Transformation", "#workforce-transformation"],
  ["The Business Problem", "#business-problem"],
  ["A Structured Approach", "#structured-approach"],
  ["Consultancy Model", "#consultancy-model"],
  ["Who We Help", "#who-we-help"],
  ["How We Can Assist", "#how-we-assist"],
];

function CorporateHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950 text-white shadow-lg">
      <div className="border-b border-slate-800 bg-[#202833] px-4 py-2 text-center">
        <p className="text-sm font-bold tracking-wide text-[#DB910F] sm:text-base">
          Prepare People Before Transition Becomes Crisis
        </p>
        <p className="mt-0.5 text-xs text-slate-300 sm:text-sm">
          Protect the human capacity upon which your vision depends.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/organizational-resilience" className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0097B2] to-[#DB910F]">
            <span className="text-lg font-bold text-white">RT</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-bold text-white sm:text-lg">Rise to Thrive Hub LLC</p>
            <p className="hidden text-xs text-slate-400 sm:block">Organizational Resilience • Human Capacity</p>
          </div>
        </Link>

        <a
          href="#inquiry"
          className="shrink-0 rounded-full bg-[#DB910F] px-4 py-2 text-xs font-bold text-[#202833] transition hover:brightness-110 sm:px-5 sm:text-sm"
        >
          Start the Conversation
        </a>
      </div>

      <nav className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-3 py-2 sm:px-6">
          {CORPORATE_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-[#0097B2] sm:text-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-[#DB910F] transition hover:bg-slate-800 sm:text-sm"
          >
            Start the Conversation
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  if (pathname.startsWith("/organizational-resilience")) {
    return <CorporateHeader />;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 shadow-lg backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0097B2] to-[#DB910F]">
              <span className="text-lg font-bold text-white">RT</span>
            </div>
            <span className="hidden text-lg font-bold text-white md:block">
              Rise to Thrive Academy
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-slate-400 transition-colors hover:text-[#0097B2]"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#0097B2] text-white"
                      : "text-slate-400 hover:bg-slate-800/60 hover:text-[#0097B2]"
                  }`}
                >
                  {link.sublabel ? (
                    <div className="flex flex-col items-center leading-tight">
                      <span>{link.label}</span>
                      <span className="text-xs">{link.sublabel}</span>
                    </div>
                  ) : (
                    link.label
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-[#DB910F] px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#B25B00]"
            >
              <div className="flex flex-col items-center leading-tight">
                <span>Log In</span>
                <span className="text-xs">My Courses</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
