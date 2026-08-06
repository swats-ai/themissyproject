"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { StatsBar } from "@/components/StatsBar";
import { MissionCtaSection } from "@/components/MissionCtaSection";
import { ArrowRightLongIcon } from "@/components/icons";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const EYEBROW_CLASS =
  "inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]";
const BUTTON_YELLOW =
  "inline-block rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95";
const BUTTON_YELLOW_OUTLINE =
  "inline-block rounded-xl border border-brand-yellow bg-transparent px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-yellow transition-colors duration-200 ease-out hover:bg-brand-yellow hover:text-brand-navy";

const whyItMatters = [
  {
    title: "Lack of Awareness, Even Among Medical Professionals",
    body: "Brain aneurysms are often misdiagnosed in children because it's commonly assumed to be an adult condition. Symptoms like headaches, nausea, or vision problems are frequently mistaken for migraines, sinus infections, or even stress in kids.",
  },
  {
    title: "Lack of Standardized Screening Protocols",
    body: "There's no universal screening guideline for brain aneurysms in children—especially those without a known family history or genetic predisposition. MRI or MRA scans, the tools for detection, are expensive and not routinely performed without symptoms or risk indicators.",
  },
  {
    title: "Insurance and Healthcare System Barriers",
    body: "Preventive screenings for brain aneurysms may not be covered by insurance unless a clear medical need or family history exists. Many families cannot afford elective imaging tests out-of-pocket, even if they suspect something is wrong.",
  },
  {
    title: "Limited Research Funding",
    body: "Pediatric brain aneurysms receive less research attention and funding than other childhood illnesses or more common neurological disorders.",
  },
] as const;

const pillars = [
  {
    title: "Education",
    body: "Bi-annual newsletters, in-service sessions for medical professionals, and community outreach to keep Brain Aneurysms on the radar.",
    icon: "/images/icon-childhand.svg",
  },
  {
    title: "Awareness",
    body: "Events and campaigns, especially during September Brain Aneurysm Awareness Month, to break the silence surrounding this disease.",
    icon: "/images/icon-shirtheart.svg",
  },
  {
    title: "Research",
    body: "Funding critical studies and providing over 1,200 free MRI/MRA screenings to families since 2004, advancing early detection and prevention.",
    icon: "/images/icon-donationhand.svg",
  },
] as const;

