"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full rounded-lg border border-brand-blue-pale px-4 py-2.5 text-brand-navy focus:border-brand-blue focus:outline-none";

const labelClasses = "mb-1.5 block text-sm font-bold text-brand-navy";

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={labelClasses}>
      {children}
      {required && <span className="text-brand-blue"> *</span>}
    </label>
  );
}

export default function ApplyForScreeningPage() {
  const { ref: heroRef, revealed: heroRevealed } = useScrollReveal();
  const { ref: formRef, revealed: formRevealed } = useScrollReveal();

  return (
    <>
      <section className="bg-white pt-16 pb-12 md:pt-20 md:pb-16">
        <Container>
          <div
            ref={heroRef}
            className={cn("reveal", heroRevealed && "revealed")}
          >
            <div className="flex justify-center">
              <Image
                src="/images/logo-primary-blue.png"
                alt="The Missy Project"
                width={240}
                height={80}
                className="h-auto w-[200px] md:w-[240px]"
                priority
              />
            </div>

            <h2 className="mt-8 text-center text-xl font-bold text-brand-blue md:text-2xl">
              The Missy Project
            </h2>
            <h1 className="mt-1 text-center text-3xl font-bold text-brand-blue md:text-[42px]">
              Community Screening Program
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] text-center text-brand-navy">
              The Missy Project Community Screening Program offers free MRA
              screenings as part of our commitment to early detection of
              brain aneurysms. Please ensure you are 16 years or older and
              meet one of the following criteria prior to submission:
            </p>

            <div className="mx-auto mt-8 flex max-w-[700px] flex-col items-center gap-4">
              <div className="w-full rounded-xl bg-brand-blue-pale px-6 py-4 text-center font-bold text-brand-navy">
                You have two family members who have had a brain aneurysm
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.8px] text-brand-blue">
                or
              </span>
              <div className="w-full rounded-xl bg-brand-blue-pale px-6 py-4 text-center font-bold text-brand-navy">
                You have 1 family member who has had a brain aneurysm and had
                hypertension or was a smoker
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 md:pb-28">
        <Container>
          <div
            ref={formRef}
            className={cn(
              "reveal mx-auto max-w-[800px]",
              formRevealed && "revealed",
            )}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex flex-col gap-12"
            >
              <fieldset className="flex flex-col gap-5">
                <legend className="mb-2 text-xl font-bold text-brand-blue">
                  Personal Information
                </legend>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="firstName" required>
                      First Name
                    </FieldLabel>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="lastName" required>
                      Last Name
                    </FieldLabel>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel htmlFor="streetAddress" required>
                    Street address
                  </FieldLabel>
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    required
                    className={inputClasses}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div>
                    <FieldLabel htmlFor="city" required>
                      City
                    </FieldLabel>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="state" required>
                      State/Region
                    </FieldLabel>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="postalCode" required>
                      Postal code
                    </FieldLabel>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="email" required>
                      Email
                    </FieldLabel>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="phone" required>
                      Phone number
                    </FieldLabel>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-5">
                <legend className="mb-2 text-xl font-bold text-brand-blue">
                  Physician Information
                </legend>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="physicianName">
                      Physician Name
                    </FieldLabel>
                    <input
                      id="physicianName"
                      name="physicianName"
                      type="text"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="physicianPhone">
                      Physician phone number
                    </FieldLabel>
                    <input
                      id="physicianPhone"
                      name="physicianPhone"
                      type="tel"
                      className={inputClasses}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-5">
                <legend className="mb-2 text-xl font-bold text-brand-blue">
                  Please confirm you meet 2 of the following criteria:
                </legend>

                <label
                  htmlFor="eligibilityAge"
                  className="flex items-start gap-3 text-brand-navy"
                >
                  <input
                    id="eligibilityAge"
                    name="eligibilityAge"
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 rounded border-brand-blue-pale text-brand-blue focus:outline-none"
                  />
                  <span>I am 16 years of age or older</span>
                </label>

                <label
                  htmlFor="eligibilityTwoFamily"
                  className="flex items-start gap-3 text-brand-navy"
                >
                  <input
                    id="eligibilityTwoFamily"
                    name="eligibilityTwoFamily"
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 rounded border-brand-blue-pale text-brand-blue focus:outline-none"
                  />
                  <span>
                    I have 2 family members with a brain aneurysm: parent,
                    sibling, grandparent, aunt or uncle
                  </span>
                </label>

                <label
                  htmlFor="eligibilityOneFamily"
                  className="flex items-start gap-3 text-brand-navy"
                >
                  <input
                    id="eligibilityOneFamily"
                    name="eligibilityOneFamily"
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 rounded border-brand-blue-pale text-brand-blue focus:outline-none"
                  />
                  <span>
                    And/or I have one family member with a brain aneurysm and
                    hypertension or is a smoker
                  </span>
                </label>
              </fieldset>

              <button
                type="submit"
                className="w-full rounded-xl bg-brand-yellow px-5 py-3 text-center font-bold uppercase tracking-[0.8px] text-brand-navy transition-colors duration-200 ease-out hover:brightness-95 sm:w-auto sm:self-center"
              >
                Submit Application
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
