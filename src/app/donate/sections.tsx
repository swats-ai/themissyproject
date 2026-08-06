"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const yellowButtonClasses =
  "inline-flex items-center justify-center rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95";

const actionCards = [
  {
    title: "Apply for a screening",
    description:
      "The Missy Project is looking for eligible people to participate in our Community Screening Program. If brain aneurysms run in your family, see if you qualify for our no-cost MRI/MRA program.",
    ctaLabel: "Apply Now",
    href: "/apply-for-screening",
    icon: "/images/icon-hospital.svg",
  },
  {
    title: "Attend An Event",
    description:
      "Every year, we hold an annual golf tournament and auction to raise money and spread awareness. Join or sponsor our events or auctions — proceeds fund screenings and research.",
    ctaLabel: "Our Events",
    href: "/event",
    icon: "/images/icon-compassion.svg",
  },
];

/**
 * Donate page hero — mirrors HeroSection's flower-background treatment but
 * centered, with copy about the mission and two external donate CTAs
 * (Square, PayPal/Venmo). Both links open in a new tab; no payment UI is
 * built here, we only ever link out to the real processors.
 */
export function DonateHero() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <Image
        src="/images/flowers-decorative-white.png"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 object-cover"
      />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={cn(
            "reveal mx-auto flex max-w-[700px] flex-col items-center text-center",
            revealed && "revealed",
          )}
        >
          <h1 className="text-4xl font-bold leading-[1.2] text-brand-blue md:text-5xl lg:text-[56px]">
            Donate Now — Fund Early Detection, Save Lives
          </h1>

          <p className="mt-6 text-lg leading-[27px] text-brand-navy">
            The Missy Project is an IRS-recognized 501(c)(3) nonprofit dedicated
            to preventing tragic loss from brain aneurysms. Founded in memory of
            12-year-old Missy Magel, our mission is clear: raise awareness, fund
            research, and provide free screenings so families don&apos;t have to
            face the same heartbreak.
          </p>

          <p className="mt-4 text-lg font-bold text-brand-navy">
            Your gift makes this work possible.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://square.link/u/vmeir8C7"
              target="_blank"
              rel="noopener noreferrer"
              className={yellowButtonClasses}
            >
              Donate With Square
            </a>
            <a
              href="https://www.paypal.com/ncp/payment/U3LKFXDZP9BYU"
              target="_blank"
              rel="noopener noreferrer"
              className={yellowButtonClasses}
            >
              Donate With PayPal Or Venmo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * "Other Ways to Take Action" — eyebrow + heading + copy, then a 2-column
 * grid of light-blue cards (apply for screening / attend an event), each
 * with its own internal CTA link.
 */
export function OtherWaysSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-brand-navy py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal mx-auto flex max-w-3xl flex-col items-center text-center",
            revealed && "revealed",
          )}
        >
          <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-brand-navy">
            Get Creative
          </span>
          <h2 className="mt-4 text-[32px] font-bold text-brand-blue md:text-[42.67px]">
            Other Ways to Take Action
          </h2>
          <p className="mt-4 text-lg leading-[27px] text-white">
            Giving looks different for everyone, and every gift makes a
            difference. Whether you honor a loved one, celebrate a milestone,
            or double your impact through a company match, your support fuels
            screenings, research, and hope for families at risk.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {actionCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-brand-blue-pale p-8">
              <Image
                src={card.icon}
                alt=""
                width={64}
                height={64}
                aria-hidden="true"
                className="mb-4 h-16 w-16"
              />
              <h3 className="text-2xl font-bold text-brand-navy">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-navy">
                {card.description}
              </p>
              <Link href={card.href} className={cn(yellowButtonClasses, "mt-6")}>
                {card.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

const donorLogos = [
  { src: "/images/donors/apple.png", alt: "Apple" },
  { src: "/images/donors/ibm.png", alt: "IBM" },
  { src: "/images/donors/bank-of-america.png", alt: "Bank of America" },
  { src: "/images/donors/dell-foundation.png", alt: "Michael & Susan Dell Foundation" },
  { src: "/images/donors/merrill-lynch.png", alt: "Merrill Lynch" },
];

/**
 * "Our Donors" — lists the real employee-matching-fund corporate sponsors
 * credited on the live site, using their actual downloaded logos.
 */
export function OurDonorsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container className="text-center">
        <h2 className="text-[32px] font-bold text-brand-blue md:text-[42.67px]">
          Our Donors
        </h2>
        <h3 className="mt-2 text-xl font-bold text-brand-blue italic">
          Employee-Matching Fund Donations
        </h3>
        <p className="mt-2 text-lg leading-[27px] text-brand-navy">
          Special thanks to these corporate sponsors who donated on behalf of
          an employee with charitable giving funds:
        </p>

        <div className="mt-12 grid grid-cols-2 items-center gap-x-12 gap-y-10 sm:grid-cols-3">
          {donorLogos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={120}
              className="mx-auto h-auto max-h-16 w-auto object-contain"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
