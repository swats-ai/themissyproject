import { DonateHero, OtherWaysSection, OurDonorsSection } from "./sections";

export const metadata = {
  title: "Donate | The Missy Project",
};

export default function DonatePage() {
  return (
    <>
      <DonateHero />
      <OtherWaysSection />
      <OurDonorsSection />
    </>
  );
}
