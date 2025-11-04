export const metadata = {
  title: "Recovery Introductory | Rise to Thrive Academy",
  description: "15 Mini-Courses — Draft to be created",
};

const courses = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  title: `Mini-Course ${i + 1}`,
  blurb: "Short description goes here. This is placeholder copy.",
  price: "TBD",
}));

export default function RecoveryIntroductoryPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12">
            <span className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-widest text-neutral-300/70 select-none whitespace-nowrap">
              Draft to be created
            </span>
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900">
            Recovery Introductory
          </h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            15 Mini-Courses designed as an introductory pathway. Pricing and checkout links will be added.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">{c.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{c.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-neutral-500">Price: {c.price}</span>
                  <button
                    className="inline-flex items-center rounded-md bg-neutral-900 px-3 py-1.5 text-white text-sm disabled:opacity-60"
                    disabled
                    aria-disabled
                    title="Checkout links to be added"
                  >
                    View details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-neutral-600">
          Need help choosing? The 3 core programs are under
          <span className="mx-1 font-medium">/courses/transformational-coaching</span>
          (Foundation, Mastermind, Advanced Mastery).
        </div>
      </section>
    </main>
  );
}
