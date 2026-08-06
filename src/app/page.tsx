import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { VideoSection } from "@/components/VideoSection";
import { ImpactSection } from "@/components/ImpactSection";
import { StorySection } from "@/components/StorySection";
import { MissionCtaSection } from "@/components/MissionCtaSection";
import { ScienceSection } from "@/components/ScienceSection";
import { HowToSaveALifeSection } from "@/components/HowToSaveALifeSection";
import { AneurysmInfoSection } from "@/components/AneurysmInfoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <VideoSection />
      <ImpactSection />
      <StorySection />
      <MissionCtaSection />
      <ScienceSection />
      <HowToSaveALifeSection />
      <AneurysmInfoSection />
    </>
  );
}
