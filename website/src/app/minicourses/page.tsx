import { Suspense } from "react";
import MinicoursesClient from "./MinicoursesClient";

export const metadata = {
  title: "Mini-Courses — Root-Cause Recovery",
  description: "18 faith-based mini-courses targeting specific root causes of trauma, pain, and emotional distress. $49 each with lifetime access.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="p-6">Loading courses…</div>}>
      <MinicoursesClient />
    </Suspense>
  );
}
