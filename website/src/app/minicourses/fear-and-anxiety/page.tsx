"use client";
import React from "react";

const BRAND = { gold: "#DB910F", teal: "#0097B2", ink: "#3B3B3B" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
      {children}
    </span>
  );
}

export default function Page() {
  const COURSE = { title: "Fear & Anxiety", slug: "fear-and-anxiety" };
  const WORKBOOK_URL = "#"; // placeholder

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#3B3B3B]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <header className=
