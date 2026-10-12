import type { Metadata } from "next";

const siteUrl = "https://risetothrive-hub.com";
const pageUrl = \`\${siteUrl}/organizational-resilience\`;

export const metadata: Metadata = {
  title: "Organizational Resilience Consulting | Rise to Thrive Hub",
  description:
    "Protect human capacity, build resilience, and strengthen performance through AI adoption, restructuring, workforce transformation, burnout prevention, and organizational change.",
  keywords: [
    "organizational resilience",
    "workforce transformation",
    "leadership resilience",
    "trauma-informed consulting",
    "human capacity",
    "employee wellbeing",
    "change management",
    "workforce reskilling",
    "leadership development",
    "burnout prevention",
    "employee engagement",
    "organizational recovery",
    "executive coaching",
    "group coaching",
    "corporate speaking",
    "workplace resilience",
    "team performance",
    "productivity",
    "retention strategy",
    "human performance",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title:
      "Protect the Person. Build Resilience. Strengthen Performance, Productivity and Profitability.™",
    description:
      "Organizational resilience consulting for leaders and teams navigating pressure, disruption, AI adoption, restructuring, and workforce transformation.",
    url: pageUrl,
    siteName: "Rise to Thrive Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organizational Resilience Consulting | Rise to Thrive Hub",
    description:
      "Protect human capacity, build resilience, and strengthen sustainable performance through disruption and change.",
  },
  robots: { index: true, follow: true },
};

const primaryIssues = [
  "Burnout and disengagement",
  "Declining productivity",
  "Absenteeism and turnover",
  "Reduced focus and confidence",
  "Leadership strain",
  "Team disruption",
  "Difficulty adapting to change",
];

const hiddenDrivers = [
  "Grief and trauma",
  "Financial distress",
  "Caregiving pressure",
  "Job insecurity",
  "Identity disruption",
  "Fear of redundancy",
  "Workplace conflict",
  "Restructuring and uncertainty",
  "Accumulated stress",
  "Major personal adversity",
];

const specialties = [
  "Organizational Resilience",
  "Workforce Transformation",
  "Leadership Resilience",
  "Trauma-Informed Consulting",
  "Human Capacity",
  "Employee Wellbeing",
  "Change Management",
  "Workforce Reskilling",
  "Leadership Development",
  "Burnout Prevention",
  "Employee Engagement",
  "Organizational Recovery",
  "Executive Coaching",
  "Group Coaching",
  "Corporate Speaking",
  "Workplace Resilience",
  "Team Performance",
  "Productivity",
  "Retention Strategy",
  "Human Performance",
];

const navigatingOptions = [
  "AI adoption / automation",
  "Workforce transformation",
  "Restructuring",
  "Role redesign",
  "Redundancy / layoffs",
  "Reskilling / internal mobility",
  "Leadership burnout",
  "Employee burnout",
  "Reduced engagement",
  "Absenteeism",
  "Retention / turnover",
  "Productivity concerns",
  "Team disruption",
  "Grief / trauma / adversity affecting employees",
  "Sustained performance pressure",
  "Leadership resilience",
  "Organizational recovery",
  "Retreat / leadership restoration experience",
  "Speaking / keynote",
  "Not sure — I’d like to discuss what we are seeing",
];

const improvementOptions = [
  "Resilience",
  "Leadership capacity",
  "Employee engagement",
  "Productivity",
  "Retention",
  "Adaptability through change",
  "Team performance",
  "Communication",
  "Workforce transition",
  "Employee support",
  "Other",
];

const supportOptions = [
  "Keynote / speaking",
  "Workshop",
  "Leadership training",
  "Group coaching",
  "Organizational assessment",
  "Ongoing consulting / advisory",
  "Retreat",
  "Not sure — recommend the best starting point",
];

const faqs = [
  {
    q: "What is organizational resilience consulting?",
    a: "Organizational resilience consulting helps leaders strengthen the human capacity required to adapt, recover, remain engaged, and sustain performance through pressure, disruption, and change.",
  },
  {
    q: "Can this support organizations navigating AI and workforce transformation?",
    a: "Yes. The work can support role transition, human transition, and identity transition during AI adoption, restructuring, role redesign, reskilling, and other major workforce changes.",
  },
  {
    q: "Does Rise to Thrive Hub replace HR or clinical care?",
    a: "No. Rise to Thrive Hub provides education, resilience consulting, leadership support, and structured organizational interventions. It does not replace HR functions, psychotherapy, diagnosis, medical care, or crisis services.",
  },
  {
    q: "What if we are not sure what type of support we need?",
    a: "Use the inquiry form and select the option asking for help identifying the right starting point. The first conversation is designed to clarify the challenge, desired outcomes, and appropriate level of support.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": \`\${siteUrl}/#organization\`,
      name: "Rise to Thrive Hub LLC",
      url: siteUrl,
      description:
        "Organizational resilience, workforce transformation, leadership support, trauma-informed consulting, and human capacity development.",
    },
    {
      "@type": "Person",
      "@id": \`\${siteUrl}/#diane-salman\`,
      name: "Diane Salman, MBA",
      jobTitle: "Founder, Speaker, Consultant and Trauma Recovery Educator",
      worksFor: { "@id": \`\${siteUrl}/#organization\` },
    },
    {
      "@type": "Service",
      "@id": \`\${pageUrl}/#service\`,
      name: "Organizational Resilience Consulting",
      provider: { "@id": \`\${siteUrl}/#organization\` },
      url: pageUrl,
      description:
        "Consulting, speaking, leadership training, group coaching, organizational assessment, and resilience support for organizations navigating pressure, disruption, and workforce transformation.",
      areaServed: "North America",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A017]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p>
      ) : null}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4A017]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckboxGroup({
  legend,
  name,
  items,
}: {
  legend: string;
  name: string;
  items: string[];
}) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-slate-900">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-[#D4A017]"
          >
            <input
              type="checkbox"
              name={name}
              value={item}
              className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#D4A017]"
            />
            <span className="text-sm leading-6 text-slate-700">{item}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function OrganizationalResiliencePage() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-[#202833] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,160,23,0.18),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#E7C45B]">
              Organizational Resilience • Human Capacity • Workforce Transformation
            </p>
            <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
              Protect the Person. Build Resilience. Strengthen Performance,
              Productivity and Profitability.™
            </h1>
            <p className="mt-6 text-xl font-medium text-[#F1D77B]">
              Human Capacity → Resilience → Performance → Productivity →
              Profitability
            </p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200">
              Rise to Thrive Hub helps leaders and organizations strengthen human
              capacity through pressure, disruption, AI adoption, restructuring,
              workforce transformation, and change — so people can adapt, recover,
              remain engaged, and continue performing.
            </p>
            <p className="mt-6 text-2xl font-semibold text-white">
              Technology may transform the role. Leadership must protect the person.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#inquiry"
                className="rounded-full bg-[#D4A017] px-6 py-3.5 font-semibold text-[#202833] shadow-lg transition hover:brightness-110"
              >
                Schedule an Organizational Resilience Conversation
              </a>
              <a
                href="#speaking"
                className="rounded-full border border-white/40 px-6 py-3.5 font-semibold text-white transition hover:border-[#D4A017] hover:text-[#F1D77B]"
              >
                Book Diane to Speak
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="The Business Problem"
          title="The Pressure You See Is Not Always the Whole Problem"
          text="Organizations often notice the performance change first. The individual may be living the battle underneath it."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="mb-5 text-xl font-bold">What the organization may see</h3>
            <CheckList items={primaryIssues} />
          </div>
          <div className="rounded-3xl border border-[#D4A017]/30 bg-[#FFF9E8] p-8">
            <h3 className="mb-5 text-xl font-bold">What may be happening underneath</h3>
            <CheckList items={hiddenDrivers} />
          </div>
        </div>
        <blockquote className="mx-auto mt-12 max-w-4xl border-l-4 border-[#D4A017] pl-6 text-2xl font-semibold leading-10 text-slate-800">
          The organization sees the performance change. The individual is living
          the battle underneath it.
        </blockquote>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <SectionTitle
          eyebrow="Workforce Transformation"
          title="Every Major Organizational Change Creates Three Transitions"
          text="Technology and process may change the work. Leaders also need a plan for the people expected to carry that change."
        />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              n: "01",
              title: "Role Transition",
              text: "What work is changing? What tasks are being automated? What capabilities are now required? What roles and responsibilities are shifting?",
            },
            {
              n: "02",
              title: "Human Transition",
              text: "What is uncertainty doing to the person mentally, emotionally, behaviorally, cognitively, and physically?",
            },
            {
              n: "03",
              title: "Identity Transition",
              text: "Who am I if the role I spent 10, 15, or 20 years mastering is no longer valued in the same way?",
            },
          ].map((item) => (
            <article key={item.n} className="rounded-3xl bg-white p-8 shadow-sm">
              <span className="text-sm font-bold text-[#D4A017]">{item.n}</span>
              <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="rounded-3xl bg-[#202833] p-9 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C45B]">
              Proprietary Teaching
            </p>
            <h2 className="mt-3 text-3xl font-bold">The Unseen Battle™</h2>
            <p className="mt-5 leading-8 text-slate-200">
              Burnout, disengagement, or declining performance may be the visible
              symptom. The deeper question is: what is happening underneath?
            </p>
            <p className="mt-6 text-xl font-semibold">
              The first question should not always be “How do we make this person
              perform again?”
            </p>
            <p className="mt-3 text-xl font-semibold text-[#F1D77B]">
              Sometimes the better question is “What is happening underneath?”
            </p>
          </article>
          <article className="rounded-3xl border border-[#D4A017]/30 bg-[#FFF9E8] p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6A00]">
              Proprietary Teaching
            </p>
            <h2 className="mt-3 text-3xl font-bold">The Inner Voice™</h2>
            <p className="mt-5 leading-8 text-slate-700">
              During disruption, people may privately ask: Am I still valuable? Can
              I learn this? Am I becoming obsolete? What happens if I lose this role?
            </p>
            <p className="mt-6 text-xl font-semibold text-slate-900">
              Those are not technology questions. They are human questions.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#202833] px-6 py-20 text-white">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C45B]">
            A Structured Approach
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Five Steps for Human Resilience Through Change
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            A practical structure informed by lived experience, trauma-recovery
            education, and organizational application.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-5">
          {[
            ["D", "Detect the Unseen Battle™", "Recognize what may be happening beneath the visible performance problem."],
            ["I", "Identify the Root Drivers", "Understand the fear, grief, uncertainty, workload, financial insecurity, identity disruption, or adversity influencing the response."],
            ["A", "Address the Inner Voice™", "Recognize internal messages shaping confidence, behavior, decision-making, and adaptability."],
            ["N", "Navigate the Transition", "Move from fear, resistance, and survival mode toward informed action, adaptation, reskilling, and forward movement."],
            ["E", "Equip for Sustainable Resilience", "Build the capacity to adapt, learn, recover, remain effective, and continue contributing through ongoing change."],
          ].map(([letter, title, text]) => (
            <article key={letter} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4A017] text-lg font-bold text-[#202833]">
                {letter}
              </div>
              <h3 className="font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Consultancy Model"
          title="From Awareness to Measurable Organizational Action"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["1", "Diagnostic / Baseline", "Leadership interviews, anonymous pulse surveys, risk mapping, role-transition and resilience assessment, and priority reporting."],
            ["2", "Implementation", "Keynotes, workshops, leadership training, manager education, group coaching, team resilience programs, and transition support."],
            ["3", "Ongoing Monitoring", "Monthly or quarterly pulse checks, resilience and burnout indicators, engagement trends, manager feedback, and intervention recommendations."],
            ["4", "Executive Review", "Clear reporting on what changed, where risk increased, what requires intervention, what is improving, and recommended next steps."],
          ].map(([n, title, text]) => (
            <article key={n} className="rounded-3xl border border-slate-200 p-7">
              <span className="text-sm font-bold text-[#D4A017]">STAGE {n}</span>
              <h3 className="mt-3 text-xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A6A00]">
              The Economic Case
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              The Cost of Unsupported Transition
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The better question is not only “What does resilience support cost?”
              It is “What does unsupported transition cost if we wait until a person
              is disengaged, absent, leaves, or must be replaced?”
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-lg font-bold">Estimated program value can include:</h3>
            <p className="mt-5 rounded-2xl bg-[#FFF9E8] p-5 font-semibold leading-8 text-slate-800">
              Avoided replacement cost + reduced absence + reduced productivity loss
              + improved retention + retained institutional knowledge − program cost
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Any ROI estimate should be based on the organization’s own data and
              agreed assumptions; results are not guaranteed.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Business Philosophy"
          title="Human Capacity Is a Business Asset"
          text="Organizations protect financial assets, intellectual property, systems, infrastructure, and data. Every one of them depends on human capacity."
        />
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#202833] p-8 text-center text-white sm:p-12">
          <p className="text-2xl font-bold text-[#F1D77B] sm:text-3xl">
            Human Capacity → Resilience → Performance → Productivity → Profitability
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <SectionTitle
          eyebrow="Who We Help"
          title="Designed for Leaders and Organizations Navigating Change"
        />
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "CEOs and business owners",
            "Senior leadership",
            "Middle management",
            "Team leaders",
            "HR leaders",
            "Learning & development leaders",
            "Organizations undergoing transformation",
            "Organizations navigating sustained pressure",
          ].map((item) => (
            <div key={item} className="rounded-2xl bg-white p-5 text-center font-semibold shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Specialty Areas"
          title="Integrated Support Across the Human Side of Performance"
          text="We do not exclude any of these specialties. They are grouped into broader strategic solutions so organizations receive connected support rather than isolated interventions."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {specialties.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="speaking" className="bg-[#202833] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C45B]">
              Speaking & Leadership Experiences
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Protect the Person. Build Resilience. Strengthen Performance,
              Productivity and Profitability.™
            </h2>
            <p className="mt-5 leading-8 text-slate-200">
              Diane Salman, MBA, speaks from lived experience as a former business
              owner and trauma survivor, connecting the human impact of pressure and
              disruption to leadership, resilience, performance, and organizational
              sustainability.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-xl font-bold">Available formats</h3>
            <ul className="space-y-3 text-slate-200">
              {[
                "Signature keynote",
                "Executive and leadership workshops",
                "Manager training",
                "Group coaching",
                "Organizational resilience programs",
                "Leadership restoration and retreat experiences",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D4A017]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-[#F8FAFC] px-6 py-20">
        <SectionTitle
          eyebrow="Start the Conversation"
          title="Tell Us What Your Organization Is Navigating"
          text="Every organization is different. Tell us where you are experiencing the greatest pressure. If you are unsure where the problem sits, select the option asking us to help identify the right starting point."
        />
        <form
          name="organizational-resilience-inquiry"
          method="POST"
          action="/organizational-resilience/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mx-auto max-w-5xl space-y-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10"
        >
          <input type="hidden" name="form-name" value="organizational-resilience-inquiry" />
          <input type="hidden" name="lead_source" value="/organizational-resilience" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Name", "name", "text", true],
              ["Organization", "organization", "text", true],
              ["Role / Title", "role", "text", true],
              ["Work Email", "email", "email", true],
              ["Phone (optional)", "phone", "tel", false],
            ].map(([label, name, type, required]) => (
              <label key={String(name)} className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
                <input
                  type={String(type)}
                  name={String(name)}
                  required={Boolean(required)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#D4A017]"
                />
              </label>
            ))}
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-800">Organization Size</span>
              <select
                name="organization_size"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#D4A017]"
              >
                <option value="">Select</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>501–1,000</option>
                <option>1,001–5,000</option>
                <option>5,000+</option>
              </select>
            </label>
          </div>

          <CheckboxGroup
            legend="What is your organization currently navigating? Select all that apply."
            name="current_challenges"
            items={navigatingOptions}
          />

          <CheckboxGroup
            legend="What would you most like to improve? Select all that apply."
            name="desired_improvements"
            items={improvementOptions}
          />

          <label className="block">
            <span className="mb-2 block text-lg font-semibold text-slate-900">
              Briefly tell us what is happening
            </span>
            <span className="mb-3 block text-sm text-slate-600">
              What are you seeing in your organization that prompted you to reach out?
            </span>
            <textarea
              name="context"
              rows={6}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#D4A017]"
            />
          </label>

          <CheckboxGroup
            legend="What type of support are you considering? Select all that apply."
            name="support_type"
            items={supportOptions}
          />

          <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
            Rise to Thrive Hub provides education, organizational consulting,
            resilience training, and coaching. Services do not replace psychotherapy,
            diagnosis, medical treatment, emergency services, or an employer’s HR,
            legal, or clinical responsibilities.
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#D4A017] px-7 py-4 text-lg font-bold text-[#202833] shadow-lg transition hover:brightness-110"
          >
            Schedule an Organizational Resilience Conversation
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto max-w-4xl divide-y divide-slate-200">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                {item.q}
              </summary>
              <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#202833] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Prepare People Before Transition Becomes Crisis
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Protect the human capacity upon which your vision depends.
          </p>
          <p className="mt-6 text-2xl font-bold text-[#F1D77B]">
            Protect the Person. Build Resilience. Strengthen Performance,
            Productivity and Profitability.™
          </p>
          <a
            href="#inquiry"
            className="mt-9 inline-block rounded-full bg-[#D4A017] px-7 py-4 font-bold text-[#202833]"
          >
            Start the Conversation
          </a>
        </div>
      </section>
    </main>
  );
}
