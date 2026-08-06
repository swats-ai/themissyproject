import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply For Screening | The Missy Project",
  description:
    "Apply for The Missy Project's free Community Screening Program — MRA screenings for early detection of brain aneurysms.",
  openGraph: {
    title: "Apply For Screening | The Missy Project",
    description:
      "Apply for The Missy Project's free Community Screening Program — MRA screenings for early detection of brain aneurysms.",
    url: "https://www.themissyproject.org/apply-for-screening",
  },
};

export default function ApplyForScreeningLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
