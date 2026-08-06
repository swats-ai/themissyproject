"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const entryFeeItems = ["Golf Cart", "Range Balls", "Evening reception and live auction"];

const prizeItems = ["1st, 2nd, 3rd Place Teams", "Beat the Pro", "Longest Drive"];

const scheduleItems = [
  { name: "Registration & Check In", time: "10:00am" },
  { name: "Driving Range", time: "10:00am" },
  { name: "Shotgun Start", time: "11:30am" },
  { name: "Dinner Reception", time: "5:00pm" },
  { name: "Awards Ceremony", time: "6:30pm" },
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
 * "The Details" section — decorative flower + a real tournament photo on the
 * left, entry-fee/prize bullet lists (flower-icon bullets) on the right.
 */
export function EventDetailsSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-brand-blue-pale py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16",
            revealed && "revealed",
          )}
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image
              src="/images/flower-logo-blue.png"
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="mb-6 h-24 w-24"
            />
            <div className="relative aspect-[1050/698] w-full max-w-[440px] overflow-hidden rounded-2xl">
              <Image
                src="/images/event-golf-tournament.jpg"
                alt="Golfers at a past Missy Project tournament"
                fill
                sizes="(min-width: 1024px) 440px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
              The Details
            </span>

            <p className="mt-6 text-2xl font-bold text-brand-navy">
              Entry fee of $250 per player, $1000 per team includes:
            </p>
            <ul className="mt-4 space-y-2">
              {entryFeeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-navy">
                  <FlowerBullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-2xl font-bold text-brand-navy">
              Great prizes and awards to:
            </p>
            <ul className="mt-4 space-y-2">
              {prizeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-navy">
                  <FlowerBullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Full-width "Tournament Schedule" table with alternating row stripes,
 * its own section (not nested inside "The Details").
 */
export function EventScheduleSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn("reveal mx-auto max-w-3xl text-center", revealed && "revealed")}
        >
          <h2 className="text-[32px] font-bold text-brand-blue md:text-[42.67px]">
            Tournament Schedule:
          </h2>

          <div className="mt-8 overflow-hidden rounded-lg text-left">
            {scheduleItems.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  "flex items-center justify-between px-4 py-3 text-brand-navy",
                  i % 2 === 0 ? "bg-brand-blue-pale" : "bg-white",
                )}
              >
                <span className="font-bold">{item.name}</span>
                <span>{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
