"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type ComparisonCard = {
  title: string;
  subheading: string;
  intro: string;
  bullets: React.ReactNode[];
};

const comparisonCards: ComparisonCard[] = [
  {
    title: "What We Know",
    subheading: "The Evidence Is Clear",
    intro:
      "Decades of screenings and research have revealed critical insights that guide prevention and treatment.",
    bullets: [
      <>
        <strong className="font-bold">1</strong> in{" "}
        <strong className="font-bold">50</strong> people has an unruptured
        brain aneurysm, most undetected until rupture.
      </>,
      <>
        Family history increases risk up to{" "}
        <strong className="font-bold">4x</strong>.
      </>,
      <>
        Early detection can{" "}
        <strong className="font-bold">prevent life-threatening ruptures</strong>.
      </>,
    ],
  },
  {
    title: "What We Don't Know",
    subheading: "The Questions That Remain",
    intro:
      "These are the urgent research gaps we're working to close with donor support.",
    bullets: [
      <>
        The optimal age and frequency for population-level{" "}
        <strong className="font-bold">pediatric screening</strong>.
      </>,
      <>
        The precise <strong className="font-bold">genetic markers</strong>{" "}
        that predict ruptures.
      </>,
      <>
        Cost-effective{" "}
        <strong className="font-bold">national guidelines</strong> comparable
        to mammography.
      </>,
    ],
  },
];

/**
 * "Where Science Meets Hope" section — intro copy, a two-column light/dark
 * "What We Know" vs "What We Don't Know" comparison, and a full-width
 * "Research at the Heart" callout card. See docs/design-references/
 * themissyproject.org/09-science.jpg for the visual reference.
 */
export function ScienceSection() {
  const { ref: introRef, revealed: introRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: comparisonRef, revealed: comparisonRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: researchRef, revealed: researchRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={introRef}
          className={cn(
            "reveal mx-auto max-w-[800px] text-center",
            introRevealed && "revealed",
          )}
        >
          <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
            Where Science Meets Hope
          </span>
          <h2 className="mt-4 text-[42.67px] font-bold leading-tight text-brand-blue">
            Closing the Gaps in Knowledge
          </h2>
          <p className="mt-4 text-lg text-[color:var(--brand-navy)]">
            Even after 25 years of research, much about brain aneurysms
            remains uncertain. The Missy Project funds the studies that
            transform <strong className="font-bold">unknowns into answers</strong>,
            and answers into{" "}
            <strong className="font-bold">lives saved</strong>.
          </p>
        </div>

        <div
          ref={comparisonRef}
          className={cn(
            "reveal mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2",
            comparisonRevealed && "revealed",
          )}
        >
          {comparisonCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-brand-navy p-8 md:p-10"
            >
              <h3 className="text-[28px] font-bold text-brand-blue">
                {card.title}
              </h3>
              <p className="mb-4 mt-2 text-base font-bold text-brand-yellow">
                {card.subheading}
              </p>
              <p className="text-base leading-[1.6] text-white">
                {card.intro}
              </p>
              <ul className="mt-4 space-y-2">
                {card.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-base leading-[1.6] text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] size-1.5 shrink-0 rounded-full bg-brand-yellow"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          ref={researchRef}
          className={cn(
            "reveal mt-8 rounded-2xl bg-brand-blue-pale p-8 md:p-10",
            researchRevealed && "revealed",
          )}
        >
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
            <Image
              src="/images/icon-compassion.svg"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="size-20 shrink-0"
            />
            <div>
              <h3 className="text-[28px] font-bold text-brand-blue">
                Research at the Heart
              </h3>
              <p className="mt-2 text-base leading-[1.6] text-[color:var(--brand-navy)]">
                Research is at the core of everything we do — because early
                detection is what saves lives. Since 2004, our Community
                Screening Program has worked to uncover the most pressing
                questions: what risk factors matter most, how family
                histories shape outcomes, and why children can be so deeply
                affected. Every study we support brings the answers closer,
                guiding doctors and families toward prevention and
                life-saving care.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
