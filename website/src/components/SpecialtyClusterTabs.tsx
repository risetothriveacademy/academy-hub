"use client";

import { useState } from "react";

const CLUSTERS = [
  {
    name: "Organizational Resilience",
    description: "Strengthen the organization’s capacity to absorb disruption, recover, and sustain performance.",
    specialties: ["Organizational Resilience", "Change Management", "Organizational Recovery", "Workplace Resilience"],
  },
  {
    name: "Workforce Transformation",
    description: "Support people through AI adoption, role redesign, reskilling, restructuring, and workforce transition.",
    specialties: ["Workforce Transformation", "Workforce Reskilling", "Human Capacity", "Retention Strategy"],
  },
  {
    name: "Leadership Resilience",
    description: "Equip leaders to remain steady, communicate clearly, and lead people through uncertainty and change.",
    specialties: ["Leadership Resilience", "Leadership Development", "Executive Coaching", "Corporate Speaking"],
  },
  {
    name: "Employee Resilience",
    description: "Address the human pressures that influence engagement, wellbeing, burnout risk, and adaptability.",
    specialties: ["Employee Wellbeing", "Burnout Prevention", "Employee Engagement", "Group Coaching"],
  },
  {
    name: "Human Performance",
    description: "Protect the human capacity that supports focus, team performance, productivity, and sustainable output.",
    specialties: ["Human Performance", "Team Performance", "Productivity"],
  },
  {
    name: "Trauma-Informed Consulting",
    description: "Help leaders recognize how trauma, grief, adversity, and prolonged stress can affect workplace behavior and performance.",
    specialties: ["Trauma-Informed Consulting", "Organizational Recovery", "Employee Wellbeing", "Human Capacity"],
  },
];

export default function SpecialtyClusterTabs() {
  const [active, setActive] = useState(0);
  const cluster = CLUSTERS[active];

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_1fr]">
      <div className="space-y-2" role="tablist" aria-label="Consulting solution clusters">
        {CLUSTERS.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            onClick={() => setActive(index)}
            className={`w-full rounded-xl border px-5 py-4 text-left text-sm font-bold transition sm:text-base ${
              active === index
                ? "border-[#0097B2] bg-[#0097B2] text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-[#DB910F]"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#DB910F]">
          Strategic Solution Cluster
        </p>
        <h3 className="mt-3 text-3xl font-bold text-[#0097B2]">{cluster.name}</h3>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          {cluster.description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {cluster.specialties.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-7 text-sm leading-6 text-slate-500">
          These six clusters form the planned sub-page structure for the corporate consultancy site.
        </p>
      </div>
    </div>
  );
}
