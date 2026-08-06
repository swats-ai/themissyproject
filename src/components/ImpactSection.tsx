"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: "/images/icon-megaphone.svg",
    title: "Raising Awareness",
    description:
      "We help families and providers recognize the risks of brain aneurysms through accessible education and community outreach.",
  },
  {
    icon: "/images/icon-donationbox.svg",
    title: "Funding Breakthroughs",
    description:
      "Every donation supports targeted studies in early detection, from genetic markers to screening guidelines that save lives.",
  },
  {
    icon: "/images/icon-hospital.svg",
    title: "Changing Standards",
    description:
      "We partner with caregivers and medical professionals to improve treatment protocols and strengthen resources for families.",
  },
];

/**
 * "Our Mission in Action" impact section — brand-navy background with a
 * subtle decorative flower mark, centered heading copy, and a 3-column grid
 * of light-blue stat cards. Heading and cards fade up on scroll via
 * useScrollReveal.
 */
export function ImpactSection() {
  const { ref: headingRef, revealed: headingRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[140px] w-[140px] -translate-x-1/2 -translate-y-1/4 opacity-15 md:h-[180px] md:w-[180px]"
        aria-hidden="true"
      >
        <Image
          src="/images/flower-logo-sky.png"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <Container className="relative">
        <div
          ref={headingRef}
          className={cn(
            "reveal flex flex-col items-center text-center",
            headingRevealed && "revealed",
          )}
        >
          <span className="rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
            Impact
          </span>
          <h2 className="mt-4 max-w-2xl text-[32px] font-bold text-brand-blue md:text-[42.67px]">
            Our Mission in Action
          </h2>
          <p className="mt-4 max-w-[700px] text-lg text-white">
            Creating awareness and supporting research for early detection of brain
            aneurysms to save lives.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <ImpactCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ImpactCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "reveal flex h-full flex-col items-center rounded-xl bg-brand-blue-pale px-[25px] pb-12 pt-8 text-center shadow-md",
        revealed && "revealed",
      )}
    >
      <Image
        src={icon}
        alt=""
        width={72}
        height={72}
        className="mb-4 h-[72px] w-[72px]"
        aria-hidden="true"
      />
      <h3 className="mb-3 text-2xl font-bold text-brand-navy">{title}</h3>
      <p className="text-base leading-relaxed text-brand-navy">{description}</p>
    </div>
  );
}
