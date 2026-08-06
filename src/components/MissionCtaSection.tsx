"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * "Our mission is clear and unwavering:" — full-width navy CTA band with a
 * scattered decorative-flower background, centered heading/copy/button. See
 * docs/design-references/themissyproject.org/07-story-cta.jpg (bottom half).
 */
export function MissionCtaSection({ icon }: { icon?: string } = {}) {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 md:py-[72px]">
      <Image
        src="/images/flowers-decorative-navy.png"
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none absolute inset-0 object-cover"
      />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "reveal mx-auto flex max-w-3xl flex-col items-center text-center",
            revealed && "revealed",
          )}
        >
          {icon && (
            <Image
              src={icon}
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="mb-6 h-20 w-20"
            />
          )}
          <h2 className="text-[32px] text-white md:text-[42.67px]">
            Our mission is clear and unwavering:
          </h2>
          <p className="mt-6 text-[18px] leading-[1.6] text-white">
            Prevent the preventable, and give every family the chance at a
            safer future
            <br />
            See if you or a loved one qualifies (3-minute form)
          </p>
          <Link
            href="/apply-for-screening"
            className="mt-8 rounded-xl bg-brand-yellow px-5 py-3 font-bold tracking-[0.8px] text-brand-navy uppercase"
          >
            Apply for a Free Screening
          </Link>
        </div>
      </Container>
    </section>
  );
}
