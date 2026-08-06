import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/container";

export function LegalPageLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-brand-blue-pale py-16">
        <Container className="flex flex-col items-center text-center">
          <Image
            src="/images/logo-primary-blue.png"
            alt="The Missy Project"
            width={200}
            height={111}
            priority
            className="mb-6 h-auto w-[200px]"
          />
          <h1 className="text-[42px] font-bold text-brand-blue">{title}</h1>
          <p className="mt-2 text-sm text-brand-navy/70">{lastUpdated}</p>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <article className="mx-auto max-w-[820px] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-blue [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-brand-navy [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-brand-navy [&_li]:leading-relaxed">
            {children}
          </article>
        </Container>
      </section>
    </>
  );
}
