// website/src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/courses/recovery-introductory", label: "Intro Courses" },
  { href: "/courses/transformational-course", label: "Transformational" },
  { href: "/syllabus", label: "Syllabus" },
  { href: "/foundation/start", label: "Portal" },
  { href: "/mastermind", label: "Mastermind" },
  { href: "/portal", label: "Login" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Optional logo: place /public/brand/logo-rth.svg */}
          <img
            src="/brand/logo-rth.svg"
            alt="Rise To Thrive Hub"
            className="h-7 w-auto"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="sr-only">Rise To Thrive Hub LLC</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[#FBB657]/20 text-[#3B3B3B] ring-1 ring-[#DB910F]/40"
                    : "text-[#3B3B3B]/80 hover:bg-black/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-xl px-3 py-2 ring-1 ring-black/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-black/5">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => {
              const active = pathname === l.href || pathname?.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    active
                      ? "bg-[#FBB657]/20 text-[#3B3B3B] ring-1 ring-[#DB910F]/40"
                      : "text-[#3B3B3B]/80 hover:bg-black/5"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
