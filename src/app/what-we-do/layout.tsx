import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do | The Missy Project",
};

export default function WhatWeDoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
