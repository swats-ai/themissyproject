"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";
import { StatsBar } from "@/components/StatsBar";
import { ArrowRightLongIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/** Small inline checkmark used on the "Who Qualifies?" eligibility list. */
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" className="fill-brand-blue" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const screeningBenefits = [
  "Identify key risk factors associated with brain aneurysms",
  "Recognize genetic patterns and familial links",
  "Promote early intervention before symptoms appear",
  "Empower families with knowledge and prevention tools",
];

const eligibilityItems = [
  "You are 16 or older",
  "You have 2 immediate family members with brain aneurysms",
  "And/or, you have 1 family member with risk factors (ex. smoking/hypertension)",
];

type ComparisonCard = {
  title: string;
  subheading: string;
  intro: string;
  bullets: string[];
};

const comparisonCards: ComparisonCard[] = [
  {
    title: "What We Know",
    subheading: "The Evidence Is Clear",
    intro:
      "Decades of screenings and research have revealed critical insights that guide prevention and treatment.",
    bullets: [
      "1 in 50 people has an unruptured brain aneurysm, most undetected until rupture.",
      "Family history increases risk up to 4x.",
      "Early detection can prevent life-threatening ruptures.",
    ],
  },
  {
    title: "What We Don't Know",
    subheading: "The Questions That Remain",
    intro:
      "These are the urgent research gaps we're working to close with donor support.",
    bullets: [
      "The optimal age and frequency for population-level pediatric screening.",
      "The precise genetic markers that predict ruptures.",
      "Cost-effective national guidelines comparable to mammography.",
    ],
  },
];

type GrantItem = {
  title: string;
  body: string;
};

const grantItems: GrantItem[] = [
  {
    title: "Identifying Genetic factors",
    body: "The Missy Project has funded a $144,500 grant to the University of Buffalo for early detection genetics. The funds will be used to develop the world's first AI-powered research initiative dedicated to studying and predicting the risk of potential intracranial aneurysms. This partnership and grant set a new precedent in how aneurysms can be predicted and treated with the end goal of saving millions of lives.",
  },
  {
    title: "Developing better diagnostic methods and Imaging techniques",
    body: "The Missy Project has funded $150,000 to Dartmouth Hitchcock for establishing a telehealth program for rural hospitals to be able to provide the same treatment as a trauma hospital can.",
  },
  {
    title: "Aneurysm growth and rupture prediction",
    body: "To honor Missy's legacy and prevent similar tragedies, The Missy Project has invested approximately $200,000 in cutting-edge research in neurovascular biomechanics at the University of Texas at Austin",
  },
  {
    title: "Aneurysm pain management",
    body: "The Missy Project funded $37,500 to Dr. Peter Kan at the University of Texas at Galveston to determine if lidocaine used during surgery can provide relief from severe headaches for those operated on.",
  },
];

const golfHighlights = [
  "18 holes with cart, range balls, sack lunch, and reception dinner included in entry",
  "Prizes for top teams, longest drive, and Beat the Pro",
  "Evening reception & live auction — open to all, no golf required ($50 per ticket)",
];

