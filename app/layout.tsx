import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thorespromo.pages.dev"),
  title: {
    default: "Thores — Every breath matters",
    template: "%s | Thores",
  },
  description:
    "Thores is a student-built prototype exploring how breathing patterns during sleep can help people understand their night and wake up to clearer insights.",
  applicationName: "Thores",
  authors: [{ name: "Thores" }],
  creator: "Thores",
  publisher: "Thores",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Thores",
    title: "Thores — Every breath matters",
    description:
      "A student-built prototype exploring breathing patterns during sleep and turning them into clearer insights.",
    images: [
      {
        url: "/assets/story-video.jpg",
        width: 434,
        height: 219,
        alt: "A quiet mountain lake at dusk — the story behind Thores.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thores — Every breath matters",
    description:
      "A student-built prototype exploring breathing patterns during sleep and turning them into clearer insights.",
    images: ["/assets/story-video.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: { icon: "/assets/thores-logo.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
