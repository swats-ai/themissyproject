import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer | The Missy Project",
  description: "Disclaimer for The Missy Project LLC website, themissyproject.org.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" lastUpdated="Last updated: Oct 09, 2025 12:03 PM">
      <p>
        Please read this Disclaimer carefully before using the https://themissyproject.org/
        website (the &ldquo;Website&rdquo;) operated by The Missy Project LLC, a(n) Nonprofit
        formed in Indiana, United States (&ldquo;us, we, our&rdquo;) as this Disclaimer contains
        important information regarding limitations of our liability. Your access to and use of
        the Website is conditional upon your acceptance of and compliance with this Disclaimer.
        This Disclaimer applies to everyone, including but not limited to visitors, users, and
        others, who wish to access or use the Website.
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by this Disclaimer. If you
        disagree with any part of this Disclaimer, then you do not have our permission to access
        or use the Website.
      </p>

      <h2>Testimonials, reviews and endorsements disclaimer</h2>
      <p>
        Any testimonials, reviews and endorsements displayed on this Website are received via
        text, audio or video submissions. They are real-life, individual experiences of those who
        have used our products or services. The results obtained by these individuals are not
        necessarily typical to what other consumers may achieve or experience. The testimonials,
        reviews and endorsements are displayed verbatim except for correction of grammatical and
        spelling errors and may have been shortened or edited for clarity. We are not responsible
        for the testimonials, reviews and endorsements displayed on this Website and do not
        necessarily share the opinions, views or commentary of such testimonials, reviews and
        endorsements.
      </p>
      <p>
        The persons providing such testimonials, reviews and endorsements have not been
        compensated for doing so. The individuals providing the testimonials, reviews and
        endorsements displayed on this Website are not employed by us.
      </p>

      <h2>Health information disclaimer</h2>
      <p>
        This Website displays information about health. This information is presented for
        educational and entertainment purposes only and does not substitute the advice of a
        healthcare professional. This information is not to be used for any diagnostic, treatment,
        prevention or curative purposes. The provision of this information does not establish nor
        create any healthcare professional-patient relationship or any physician-patient
        relationship.
      </p>
      <p>
        You should always consult with a healthcare professional prior to implementing any changes
        to your health routine to ensure that doing so is safe for you. You agree that you assume
        all responsibility when choosing to act on any health information provided on this
        Website.
      </p>

      <h2>No legal advice</h2>
      <p>
        The information displayed on this Website is provided for informational and educational
        purposes and is not intended as legal advice. You should always consult with a lawyer for
        help with your specific legal needs and issues.
      </p>

      <h2>Changes</h2>
      <p>
        We reserve the right to make changes to this Disclaimer at any time without any prior
        notice to you.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this Disclaimer, please contact us at
        Mary@TheMissyProject.org.
      </p>
    </LegalPageLayout>
  );
}
