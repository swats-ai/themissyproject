"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { type ReactNode, useState } from "react";

import { Container } from "@/components/container";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-[2px] bg-brand-yellow px-2 py-0.5 text-base font-bold text-[#1C2F3F]">
      {children}
    </span>
  );
}

function ActionButton({
  href,
  variant = "yellow",
  children,
}: {
  href: string;
  variant?: "yellow" | "yellow-outline";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block rounded-xl border px-5 py-3 text-center font-bold uppercase tracking-[0.8px] transition-colors",
        variant === "yellow"
          ? "border-brand-yellow bg-brand-yellow text-brand-navy hover:bg-transparent hover:text-brand-yellow"
          : "border-brand-yellow bg-transparent text-brand-yellow hover:bg-brand-yellow hover:text-brand-navy"
      )}
    >
      {children}
    </Link>
  );
}

function PillItem({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <li
      className={cn(
        "flex items-start gap-3 rounded-xl px-4 py-3 text-sm sm:text-base",
        tone === "dark" ? "bg-white/10 text-white" : "bg-brand-blue-pale/60 text-brand-navy"
      )}
    >
      <Check
        className={cn(
          "mt-0.5 h-5 w-5 flex-shrink-0",
          tone === "dark" ? "text-brand-yellow" : "text-brand-blue"
        )}
      />
      <span>{children}</span>
    </li>
  );
}

function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", revealed && "revealed", className)}
    >
      {children}
    </Tag>
  );
}

const riskFactors = [
  "Family history of brain aneurysms",
  "Smoking (8× higher risk)",
  "High blood pressure",
  "Trauma to the head",
];

const symptoms = [
  "Sudden, intense or extended headaches",
  "Vomiting and nausea",
  "Neck stiffness",
  "Numbness in the face",
  "Vision changes or drooping eyelid",
  "Loss of consciousness or seizures",
];

const treatments = [
  {
    tab: "Clipping",
    title: "Clipping",
    body: "Clipping is also a common surgical treatment for brain aneurysms. Microvascular clipping cuts off the blood flow to the aneurysm. Once the aneurysm is located, the neurosurgeon uses a microscope to clip the aneurysm's neck, stopping the blood supply. The clip remains in the patient to prevent future bleeding.",
    image: "/images/learn-clipping.png",
  },
  {
    tab: "Endovascular Surgery",
    title: "Coiling",
    body: "This minimally invasive option is performed from inside the blood vessels. A thin catheter is threaded up through an artery (often starting in the leg) into the brain. Once in place, tiny platinum coils are released into the aneurysm, filling the sac and prompting blood to clot around them. This clotting seals off the aneurysm from the inside, preventing rupture. Endovascular coiling usually involves shorter hospital stays and quicker recovery compared to open surgery.",
    image: "/images/learn-endovascular.png",
  },
  {
    tab: "Craniotomy",
    title: "Craniotomy",
    body: "In complex or severe cases, doctors may perform a craniotomy, which involves opening the skull to access the affected vessel directly. Depending on the aneurysm's size and location, surgeons may use specialized techniques to repair or reinforce the vessel wall. While it is the most invasive option, a craniotomy can provide direct access and control in situations where clipping or coiling are not possible.",
    image: "/images/learn-craniotomy.png",
  },
] as const;

