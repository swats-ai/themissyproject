"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const yellowButtonClasses =
  "inline-flex items-center justify-center rounded-xl border border-brand-yellow bg-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95";

/**
 * The three real donation processors, presented as one cohesive "choose how
 * you'd like to give" panel instead of three scattered buttons. Each links
 * out to the live checkout the client already uses; no payment UI is built
 * here. Order mirrors the live site: card → Square → PayPal/Venmo.
 */
const donationMethods = [
  {
    label: "Credit or Debit Card",
    description: "Secure one-time card payment",
    href: "https://payments-na2.hubspot.com/payments/x7Dv7hgdtK9x",
  },
  {
    label: "Square",
    description: "Checkout powered by Square",
    href: "https://square.link/u/vmeir8C7",
  },
  {
    label: "PayPal or Venmo",
    description: "Pay with your PayPal or Venmo balance",
    href: "https://www.paypal.com/ncp/payment/U3LKFXDZP9BYU",
  },
];

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
 * centered, with copy about the mission and a single unified donation panel
 * that groups all three processors (Credit/Debit Card, Square, PayPal/Venmo)
 * into one cohesive "choose how to give" view. All links open in a new tab;
 * no payment UI is built here, we only ever link out to the real processors.
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

          <div className="mt-8 w-full max-w-md">
            <div className="rounded-2xl border border-brand-blue/15 bg-brand-yellow px-6 py-4 text-center">
              <p className="text-lg font-bold uppercase tracking-[0.8px] text-brand-navy">
                Donate Now
              </p>
              <p className="mt-1 text-sm text-brand-navy/80">
                Choose your preferred way to give
              </p>
            </div>

            <div className="divide-y divide-brand-blue/10 overflow-hidden rounded-b-2xl border border-t-0 border-brand-blue/15 bg-white text-left shadow-sm">
              {donationMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 px-6 py-4 transition-colors duration-200 ease-out hover:bg-brand-blue-pale/40 focus-visible:bg-brand-blue-pale/40 focus:outline-none"
                >
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-brand-navy">
                      {method.label}
                    </span>
                    <span className="mt-0.5 block text-sm text-brand-navy/70">
                      {method.description}
                    </span>
                  </span>
                  <ChevronRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>

            <p className="mt-3 text-sm text-brand-navy/70">
              You&apos;ll be securely redirected to complete your gift.
            </p>
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
