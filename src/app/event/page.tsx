import { EventHeroSection } from "@/components/EventHeroSection";
import { EventDetailsSection, EventScheduleSection } from "@/components/EventDetailsSection";
import { EventAlternateCtaSection } from "@/components/EventAlternateCtaSection";

export const metadata = {
  title: "Events | The Missy Project",
};

export default function EventPage() {
  return (
    <>
      <EventHeroSection />
      <EventDetailsSection />
      <EventScheduleSection />
      <EventAlternateCtaSection />
    </>
  );
}
