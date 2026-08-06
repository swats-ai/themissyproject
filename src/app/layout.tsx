import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const monaSans = localFont({
  src: [
    { path: "../../public/fonts/mona-sans-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/mona-sans-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/mona-sans-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | The Missy Project",
  description:
    "Early detection of brain aneurysms can save lives. Join us in raising awareness, funding research, and providing free screenings to prevent tragedies and protect families.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    title: "Home | The Missy Project",
    description:
      "Early detection of brain aneurysms can save lives. Join us in raising awareness, funding research, and providing free screenings to prevent tragedies and protect families.",
    url: "https://www.themissyproject.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${monaSans.variable} h-full antialiased`}
      // Browser extensions (e.g. Google Tag Assistant) inject attributes like
      // data-tag-assistant-prod-present onto <html> before React hydrates,
      // which otherwise trips a harmless hydration-mismatch warning.
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
