"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-xl border border-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] transition-[filter] duration-200 hover:brightness-95";

/**
 * Closing CTA band — alternate ways to support the mission without attending
 * the tournament in person.
 */
export function EventAlternateCtaSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-brand-blue-pale py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal mx-auto flex max-w-3xl flex-col items-center text-center",
            revealed && "revealed",
          )}
        >
          <Image
            src="/images/icon-groupheart.svg"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="mb-6 h-20 w-20"
          />
          <h2 className="text-[32px] font-bold text-brand-navy md:text-[42.67px]">
            Can&apos;t Make It? Here are other ways to take action.
          </h2>
          <p className="mt-6 text-lg leading-[1.6] text-brand-navy">
            The Missy Project offers opportunities to get involved even if you
            can&apos;t attend in person. Our Community Screening Program
            welcomes donations to provide eligible individuals with a free
            early detection screening. Screenings are free to patients and
            cost $500 to provide.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
            >
              Donate a Screening
            </Link>
            <Link
              href="/apply-for-screening"
              className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
            >
              Apply for Screening
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
