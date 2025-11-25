export default function Home() {
  return (
    <main className="min-h-screen relative bg-neutral-50 flex items-center justify-center">
      {/* Watermark overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-widest text-neutral-300/70 select-none whitespace-nowrap">
            Draft to be created
          </span>
        </div>
      </div>

      {/* Center content */}
      <section className="z-10 text-center px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-800">
          Rise to Thrive Academy
        </h1>
        <p className="mt-2 text-neutral-600 max-w-xl">
          This is a temporary placeholder. The full site content will be added soon.
        </p>
      </section>
    </main>
  );
}
