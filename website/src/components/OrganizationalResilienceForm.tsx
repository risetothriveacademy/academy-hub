"use client";

import { useState } from "react";

const navigatingOptions = [
  "AI adoption / automation","Workforce transformation","Restructuring","Role redesign",
  "Redundancy / layoffs","Reskilling / internal mobility","Leadership burnout","Employee burnout",
  "Reduced engagement","Absenteeism","Retention / turnover","Productivity concerns","Team disruption",
  "Grief / trauma / adversity affecting employees","Sustained performance pressure","Leadership resilience",
  "Organizational recovery","Retreat / leadership restoration experience","Speaking / keynote",
  "Not sure — I’d like to discuss what we are seeing",
];

const improvementOptions = [
  "Resilience","Leadership capacity","Employee engagement","Productivity","Retention",
  "Adaptability through change","Team performance","Communication","Workforce transition",
  "Employee support","Other",
];

const supportOptions = [
  "Keynote / speaking","Workshop","Leadership training","Group coaching",
  "Organizational assessment","Ongoing consulting / advisory","Retreat",
  "Not sure — recommend the best starting point",
];

function CheckboxGroup({ legend, name, items }: { legend: string; name: string; items: string[] }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold text-slate-900">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <label key={item} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-[#D4A017]">
            <input type="checkbox" name={name} value={item} className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#D4A017]" />
            <span className="text-sm leading-6 text-slate-700">{item}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function OrganizationalResilienceForm() {
  const [status, setStatus] = useState<"idle"|"submitting"|"error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, String(value)));

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) throw new Error("Submission failed");
      window.location.assign("/organizational-resilience/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      name="organizational-resilience-inquiry"
      onSubmit={handleSubmit}
      className="mx-auto max-w-5xl space-y-10 rounded-3xl bg-white p-6 shadow-sm sm:p-10"
    >
      <input type="hidden" name="form-name" value="organizational-resilience-inquiry" />
      <input type="hidden" name="lead_source" value="/organizational-resilience" />

      <div className="grid gap-5 sm:grid-cols-2">
        {[
          ["Name","name","text",true],["Organization","organization","text",true],
          ["Role / Title","role","text",true],["Work Email","email","email",true],
          ["Phone (optional)","phone","tel",false],
        ].map(([label,name,type,required]) => (
          <label key={String(name)} className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-800">{label}</span>
            <input type={String(type)} name={String(name)} required={Boolean(required)} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#D4A017]" />
          </label>
        ))}

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-800">Organization Size</span>
          <select name="organization_size" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#D4A017]">
            <option value="">Select</option><option>1–10</option><option>11–50</option><option>51–200</option>
            <option>201–500</option><option>501–1,000</option><option>1,001–5,000</option><option>5,000+</option>
          </select>
        </label>
      </div>

      <CheckboxGroup legend="What is your organization currently navigating? Select all that apply." name="current_challenges" items={navigatingOptions} />
      <CheckboxGroup legend="What would you most like to improve? Select all that apply." name="desired_improvements" items={improvementOptions} />

      <label className="block">
        <span className="mb-2 block text-lg font-semibold text-slate-900">Briefly tell us what is happening</span>
        <span className="mb-3 block text-sm text-slate-600">What are you seeing in your organization that prompted you to reach out?</span>
        <textarea name="context" rows={6} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#D4A017]" />
      </label>

      <CheckboxGroup legend="What type of support are you considering? Select all that apply." name="support_type" items={supportOptions} />

      <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-6 text-slate-600">
        Rise to Thrive Hub provides education, organizational consulting, resilience training, and coaching. Services do not replace psychotherapy, diagnosis, medical treatment, emergency services, or an employer’s HR, legal, or clinical responsibilities.
      </div>

      {status === "error" ? <p className="text-sm font-semibold text-red-700">We could not submit the form. Please try again.</p> : null}

      <button type="submit" disabled={status === "submitting"} className="w-full rounded-full bg-[#D4A017] px-7 py-4 text-lg font-bold text-[#202833] shadow-lg transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Schedule an Organizational Resilience Conversation"}
      </button>
    </form>
  );
}
