import FoundationLeadForm from "@/components/FoundationLeadForm";

export const metadata = {
  title: "Apply for Foundation Course — Rise to Thrive Academy",
  description: "Start your journey to healing and transformation with our 5-Day Foundation Course.",
};

export default function FoundationApplyPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <FoundationLeadForm />
    </main>
  );
}
