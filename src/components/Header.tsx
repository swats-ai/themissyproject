"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

const NAV_LINKS = [
  { label: "Mission", href: "/about_us" },
  { label: "What is a brain aneurysm?", href: "/learn" },
  { label: "Programs", href: "/what-we-do" },
  { label: "Events", href: "/event" },
];

const navLinkClasses =
  "text-base font-bold text-brand-blue transition-colors duration-200 hover:text-[#2d6fa1]";

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-[12px] border border-brand-yellow px-5 py-3 text-base font-bold uppercase tracking-[0.8px] transition-[filter] duration-200 hover:brightness-95";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="static w-full bg-white">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-primary-blue.png"
            alt="The Missy Project — Brain Aneurysm Detection"
            width={150}
            height={83}
            priority
            className="h-[60px] w-auto md:h-[83px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} className={navLinkClasses}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/donate"
            className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex items-center justify-center rounded-md p-2 text-brand-navy md:hidden"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out md:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-5 border-t border-[#eef1f2] py-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClasses}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Link
                href="/donate"
                className={cn(buttonBaseClasses, "bg-brand-yellow text-brand-navy")}
              >
                Donate
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}
