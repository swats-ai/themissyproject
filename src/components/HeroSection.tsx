"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { ArrowRightLongIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * Above-the-fold hero: badge + headline + copy + CTAs on the left, a photo
 * collage on the right, with a decorative flower graphic bleeding in from
 * the right edge behind everything.
 */
export function HeroSection() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden bg-white">
      <Image
        src="/images/flowers-decorative-white.png"
        alt=""
        width={900}
        height={1000}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-auto max-w-none object-contain"
      />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-[45%_55%] lg:gap-8 lg:py-24",
            revealed && "revealed",
          )}
        >
          <div className="max-w-[520px]">
            <span className="mb-4 inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-brand-navy">
              Know. Detect. Prevent.
            </span>

            <h1 className="mb-[34px] text-4xl font-bold leading-[1.2] text-brand-blue md:text-5xl lg:text-[68px] lg:leading-[1.27]">
              Early Brain Aneurysm Detection Saves Lives
            </h1>

            <p className="text-lg leading-[27px] text-brand-navy">
              From families to physicians to donors, we&apos;re uniting a
              community with one goal: prevent the preventable through early
              detection.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/donate"
                className="inline-block rounded-xl bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
              >
                Donate Now
              </Link>

              <Link
                href="/apply-for-screening"
                className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.8px] text-brand-yellow"
              >
                Apply For Screening
                <ArrowRightLongIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="w-full lg:max-w-[600px] lg:justify-self-end">
            <Image
              src="/images/hero-photo-collage.png"
              alt="Families and physicians who are part of the Missy Project community"
              width={1456}
              height={802}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
