"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-xl border border-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] transition-[filter] duration-200 hover:brightness-95";

const detailItems = [
  "Saturday, September 19, 2026",
  "8:00am packet pickup · 9:00am race start",
  "Atlas Surgery Center, 50 George Karl Blvd, Williamsville, NY",
  "Timed 5K race or untimed 1-mile walk",
  "$45 per participant",
];

function FlowerBullet() {
  return (
    <Image
      src="/images/flower-logo-blue.png"
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className="mt-1 h-5 w-5 shrink-0"
    />
  );
}

/**
 * Temporary "Community Event" band promoting a third-party brain aneurysm
 * awareness 5K hosted by University at Buffalo Neurosurgery (UBNS). Self-
 * contained card so it can be removed cleanly after the event (Sept 19, 2026).
 * All logistics sourced from ubns.com/events/brains-in-motion.
 */
export function EventCommunitySection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn("reveal mx-auto max-w-3xl", revealed && "revealed")}
        >
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-brand-blue md:text-[42.67px]">
              Also Happening in the Community
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-brand-navy">
              We&apos;re helping spread the word about a brain aneurysm
              awareness run and walk hosted by University at Buffalo
              Neurosurgery.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-brand-blue/15 bg-brand-blue-pale/50 p-8 md:p-12">
            <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
              Community Event
            </span>

            <h3 className="mt-6 text-3xl font-bold text-brand-blue">
              Buffalo Brains in Motion
            </h3>
            <p className="mt-2 text-xl font-bold text-brand-navy">
              Brain Aneurysm Awareness Run &amp; Walk
            </p>
            <p className="mt-4 text-brand-navy">
              A community 5K run and 1-mile walk raising awareness of brain
              aneurysms, with proceeds supporting brain aneurysm research.
              Hosted by University at Buffalo Neurosurgery (UBNS).
            </p>

            <ul className="mt-6 space-y-2">
              {detailItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-navy">
                  <FlowerBullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://brainaneurysmawarenessrun.itsyourrace.com/register/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
              >
                Register
              </a>
              <a
                href="https://www.ubns.com/events/brains-in-motion/"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonBaseClasses, "bg-brand-blue text-white")}
              >
                Event Details
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
