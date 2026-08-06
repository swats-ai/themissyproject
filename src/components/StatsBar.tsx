"use client";

import { Container } from "@/components/container";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 50, suffix: "%", caption: "of brain ruptured aneurysms are fatal" },
  { value: 1200, suffix: "+", caption: "Free MRI/MRA screenings provided" },
  { value: 25, suffix: "yrs", caption: "of awareness, education, &research" },
  { value: 18, suffix: "mins", caption: "between ruptures in the U.S." },
] as const;

function StatItem({
  value,
  suffix,
  caption,
}: {
  value: number;
  suffix: string;
  caption: string;
}) {
  const { ref, value: count } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <div className="text-[36px] leading-none font-bold text-brand-blue md:text-[48px]">
        {count}
        <span className="text-[24px] font-medium md:text-[32px]">{suffix}</span>
      </div>
      <p className="mt-2 text-base font-normal text-brand-navy">{caption}</p>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="w-full bg-brand-yellow-pale py-12">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat) => (
            <StatItem
              key={stat.caption}
              value={stat.value}
              suffix={stat.suffix}
              caption={stat.caption}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
