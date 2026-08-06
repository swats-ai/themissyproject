"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * "What is a brain aneurysm?" — full-width pale-blue section with a rounded
 * photo on the left and a heading/copy/CTA column on the right. Matches
 * docs/design-references/themissyproject.org/13-aneurysm-info.jpg.
 */
export function AneurysmInfoSection() {
  const { ref: photoRef, revealed: photoRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: copyRef, revealed: copyRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-brand-blue-pale py-16">
      <Container className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12">
        <div
          ref={photoRef}
          className={cn("reveal w-full shrink-0 md:w-[45%]", photoRevealed && "revealed")}
        >
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl md:h-[460px] md:max-w-[520px]">
            <Image
              src="/images/aneurysm-photo.png"
              alt="A doctor showing a brain scan to a patient"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 520px, 100vw"
            />
          </div>
        </div>

        <div ref={copyRef} className={cn("reveal w-full md:w-[55%]", copyRevealed && "revealed")}>
          <h2 className="text-[32px] leading-tight font-bold text-brand-navy md:text-[42.67px]">
            What is a brain aneurysm?
          </h2>
          <p className="mt-6 text-lg leading-[1.6] text-brand-navy">
            Brain aneurysms are often called &ldquo;silent killers&rdquo; because most show no
            symptoms until they rupture. In fact, 1 in 50 people is living with an unruptured
            aneurysm — and many don&apos;t even know it. For those with a family history, the
            risk quadruples
          </p>
          <p className="mt-4 text-lg leading-[1.6] text-brand-navy">
            A rupture can be catastrophic, with more than half resulting in death or severe
            disability. But there is hope: early detection changes the story. With the right
            screening, aneurysms can be found before they rupture, giving families the chance to
            prevent tragedy and protect future generations.
          </p>
          <Link
            href="/learn"
            className="mt-8 inline-block rounded-xl bg-brand-yellow px-5 py-3 text-sm font-bold tracking-[0.8px] text-brand-navy uppercase"
          >
            Learn more
          </Link>
        </div>
      </Container>
    </section>
  );
}
