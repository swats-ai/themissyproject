import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | The Missy Project",
  description:
    "Get in touch with The Missy Project — ask a question, share a comment, or sign up to volunteer in the fight against Brain Aneurysm Disease.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
