"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/container";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * Shared Tailwind classes for text form fields (input + textarea), matching
 * the site's brand-blue-pale bordered field style.
 */
const fieldClasses =
  "w-full rounded-lg border border-brand-blue-pale px-4 py-2.5 text-brand-navy focus:border-brand-blue focus:outline-none";

const labelClasses = "mb-1.5 block text-sm font-bold text-brand-navy";

const submitButtonClasses =
  "rounded-xl bg-brand-yellow px-5 py-3 font-bold tracking-[0.8px] text-brand-navy uppercase transition-opacity hover:opacity-90";

const AREAS_OF_INTEREST = ["Events", "General Admin", "Social Media", "Other"];

const DIRECTORY_LINKS = [
  { label: "Contact Us", href: "#contact" },
  { label: "Apply for free screening", href: "/apply-for-screening" },
  { label: "Donate to save lives", href: "/donate" },
  { label: "Register for an event", href: "/event" },
];

/**
 * Top section: logo + contact info on the left, a "Directory" quick-links
 * card on the right. Matches the live site's 2-column layout (not a
 * horizontal info bar).
 */
function ContactDirectorySection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <Image
        src="/images/flowers-decorative-white.png"
        alt=""
        aria-hidden="true"
        width={900}
        height={1000}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-auto max-w-none object-contain opacity-60"
      />
      <Container className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <Image
            src="/images/logo-primary-blue.png"
            alt="The Missy Project — Brain Aneurysm Detection"
            width={300}
            height={166}
            className="h-auto w-[260px]"
          />
          <div className="mt-8 space-y-6">
            <div>
              <p className="font-bold text-brand-navy">Phone:</p>
              <a href="tel:+15122579680" className="text-brand-blue">
                (512) 257 9680
              </a>
            </div>
            <div>
              <p className="font-bold text-brand-navy">Email:</p>
              <a href="mailto:themissyproject@gmail.com" className="text-brand-blue">
                themissyproject@gmail.com
              </a>
            </div>
            <div>
              <p className="font-bold text-brand-navy">Address:</p>
              <p className="text-brand-blue">
                The Missy Project
                <br />
                11303 Dead Oak Lane
                <br />
                Austin, TX 78759
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-xl bg-brand-navy px-6 py-4 text-center font-bold text-white">
            Directory
          </div>
          {DIRECTORY_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-xl bg-brand-blue-pale px-6 py-4 text-center font-bold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * General contact form — dark navy section, text+flower on the left, the
 * form itself in a light-blue card on the right. No backend in this clone,
 * submission is a no-op.
 */
function ContactFormSection() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="contact" className="bg-brand-navy py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-start gap-12 md:grid-cols-2",
            revealed && "revealed",
          )}
        >
          <div>
            <h2 className="text-brand-blue">Contact</h2>
            <p className="mt-6 max-w-md text-[18px] leading-[27px] text-white">
              The Missy Project welcomes any questions or comments you might
              have. For medical questions, we encourage you to review our
              information and then visit with your doctor.
            </p>
            <Image
              src="/images/flower-logo-blue.png"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="mt-10 h-20 w-20 opacity-60"
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              /* no backend in this clone */
            }}
            className="space-y-6 rounded-2xl bg-brand-blue-pale p-8"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="contact-first-name" className={labelClasses}>
                  First Name*
                </label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
              <div>
                <label htmlFor="contact-last-name" className={labelClasses}>
                  Last Name*
                </label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-phone" className={labelClasses}>
                Phone number*
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                required
                className={cn(fieldClasses, "bg-white")}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClasses}>
                Email*
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className={cn(fieldClasses, "bg-white")}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClasses}>
                Message*
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className={cn(fieldClasses, "resize-y bg-white")}
              />
            </div>

            <button type="submit" className={submitButtonClasses}>
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

/**
 * Volunteer sign-up form — white background, the form (dark navy card) on
 * the left, text+flower on the right (mirrored from the Contact section
 * above). No backend in this clone, submission is a no-op.
 */
function VolunteerFormSection() {
  const { ref, revealed } = useScrollReveal();
  const [areaOfInterest, setAreaOfInterest] = useState("");

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div
          ref={ref}
          className={cn(
            "reveal grid grid-cols-1 items-start gap-12 md:grid-cols-2",
            revealed && "revealed",
          )}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              /* no backend in this clone */
            }}
            className="space-y-6 rounded-2xl bg-brand-navy p-8"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="volunteer-first-name" className={labelClasses}>
                  First Name*
                </label>
                <input
                  id="volunteer-first-name"
                  name="firstName"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
              <div>
                <label htmlFor="volunteer-last-name" className={labelClasses}>
                  Last Name*
                </label>
                <input
                  id="volunteer-last-name"
                  name="lastName"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="volunteer-email" className={labelClasses}>
                  Email*
                </label>
                <input
                  id="volunteer-email"
                  name="email"
                  type="email"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
              <div>
                <label htmlFor="volunteer-phone" className={labelClasses}>
                  Phone number*
                </label>
                <input
                  id="volunteer-phone"
                  name="phone"
                  type="tel"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="volunteer-street" className={labelClasses}>
                Street address*
              </label>
              <input
                id="volunteer-street"
                name="street"
                type="text"
                required
                className={cn(fieldClasses, "bg-white")}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="volunteer-city" className={labelClasses}>
                  City*
                </label>
                <input
                  id="volunteer-city"
                  name="city"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
              <div>
                <label htmlFor="volunteer-state" className={labelClasses}>
                  State/Region*
                </label>
                <input
                  id="volunteer-state"
                  name="state"
                  type="text"
                  required
                  className={cn(fieldClasses, "bg-white")}
                />
              </div>
            </div>

            <div>
              <label htmlFor="volunteer-interest" className={labelClasses}>
                Area of Interest*
              </label>
              <select
                id="volunteer-interest"
                name="areaOfInterest"
                required
                value={areaOfInterest}
                onChange={(e) => setAreaOfInterest(e.target.value)}
                className={cn(fieldClasses, "bg-white")}
              >
                <option value="" disabled>
                  Please Select
                </option>
                {AREAS_OF_INTEREST.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="volunteer-background" className={labelClasses}>
                Tell us a little bit about your background*
              </label>
              <textarea
                id="volunteer-background"
                name="background"
                required
                rows={5}
                className={cn(fieldClasses, "resize-y bg-white")}
              />
            </div>

            <button type="submit" className={submitButtonClasses}>
              Apply Now
            </button>
          </form>

          <div>
            <h2 className="text-brand-blue">Volunteer</h2>
            <p className="mt-6 max-w-md text-[18px] leading-[27px] text-brand-navy">
              Want to do a lot of good with a little of your time? There are
              multiple ways you can join the fight against Brain Aneurysm
              Disease. Start by signing up as a volunteer and tell us a bit
              about yourself!
            </p>
            <Image
              src="/images/flower-logo-blue.png"
              alt=""
              aria-hidden="true"
              width={80}
              height={80}
              className="mt-10 h-20 w-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactDirectorySection />
      <ContactFormSection />
      <VolunteerFormSection />
    </>
  );
}
