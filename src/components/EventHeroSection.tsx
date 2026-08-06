"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-xl border border-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] transition-[filter] duration-200 hover:brightness-95";

/**
 * Hero for the "26th Annual Golf Tournament" events page — 2-column layout:
 * headline/date/location/CTAs on the left, a real fairway photo on the right.
 */
export function EventHeroSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
            revealed && "revealed",
          )}
        >
          <div>
            <h1 className="text-4xl font-bold leading-[1.2] text-brand-blue md:text-5xl lg:text-[56px]">
              26th Annual Golf Tournament
            </h1>

            <p className="mt-6 text-lg text-brand-navy md:text-xl">
              <span className="block">Monday, September 28, 2026</span>
              <span className="block">River Place Country Club, Austin, TX</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://40wgyk.share-na2.hsforms.com/2VnsHOvr9RTqO5epYWYAZAA"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
              >
                Register to Play
              </a>
              <a
                href="#"
                className={cn(buttonBaseClasses, "bg-brand-blue text-white")}
              >
                Sponsor the Event
              </a>
            </div>
          </div>

          <div className="relative aspect-[800/533] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/event-fairway.jpg"
              alt="Golf course fairway at River Place Country Club"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
