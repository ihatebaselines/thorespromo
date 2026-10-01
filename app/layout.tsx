import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thores — Understand your breathing",
  description:
    "Thores is a student-built prototype exploring how breathing patterns during sleep can become clearer, more meaningful insights.",
  icons: { icon: "/thorespromo/assets/thores-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
