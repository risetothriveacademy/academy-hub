// website/src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Rise To Thrive Hub",
  description: "Faith-centered recovery and transformation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#3B3B3B]">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