function TreatmentTabs() {
  const [activeTab, setActiveTab] = useState<(typeof treatments)[number]["tab"]>(
    treatments[0].tab
  );
  const [visible, setVisible] = useState(true);
  const active = treatments.find((t) => t.tab === activeTab) ?? treatments[0];

  function handleSelect(tab: (typeof treatments)[number]["tab"]) {
    if (tab === activeTab) return;
    setVisible(false);
    window.setTimeout(() => {
      setActiveTab(tab);
      setVisible(true);
    }, 150);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <Eyebrow>Diagnosis &amp; Treatment</Eyebrow>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
          How Doctors Detect and Treat Aneurysms
        </h2>
        <p className="mt-4 text-white/90">
          Modern imaging can detect aneurysms before they rupture. Screening may include CT
          scans, MRIs, MRAs, or angiograms. If diagnosed, treatment depends on age, health, and
          aneurysm size.
        </p>

        <div className="mt-8 flex flex-col items-start gap-2">
          {treatments.map((treatment) => {
            const isActive = treatment.tab === activeTab;
            return (
              <button
                key={treatment.tab}
                type="button"
                onClick={() => handleSelect(treatment.tab)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-lg px-5 py-3 text-left font-bold uppercase tracking-[0.8px] transition-colors",
                  isActive ? "bg-brand-blue text-white" : "text-brand-yellow hover:text-white"
                )}
              >
                {treatment.tab}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={active.tab}
        className={cn(
          "rounded-xl bg-white/5 p-8 transition-opacity duration-300",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        <Image
          src={active.image}
          alt={active.title}
          width={600}
          height={300}
          className="mb-4 h-auto w-full max-w-[400px] rounded-lg"
        />
        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">{active.title}</h3>
        <p className="mt-4 text-white/90">{active.body}</p>
      </div>
    </div>
  );
}

function StatItem({
  target,
  suffix,
  caption,
  formatted = false,
}: {
  target: number;
  suffix: string;
  caption: string;
  formatted?: boolean;
}) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-4xl font-extrabold text-brand-navy sm:text-5xl">
        {formatted ? value.toLocaleString() : value}
        {suffix}
      </span>
      <span className="mt-2 max-w-[200px] text-sm text-brand-navy/80 sm:text-base">
        {caption}
      </span>
    </div>
  );
}

export default function LearnPage() {
  return (
    <main>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-brand-navy py-20 sm:py-28">
        <Image
          src="/images/learn-hero-bg.png"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none absolute inset-0 object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-brand-navy/95" />
        <Container className="relative text-center">
          <Eyebrow>Learn</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold text-brand-blue sm:text-5xl">
            The Silent Threat that Deserves Attention
          </h1>
          <p className="mx-auto mt-6 max-w-[750px] text-white">
            Brain aneurysms have no bias or prejudice. They can impact people of all genders,
            ages, ethnicities or social status. In many cases, the warning signs go unnoticed or
            are misdiagnosed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ActionButton href="/apply-for-screening" variant="yellow">
              Apply for a Free Screening
            </ActionButton>
            <ActionButton href="/donate" variant="yellow-outline">
              Donate to Fund Research
            </ActionButton>
          </div>
        </Container>
      </section>

      {/* 2. What is a Brain Aneurysm? */}
      <Reveal as="section" className="bg-white py-16 sm:py-24">
        <Container>
          <Eyebrow>A Silent Threat</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl">
            What is a Brain Aneurysm?
          </h2>
          <p className="mt-4 max-w-[750px] text-brand-navy/80">
            A brain aneurysm is a bulge or ballooning in a blood vessel in the brain. A ruptured
            aneurysm can cause a stroke and requires immediate medical attention.
          </p>
          <div className="mt-8">
            <ActionButton href="#" variant="yellow">
              Find Out More
            </ActionButton>
          </div>
        </Container>
      </Reveal>

      {/* 3. Aneurysms and Stroke */}
      <Reveal as="section" className="bg-brand-blue-pale py-16 sm:py-24">
        <Container>
          <Eyebrow>Aneurysms and Stroke</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl">
            When Aneurysms Rupture, Strokes Follow
          </h2>
          <p className="mt-4 max-w-[850px] text-brand-navy/80">
            A ruptured brain aneurysm is often the trigger for a stroke &mdash; one of the
            deadliest medical emergencies. Strokes happen in two main ways: when blood flow is
            blocked, or when a vessel bursts and floods the brain with blood. Both are
            catastrophic, and both demand immediate care.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-8">
              <Image
                src="/images/learn-ischemic-stroke.png"
                alt="CT scan illustrating an ischemic stroke"
                width={540}
                height={540}
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="text-xl font-extrabold text-brand-navy">Ischemic Stroke</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.8px] text-brand-blue">
                Vessel Blockage
              </p>
              <p className="mt-4 text-brand-navy/80">
                Nearly 9 in 10 strokes are ischemic. They occur when a clot stops blood from
                reaching part of the brain. Without oxygen and nutrients, brain cells begin dying
                within minutes. Fast action is the only defense. Quick recognition and emergency
                treatment are the only ways to limit lasting brain damage.
              </p>
            </div>
            <div className="rounded-xl bg-white p-8">
              <Image
                src="/images/learn-hemorrhagic-stroke.png"
                alt="Illustration of a hemorrhagic stroke in the brain"
                width={540}
                height={540}
                className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
              />
              <h3 className="text-xl font-extrabold text-brand-navy">Hemorrhagic Stroke</h3>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.8px] text-brand-blue">
                Deadly Brain Bleeds
              </p>
              <p className="mt-4 text-brand-navy/80">
                Though less common, hemorrhagic strokes are far more likely to be fatal. They
                strike when a weakened blood vessel bursts, causing uncontrolled bleeding in or
                around the brain. Aneurysms and AVMs (arteriovenous malformations) are structural
                weaknesses that make this type of stroke possible.
              </p>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* 4. Who Is at Risk? */}
      <Reveal as="section" className="bg-white py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Who Is at Risk?
          </h2>
          <p className="mt-4 max-w-[750px] text-brand-navy/80">
            For decades, doctors believed aneurysms mainly affected older adults. Today,
            diagnoses are appearing at much younger ages &mdash; even in children. Family history
            dramatically increases risk, and lifestyle factors can also play a role.
          </p>
          <p className="mt-4 max-w-[750px] text-lg font-bold text-brand-navy">
            1 in 50 people has an unruptured aneurysm &mdash; and most don&apos;t know it.
          </p>
          <div className="mt-6">
            <ActionButton href="/donate" variant="yellow">
              Fund More Research
            </ActionButton>
          </div>
          <h3 className="mt-12 text-xl font-extrabold text-brand-navy">Common Risk Factors:</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {riskFactors.map((factor) => (
              <PillItem key={factor} tone="light">
                {factor}
              </PillItem>
            ))}
          </ul>
        </Container>
      </Reveal>

      {/* 5. Recognizing Symptoms */}
      <Reveal as="section" className="bg-brand-navy py-16 sm:py-24">
        <Container>
          <Eyebrow>Recognizing Symptoms</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-blue sm:text-4xl">
            Warning Signs You Can&apos;t Ignore
          </h2>
          <p className="mt-4 max-w-[850px] text-white">
            Determining a life-threatening emergency in a child or adult shouldn&apos;t be a
            guessing game. If these warning signs apply to you or your child, be certain that
            your primary care professional asks careful questions to determine if your child has
            a headache that could be a symptom of an underlying brain mass like an aneurysm.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((symptom) => (
              <PillItem key={symptom} tone="dark">
                {symptom}
              </PillItem>
            ))}
          </ul>
          <p className="mt-8 max-w-[850px] text-white">
            Most aneurysms show no signs until they rupture. But when they do, the symptoms are
            sudden and severe. Many children and adults first report{" "}
            <span className="font-bold">&ldquo;the worst headache of my life.&rdquo;</span>
          </p>
          <div className="mt-8">
            <ActionButton href="/apply-for-screening" variant="yellow">
              Apply for a Free Screening
            </ActionButton>
          </div>
        </Container>
      </Reveal>

      {/* 6. Diagnosis & Treatment (interactive tabs) */}
      <Reveal as="section" className="bg-brand-navy py-16 sm:py-24">
        <Container>
          <TreatmentTabs />
          <div className="mt-16 max-w-[850px]">
            <h3 className="text-2xl font-extrabold text-white">Why Awareness Matters</h3>
            <p className="mt-4 text-white/90">
              Despite the devastating impact, brain aneurysm disease receives far less research
              funding than other major conditions &mdash; just $6 million annually, compared to
              billions for AIDS and cancer. Without more awareness and investment, too many
              families remain in danger.
            </p>
          </div>
        </Container>
      </Reveal>

      {/* 7. Stats row */}
      <Reveal as="section" className="bg-brand-yellow-pale py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatItem target={50} suffix="%" caption="of brain ruptured aneurysms are fatal" />
            <StatItem target={1200} suffix="+" caption="Free MRI/MRA screenings provided" />
            <StatItem target={25} suffix="yrs" caption="of awareness, education, &research" />
            <StatItem target={32000} suffix="" caption="deaths per year" formatted />
          </div>
        </Container>
      </Reveal>

      {/* 8. Closing CTA */}
      <Reveal as="section" className="bg-brand-blue-pale py-16 sm:py-24">
        <Container className="text-center">
          <Image
            src="/images/icon-together.svg"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className="mx-auto mb-4 h-16 w-16"
          />
          <h2 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">
            So, what can you do?
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 text-brand-navy sm:grid-cols-3">
            <p className="font-bold">Advocate for brain scans</p>
            <p>
              Support organizations like The Missy Project working to promote awareness and
              early detection of Brain Aneurysms in children and others
            </p>
            <p className="font-bold">Know the symptoms</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ActionButton href="/apply-for-screening" variant="yellow">
              Apply for Free Screening
            </ActionButton>
            <ActionButton href="/donate" variant="yellow">
              Donate to Save Lives
            </ActionButton>
          </div>
        </Container>
      </Reveal>
    </main>
  );
}
