"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * "Turning Loss Into Lifesaving Action" — white-background story section with
 * a two-column layout: text + CTA on the left, a single rounded photo on the
 * right. See docs/design-references/themissyproject.org/07-story-cta.jpg
 * (top half).
 */
export function StorySection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16",
            revealed && "revealed",
          )}
        >
          <div className="flex w-full flex-col items-start md:w-1/2">
            <h2 className="text-brand-blue">Turning Loss Into Lifesaving Action</h2>
            <p className="mt-6 mb-4 text-[18px] leading-[27px] text-brand-navy">
              The Missy Project was born from the devastating loss of Missy, who
              passed away from a brain aneurysm at just 12 years old. Out of that
              grief grew a commitment: no family should suffer a preventable
              loss.
            </p>
            <p className="mb-8 text-[18px] leading-[27px] text-brand-navy">
              For more than 25 years, we&apos;ve turned that promise into action,
              raising national awareness, funding groundbreaking research, and
              partnering with physicians to establish screening protocols.
              Through our free MRI/MRA program, we&apos;ve provided more than{" "}
              <strong className="font-bold">1,200 free screenings</strong> for
              families at risk, offering peace of mind and life-saving early
              detection.
            </p>
            <Link
              href="/donate"
              className="rounded-xl bg-brand-yellow px-5 py-3 font-bold tracking-[0.8px] text-brand-navy uppercase"
            >
              Save a Life Today
            </Link>
          </div>

          <div className="w-full md:w-1/2">
            {/* The live site shows this vintage photo in full — no crop, no
                zoom — so the container matches the image's natural 1080:881
                aspect ratio and object-cover becomes a visual no-op. */}
            <div className="relative aspect-[1080/881] w-full overflow-hidden rounded-3xl md:max-w-[500px]">
              <Image
                src="/images/family-vintage-photo.png"
                alt="Missy with her family"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
