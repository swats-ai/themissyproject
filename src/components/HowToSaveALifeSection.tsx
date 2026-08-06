"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const STEPS = ["EARLY DETECTION", "RESEARCH", "EDUCATION"] as const;

/**
 * Purely decorative vertical stepper — despite looking like a click-driven
 * tab switcher (3 pill "buttons"), a live click sweep on the source site
 * confirmed the pills do nothing. Rendered as plain non-interactive `<div>`s
 * with no active state or content switching, fading into view on scroll.
 */
export function HowToSaveALifeSection() {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-brand-blue-pale py-16 md:py-24">
      <div className="mx-auto max-w-[700px] px-4 md:px-6">
        <div
          ref={ref}
          className={cn("reveal overflow-hidden rounded-3xl", revealed && "revealed")}
        >
          <div className="bg-brand-navy px-6 py-8 md:px-8">
            <h2 className="text-center text-2xl font-bold tracking-[0.5px] text-white md:text-[32px]">
              HOW TO SAVE A LIFE
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6 bg-brand-blue-pale px-6 py-10 md:px-8 md:py-12">
            <Image
              src="/images/logo-primary-blue.png"
              alt="The Missy Project — Brain Aneurysm Detection"
              width={300}
              height={100}
              className="h-auto w-[220px] md:w-[300px]"
            />

            {STEPS.map((step) => (
              <div key={step} className="flex flex-col items-center gap-6">
                <div className="h-12 w-px bg-brand-navy/40" />
                <div className="rounded-xl bg-brand-yellow px-6 py-3 text-sm font-bold tracking-[0.8px] text-brand-navy uppercase md:px-8 md:py-3.5 md:text-base">
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
