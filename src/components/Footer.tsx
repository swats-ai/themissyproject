import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { FacebookSquareIcon } from "@/components/icons";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about_us" },
  { label: "Learn", href: "/learn" },
  { label: "What We Do", href: "/what-we-do" },
];
const FOR_YOU_LINKS = [
  { label: "Volunteer", href: "/learn" },
  { label: "Donate", href: "/donate" },
  { label: "Events", href: "/event" },
];
const LEGAL_LINKS = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

const columnLinkClasses =
  "text-base font-bold text-brand-blue transition-colors duration-200 hover:text-white";

const legalLinkClasses =
  "text-base text-brand-blue underline transition-colors duration-200 hover:text-white";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy">
      <Image
        src="/images/flowers-decorative-navy.png"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 object-cover object-right select-none"
      />

      <Container className="relative z-10 pt-16 pb-10">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/images/logo-primary-blue-72.png"
                alt="The Missy Project — Brain Aneurysm Detection"
                width={360}
                height={200}
                className="h-auto w-[360px] max-w-full"
              />
            </Link>
            <a
              href="http://www.facebook.com/TheMissyProject"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-fit text-brand-blue transition-colors duration-200 hover:text-white"
            >
              <FacebookSquareIcon className="size-7" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-bold text-brand-blue">About Us</h3>
            <nav className="flex flex-col gap-3">
              {ABOUT_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={columnLinkClasses}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-bold text-brand-blue">For You</h3>
            <nav className="flex flex-col gap-3">
              {FOR_YOU_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={columnLinkClasses}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-base text-brand-blue">
            © 2025 TheMissyProject.org | All rights reserved |  Austin, Texas
          </p>
          {LEGAL_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={legalLinkClasses}>
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
