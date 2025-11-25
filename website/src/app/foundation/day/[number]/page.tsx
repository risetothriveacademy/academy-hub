import { notFound } from "next/navigation";
import { foundationCourse } from "@/../../data/foundation-course";
import FoundationDayClient from "./FoundationDayClient";

export function generateStaticParams() {
  return [
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
  ];
}

export default async function FoundationDayPage({ params }: { params: Promise<{ number: string }> }) {
  const resolvedParams = await params;
  const dayNumber = parseInt(resolvedParams.number);
  const dayContent = foundationCourse.find((d) => d.day === dayNumber);

  if (!dayContent) {
    notFound();
  }

  return <FoundationDayClient dayContent={dayContent} dayNumber={dayNumber} />;
}
