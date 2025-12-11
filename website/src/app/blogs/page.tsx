import Link from "next/link";

export const metadata = {
  title: "Articles & Resources — Rise to Thrive Academy",
  description: "Faith-based trauma education, emotional healing, and mental wellness insights.",
};

// Blog categories for filtering/indexing
const BLOG_CATEGORIES = [
  { slug: "trauma-education", name: "Trauma Education", color: "from-[#0097B2] to-[#10B981]" },
  { slug: "healing-recovery", name: "Healing & Recovery", color: "from-[#0EA5E9] to-[#10B981]" },
  { slug: "faith-mental-health", name: "Faith & Mental Health", color: "from-[#0097B2] to-[#DB910F]" },
  { slug: "spiritual-warfare", name: "Spiritual Warfare", color: "from-[#7C3AED] to-[#DB910F]" },
  { slug: "financial-recovery", name: "Financial Recovery", color: "from-[#DB910F] to-[#0097B2]" },
];

// Sample blog posts (replace with real data when ready)
const BLOG_POSTS = [
  {
    id: 1,
    category: "trauma-education",
    title: "Understanding Trauma Triggers",
    excerpt: "Short excerpt about trauma triggers and how to recognize them...",
    slug: "understanding-trauma-triggers",
    comingSoon: true,
  },
  {
    id: 2,
    category: "healing-recovery",
    title: "Breaking Cycles of Shame",
    excerpt: "Short excerpt about breaking free from shame-based thinking...",
    slug: "breaking-cycles-of-shame",
    comingSoon: true,
  },
  {
    id: 3,
    category: "faith-mental-health",
    title: "Faith vs. Fear in Emotional Healing",
    excerpt: "Short excerpt about using faith to overcome fear in the healing journey...",
    slug: "faith-vs-fear-in-emotional-healing",
    comingSoon: true,
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3B3B3B]">
            Articles & Resources
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Faith-based trauma education, emotional healing, and mental wellness insights.
          </p>
        </div>
      </section>

      {/* Blog Categories Index */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-4 py-2 rounded-full bg-[#0097B2] text-white text-sm font-semibold shadow-sm hover:bg-[#057a8f] transition-all">
              All Topics
            </button>
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.slug}
                className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 text-sm font-semibold hover:border-[#0097B2] hover:text-[#0097B2] transition-all"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => {
            const category = BLOG_CATEGORIES.find((c) => c.slug === post.category);

            return (
              <article
                key={post.id}
                className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${category?.color || 'from-[#0097B2] to-[#10B981]'}`} />

                {/* Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0097B2]/10 text-[#0097B2] text-xs font-semibold mb-3">
                    {category?.name || 'General'}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#3B3B3B] mb-3 group-hover:text-[#0097B2] transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 italic">
                      {post.comingSoon ? 'Coming Soon' : 'Published'}
                    </span>
                    <Link
                      href={post.comingSoon ? '#' : `/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-[#0097B2] text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Read More
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-500 italic">
            More blog posts will be added soon.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0097B2] to-[#10B981] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="mt-4 text-xl opacity-95">
            Start with our 5-Day Foundation Course and transform your pain into power.
          </p>
          <div className="mt-8">
            <Link
              href="https://foundation.risetothrive-academy.com/offer-video-a"
              className="inline-flex items-center justify-center rounded-xl bg-[#DB910F] px-8 py-4 text-lg font-bold text-white hover:bg-[#B25B00] transition-all shadow-lg"
            >
              Start Foundation Course — $99
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
