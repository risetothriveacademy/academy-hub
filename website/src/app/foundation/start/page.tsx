"use client";

export default function FoundationStartPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm bg-white/80 backdrop-blur">
        <h1 className="text-2xl font-semibold text-gray-900">
          Foundation Course — Start Day 1
        </h1>

        <p className="mt-3 text-sm text-gray-700">
          You’ve already purchased the 5-Day Foundation Course.
          <br />
          Click the button below to access your secure course portal.
        </p>

        <a
          href="https://foundation.risetothrive-academy.com/offer-video-a"
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          title="Go to your Foundation Course portal"
        >
          Go to Foundation Course Portal
        </a>

        <p className="mt-4 text-xs text-gray-500">
          Tip: Bookmark the portal page so you can return to your lessons anytime.
        </p>
      </div>
    </div>
  );
}
