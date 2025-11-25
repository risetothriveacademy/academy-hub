// website/src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/intro-recovery/minicourses", label: "Intro Courses" },
  { href: "/courses/transformational-course", label: "Programs" },
  { href: "/account/login", label: "Log In" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand/logo-rth.png"
            alt="Rise to Thrive Academy"
            className="h-10 w-auto"
          />
          <span className="text-lg font-bold text-[#3B3B3B]">Rise to Thrive Academy</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href || pathname?.startsWith(l.href);
            const className = `rounded-2xl px-3 py-2 text-sm font-semibold transition ${
              active
                ? "bg-[#FBB657]/20 text-[#3B3B3B] ring-1 ring-[#DB910F]/40"
                : "text-[#3B3B3B]/80 hover:bg-black/5"
            }`;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={className}
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
              const className = `rounded-xl px-3 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-[#FBB657]/20 text-[#3B3B3B] ring-1 ring-[#DB910F]/40"
                  : "text-[#3B3B3B]/80 hover:bg-black/5"
              }`;

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={className}
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
