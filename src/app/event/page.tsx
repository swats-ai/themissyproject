import { EventHeroSection } from "@/components/EventHeroSection";
import { EventDetailsSection, EventScheduleSection } from "@/components/EventDetailsSection";
import { EventCommunitySection } from "@/components/EventCommunitySection";
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
      <EventCommunitySection />
      <EventAlternateCtaSection />
    </>
  );
}