/** Small pill-style eyebrow badge used above section headings across the page. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
      {children}
    </span>
  );
}

export default function WhatWeDoPage() {
  const { ref: heroRef, revealed: heroRevealed } = useScrollReveal({ threshold: 0.05 });
  const { ref: screeningRef, revealed: screeningRevealed } = useScrollReveal();
  const { ref: scienceIntroRef, revealed: scienceIntroRevealed } = useScrollReveal();
  const { ref: scienceComparisonRef, revealed: scienceComparisonRevealed } = useScrollReveal();
  const { ref: fundingRef, revealed: fundingRevealed } = useScrollReveal();
  const { ref: golfRef, revealed: golfRevealed } = useScrollReveal();
  const { ref: finalCtaRef, revealed: finalCtaRevealed } = useScrollReveal();

  return (
    <>
      {/* 1. Hero */}
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
            ref={heroRef}
            className={cn(
              "reveal grid grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-[45%_55%] lg:gap-8 lg:py-24",
              heroRevealed && "revealed",
            )}
          >
            <div className="max-w-[520px]">
              <Eyebrow>Know. Detect. Prevent.</Eyebrow>

              <h1 className="mb-[34px] mt-4 text-4xl font-bold leading-[1.2] text-brand-blue md:text-5xl lg:text-[68px] lg:leading-[1.27]">
                Turning Awareness Into Action
              </h1>

              <p className="text-lg leading-[27px] text-brand-navy">
                The Missy Project is dedicated to raising awareness, funding
                early detection research and educating the public and medical
                community. Together, we are challenging the misperception of
                rarity, pushing for change in clinical awareness and
                advocating for early screening to save lives.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="/donate"
                  className="inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
                >
                  Donate Now
                </Link>

                <Link
                  href="/apply-for-screening"
                  className="inline-block rounded-xl border border-brand-blue bg-brand-blue px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-white transition-colors duration-200 ease-out hover:brightness-95"
                >
                  Apply For Screening
                </Link>
              </div>
            </div>

            <div className="w-full lg:max-w-[500px] lg:justify-self-end">
              <Image
                src="/images/wwd-hero-collage.png"
                alt="The Missy Project team educating families and hosting community events"
                width={675}
                height={675}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Stats */}
      <StatsBar />

      {/* 3. Free Screening Program */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div
            ref={screeningRef}
            className={cn("reveal max-w-[820px]", screeningRevealed && "revealed")}
          >
            <Eyebrow>Research</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-[42.67px]">
              Free Screening Program
            </h2>
            <p className="mt-4 text-base leading-[1.6] text-brand-navy">
              The Missy Project sponsors &quot;the only Early Detection
              Screening Program for Brain Aneurysms in children and adults in
              Austin, TX. Together we provide FREE Magnetic Resonance Imaging
              (MRI) screenings to anyone who has a familial history of brain
              aneurysms. The Missy Project is looking for eligible people with
              a family history of brain aneurysms to participate in our
              Community Screening Program. Over two decades, this program has
              helped us:
            </p>

            <ul className="mt-4 space-y-2">
              {screeningBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-2 text-base leading-[1.6] text-brand-navy"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[10px] size-1.5 shrink-0 rounded-full bg-brand-blue"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-base leading-[1.6] font-bold text-brand-navy">
              This program is not just about screening—it&apos;s about
              education, prevention, and hope.
            </p>

            <div className="mt-10 rounded-2xl bg-brand-blue-pale p-8 md:p-10">
              <h3 className="text-xl font-bold text-brand-blue md:text-2xl">
                Who Qualifies?
              </h3>
              <ul className="mt-4 space-y-3">
                {eligibilityItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0" />
                    <span className="text-base leading-[1.6] text-brand-navy">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/apply-for-screening"
              className="mt-8 inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
            >
              Apply For Free Screening
            </Link>

            <p className="mt-12 text-2xl font-bold text-brand-navy">
              What to Expect Next:
            </p>
            <Image
              src="/images/wwd-next-steps.png"
              alt="Step 1: Telephone Interview, Step 2: Sign Consent Screening Form, Step 3: Schedule MRI Screening"
              width={1169}
              height={600}
              className="mt-6 h-auto w-full"
            />
          </div>
        </Container>
      </section>

      {/* 4. What We Know / What We Don't Know */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div
            ref={scienceIntroRef}
            className={cn("reveal", scienceIntroRevealed && "revealed")}
          >
            <Eyebrow>Research</Eyebrow>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-brand-blue md:text-[28px]">
              Listening To The Experts
            </h3>
          </div>

          <div
            ref={scienceComparisonRef}
            className={cn(
              "reveal mt-10 grid grid-cols-1 gap-8 md:grid-cols-2",
              scienceComparisonRevealed && "revealed",
            )}
          >
            {comparisonCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-brand-navy p-8 md:p-10">
                <h4 className="text-2xl font-bold text-brand-blue md:text-[28px]">
                  {card.title}
                </h4>
                <p className="mb-4 mt-2 text-base font-bold text-brand-yellow">
                  {card.subheading}
                </p>
                <p className="text-base leading-[1.6] text-white">{card.intro}</p>
                <ul className="mt-4 space-y-2">
                  {card.bullets.map((bullet) => (
                    <li
                      key={bullet}
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

          <div className="mt-8 rounded-2xl bg-brand-blue-pale p-8 md:p-10">
            <h4 className="text-2xl font-bold text-brand-blue md:text-[28px]">
              Research at the Heart
            </h4>
            <p className="mt-2 text-base leading-[1.6] text-brand-navy">
              Research isn&apos;t just data — it&apos;s the difference between
              prevention and loss. Every study we support brings answers
              closer: how to detect aneurysms earlier, how family history
              raises risk, and why children can be so vulnerable. With each
              discovery, we move closer to a future where early detection is
              routine and lives are saved before tragedy strikes. Thanks to
              our donors, we have funded more than $1.5 million in research
              grants for early detection of brain aneurysms
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.8px] text-brand-yellow"
            >
              Join Our Research Network
              <ArrowRightLongIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/donate"
              className="inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
            >
              Donate To Fund Breakthroughs
            </Link>
          </div>
        </Container>
      </section>

      {/* 5. Funding Life-Saving Research */}
      <section className="bg-brand-blue-pale py-16 md:py-24">
        <Container>
          <div
            ref={fundingRef}
            className={cn("reveal max-w-[820px]", fundingRevealed && "revealed")}
          >
            <Eyebrow>Research</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-[42.67px]">
              Funding life-saving research
            </h2>
            <p className="mt-4 text-base leading-[1.6] text-brand-navy">
              Since 2004, The Missy Project has donated over $1,000,000 and
              partnered with leading physicians, scientists, and families to
              push research forward. From uncovering genetic risk factors to
              exploring national screening guidelines, we connect the
              brightest minds with the urgent questions that brain aneurysms
              demand we answer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {grantItems.map((grant) => (
              <div
                key={grant.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                {grant.title === "Identifying Genetic factors" && (
                  <Image
                    src="/images/wwd-genetics-grant-check.png"
                    alt="The Missy Project presenting a $144,500 grant check to UBN Neurosurgery @ Ale FMSC"
                    width={675}
                    height={495}
                    className="mb-4 h-auto w-full rounded-lg"
                  />
                )}
                <h3 className="text-lg font-bold text-brand-blue">
                  {grant.title}
                </h3>
                <p className="mt-2 text-base leading-[1.6] text-brand-navy">
                  {grant.body}
                </p>
                {grant.title ===
                  "Developing better diagnostic methods and Imaging techniques" && (
                  <Image
                    src="/images/wwd-diagnostic-grant-check.webp"
                    alt="Supporters at The Missy Project's annual charity golf tournament presenting grant checks, including a $150,000 award to the Dartmouth Neurovascular TeleHealth Network"
                    width={1350}
                    height={965}
                    className="mt-4 h-auto w-full rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Our Annual Golf Tournament */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div
            ref={golfRef}
            className={cn(
              "reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
              golfRevealed && "revealed",
            )}
          >
            <div>
              <Eyebrow>Events</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-brand-blue md:text-[42.67px]">
                Our Annual Golf Tournament
              </h2>
              <p className="mt-4 text-base leading-[1.6] text-brand-navy">
                Each year, The Missy Project hosts its Annual Golf Tournament — a
                community tradition that brings supporters together for a day of
                fun, competition, and fundraising.
              </p>

              <ul className="mt-4 space-y-2">
                {golfHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-base leading-[1.6] text-brand-navy"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[10px] size-1.5 shrink-0 rounded-full bg-brand-blue"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-base leading-[1.6] text-brand-navy">
                This is an annual event. Stay tuned — more details and
                registration information coming soon.
              </p>

              <Link
                href="/event"
                className="mt-8 inline-block rounded-xl bg-brand-blue px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-white transition-colors duration-200 ease-out hover:brightness-95"
              >
                See Event Details
              </Link>
            </div>

            <Image
              src="/images/wwd-golf-photos.png"
              alt="Golfers at a past Missy Project tournament"
              width={1080}
              height={1080}
              className="mx-auto h-auto w-full max-w-[420px]"
            />
          </div>
        </Container>
      </section>

      {/* 7. Final CTA */}
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
            ref={finalCtaRef}
            className={cn(
              "reveal mx-auto flex max-w-3xl flex-col items-center text-center",
              finalCtaRevealed && "revealed",
            )}
          >
            <Eyebrow>How you can help</Eyebrow>
            <h2 className="mt-4 text-[32px] font-bold text-white md:text-[42.67px]">
              Awareness, Education, Action
            </h2>
            <p className="mt-6 text-lg leading-[1.6] text-white">
              Every newsletter we publish, every event we host, and every
              session we lead for medical professionals is another step
              toward awareness. But awareness alone isn&apos;t enough —
              it&apos;s action that saves lives.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/apply-for-screening"
                className="inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
              >
                Apply For A Free Screening
              </Link>
              <Link
                href="/donate"
                className="inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95"
              >
                Donate To Save Lives
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