function AboutHeroSection() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <Image
        src="/images/about-us-hero-bg.png"
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-brand-navy/95" />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "reveal mx-auto flex max-w-[800px] flex-col items-center py-20 text-center md:py-28",
            revealed && "revealed",
          )}
        >
          <span className={EYEBROW_CLASS}>About Us</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.2] text-brand-blue md:text-5xl lg:text-[68px] lg:leading-[1.27]">
            Turning Loss Into Lifesaving Action
          </h1>
          <p className="mx-auto mt-6 max-w-[750px] text-lg leading-[27px] text-white">
            The Missy Project is a nonprofit 501(c)(3) organization dedicated
            to raising awareness of Brain Aneurysms in children and families
            through education, outreach, and research. Founded in memory of
            12-year-old Missy Magel, The Missy Project carries her legacy
            forward by preventing the preventable. For over 25 years, we&apos;ve
            turned heartbreak into hope, raising awareness, funding
            groundbreaking research, and offering free community screenings
            that save lives.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/donate" className={BUTTON_YELLOW}>
              Save Lives
            </Link>
            <Link href="/learn" className={BUTTON_YELLOW_OUTLINE}>
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OurStorySection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-[400px_1fr] lg:gap-16",
            revealed && "revealed",
          )}
        >
          <div className="relative mx-auto aspect-[400/600] w-full max-w-[400px] shrink-0">
            <Image
              src="/images/about-us-missy-photo.png"
              alt="Missy, in whose memory The Missy Project was founded"
              fill
              sizes="400px"
              className="object-fill"
            />
          </div>

          <div>
            <span className={EYEBROW_CLASS}>Born From Heartbreak</span>
            <h2 className="mt-4 text-[32px] font-bold text-brand-blue md:text-[42.67px]">
              Our Story
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-[18px] leading-[27px] text-brand-navy">
              <p>
                The Missy Project was established by the Magel family and
                friends on November 24, 1999 - what would have been their
                daughter Marisa (Missy) Magel&apos;s 13th birthday. Missy passed
                away suddenly while at summer camp from a disease they never
                knew she had...Brain Aneurysm Disease.
              </p>
              <p>
                In researching the disease that claimed their daughter&apos;s
                life, they were told that Missy&apos;s death was rare. However,
                they discovered that this disease is quite prevalent among
                children and often misdiagnosed as a migraine headache. Early
                detection and screening could save lives... So why is it not
                being done?
              </p>
              <p>
                This heartbreaking story raises serious concerns about
                awareness and medical protocols surrounding Brain Aneurysms in
                children and others..
              </p>
            </div>

            <Link href="/learn" className={cn(BUTTON_YELLOW, "mt-8")}>
              Find Out More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhyItMattersSection() {
  const { ref: introRef, revealed: introRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: chartRef, revealed: chartRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-brand-blue-pale py-16 md:py-24">
      <Container>
        <div
          ref={introRef}
          className={cn(
            "reveal mx-auto max-w-[800px] text-center",
            introRevealed && "revealed",
          )}
        >
          <span className={EYEBROW_CLASS}>The Urgent Need</span>
          <h2 className="mt-4 text-[32px] font-bold text-brand-blue md:text-[42.67px]">
            Why It Matters
          </h2>
          <p className="mt-4 text-lg text-brand-navy">
            Brain Aneurysms claim 32,000 lives every year in the U.S,
            comparable to prostate cancer or AIDS. Yet aneurysm research
            receives just a fraction of the funding.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-2">
          {whyItMatters.map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-6">
              <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-base leading-[1.6] text-brand-navy">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-[800px] text-center text-xl font-bold text-brand-navy">
          The gap is staggering. Together, we can close it.
        </p>

        <div
          ref={chartRef}
          className={cn("reveal mx-auto mt-10 max-w-[1000px]", chartRevealed && "revealed")}
        >
          <p className="mx-auto mb-8 max-w-[800px] text-center text-base leading-[1.6] text-brand-navy">
            The chart below compares the number of annual deaths from breast
            cancer, prostate cancer, and brain aneurysms to the amount of
            yearly funding each receives. It highlights the dramatic funding
            disparity, showing that despite similar death rates, brain
            aneurysm research receives only a fraction of the support given
            to other major health issues.
          </p>

          <Image
            src="/images/about-us-funding-chart.svg"
            alt="Chart comparing annual deaths and research funding for breast cancer, prostate cancer, and brain aneurysms — brain aneurysms receive only $6 million in funding despite 32,000 annual deaths"
            width={1500}
            height={1125}
            className="h-auto w-full"
          />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <Link href="/donate" className={BUTTON_YELLOW}>
              Close the Gap
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-[0.8px] text-brand-navy"
            >
              Get Involved
              <ArrowRightLongIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function OurImpactSection() {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <section className="bg-white pt-16 pb-12 md:pt-24">
        <Container>
          <div
            ref={ref}
            className={cn(
              "reveal grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
              revealed && "revealed",
            )}
          >
            <div>
              <span className={EYEBROW_CLASS}>Our Impact</span>
              <h2 className="mt-4 text-[32px] font-bold text-brand-blue md:text-[42.67px]">
                Looking Forward
              </h2>
              <p className="mt-4 text-lg leading-[1.6] text-brand-navy">
                Our impact is measured not just in numbers, but in lives
                touched. Families at risk have received free screenings.
                Physicians have gained knowledge to recognize aneurysms
                earlier. Researchers have advanced the science of detection.
                And communities across the country have come together to carry
                Missy&apos;s legacy forward.
              </p>
              <Link href="/apply-for-screening" className={cn(BUTTON_YELLOW, "mt-8")}>
                Apply for Free Screening
              </Link>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-3xl">
              <Image
                src="/images/about-us-impact-photo.png"
                alt="A physician comforting a young patient"
                fill
                sizes="420px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <StatsBar />
    </>
  );
}

function PillarsSection() {
  const { ref: introRef, revealed: introRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, revealed: cardsRevealed } = useScrollReveal<HTMLDivElement>();

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
          <Image
            src="/images/icon-flower-pale.png"
            alt=""
            aria-hidden="true"
            width={114}
            height={107}
            className="mx-auto mb-4 h-[107px] w-[114px]"
          />
          <span className={EYEBROW_CLASS}>From Silence to Solutions</span>
          <h2 className="mt-4 text-[32px] font-bold text-brand-blue md:text-[42.67px]">
            The Three Pillars of Change
          </h2>
          <p className="mt-4 text-lg leading-[1.6] text-brand-navy">
            These are more than programs; they are promises. We educate
            families and physicians so no warning sign is ignored. We build
            awareness so that Brain Aneurysms are recognized as the threat
            they are. And we invest in research because early detection is
            the difference between tragedy and survival.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={cn(
            "reveal mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",
            cardsRevealed && "revealed",
          )}
        >
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl bg-brand-blue-pale p-8 text-center">
              <Image
                src={pillar.icon}
                alt=""
                aria-hidden="true"
                width={72}
                height={72}
                className="mx-auto mb-4 h-[72px] w-[72px]"
              />
              <h3 className="text-2xl font-bold text-brand-navy">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-navy">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <WhyItMattersSection />
      <OurImpactSection />
      <PillarsSection />
      <MissionCtaSection icon="/images/icon-compassion2.svg" />
    </>
  );
}
