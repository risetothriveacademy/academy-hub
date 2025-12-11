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

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800 shadow-lg backdrop-blur-sm bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#0097B2] to-[#DB910F] flex items-center justify-center">
              <span className="text-white font-bold text-lg">RT</span>
            </div>
            <span className="hidden md:block text-lg font-bold text-white">
              Rise to Thrive Academy
            </span>
          </Link>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-[#0097B2] transition-colors"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "bg-[#0097B2] text-white"
                      : "text-slate-400 hover:text-[#0097B2] hover:bg-slate-800/60"
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

          {/* Login Button - Gold */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-[#DB910F] px-6 py-2 text-sm font-semibold text-white hover:bg-[#B25B00] transition-all shadow-md"
            >
              <div className="flex flex-col items-center leading-tight">
                <span>Log In</span>
                <span className="text-xs">My Courses</span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <nav className="lg:hidden pb-4 space-y-2">
          {NAV_LINKS.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg"
                >
                  {link.sublabel ? (
                    <div className="flex flex-col leading-tight">
                      <span>{link.label}</span>
                      <span className="text-xs">{link.sublabel}</span>
                    </div>
                  ) : (
                    link.label
                  )}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg"
              >
                {link.sublabel ? (
                  <div className="flex flex-col leading-tight">
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
      </div>
    </header>
  );
}
