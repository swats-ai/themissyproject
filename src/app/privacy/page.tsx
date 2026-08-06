import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | The Missy Project",
  description:
    "Privacy Policy for The Missy Project LLC website, themissyproject.org.",
};

const SHARED_INFO_ITEMS = [
  "Identifying information - Name",
  "Identifying information - Postal / Shipping address",
  "Identifying information - Phone number",
  "Identifying information - IP address",
  "Identifying information - Email address",
  "Identifying information - Device identifier",
  "Identifying information - Online identifier",
  "Characteristics of protected classifications - Age",
  "Identifying information - Calendar account information",
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="Last updated: Oct 09, 2025 12:00 PM">
      <p>
        We value your privacy very highly. Please read this Privacy Policy carefully before using
        the https://themissyproject.org/ website (the &ldquo;Website&rdquo;) operated by The Missy
        Project LLC, a(n) Nonprofit formed in Indiana, United States (&ldquo;us, we, our&rdquo;) as
        this Privacy Policy contains important information regarding your privacy and how we may
        use the information we collect about you.
      </p>
      <p>
        Your access to or use of the Website is conditional upon your acceptance of and compliance
        with this Privacy Policy. This Privacy Policy applies to everyone, including but not
        limited to visitors, users and others, who wish to access or use the Website.
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by this Privacy Policy. If you
        disagree with any part of this Privacy Policy, you do not have our permission to access or
        use the Website.
      </p>

      <h2>What information we collect and store</h2>
      <p>
        We collect and store any and all information that you enter on this Website. We collect
        and store the following information about you:
      </p>
      <ul>
        {SHARED_INFO_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>With whom we share your personal information</h2>
      <p>We share the following personal information with the following categories of third parties:</p>
      <ul>
        {SHARED_INFO_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Cookies</h2>
      <p>
        A cookie is a small piece of data sent from a website and stored on your device by your
        browser. Cookies are generally used to allow websites to respond to you as an individual,
        to remember your preferences, to test content, and to analyze your interactions with
        websites or with advertisements. This Website does not set cookies.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        This Website is intended for use by a general audience and does not offer services to
        children. Should a child whom we know to be under 18 send personal information to us, we
        will use that information only to respond to that child to inform them that they cannot
        use this Website.
      </p>

      <h2>Third-party websites</h2>
      <p>
        This Website may contain hyperlinks to websites operated by parties other than us. We
        provide such hyperlinks for your reference only. We do not control such websites and are
        not responsible for their contents or the privacy or other practices of such websites. It
        is up to you to read and fully understand their Privacy Policies. Our inclusion of
        hyperlinks to such websites does not imply any endorsement of the material on such
        websites or any association with their operators.
      </p>

      <h2>Do Not Track</h2>
      <p>
        Do Not Track (&ldquo;DNT&rdquo;) is a preference you can set on your browser to inform
        websites that you do not want to be tracked. We do not support DNT. You can either enable
        or disable Do Not Track by visiting the Preferences or Settings page of your browser.
      </p>

      <h2>Questions</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at
        Mary@TheMissyProject.org.
      </p>

      <h2>Changes to Privacy Policy</h2>
      <p>
        We reserve the right to amend this Privacy Policy at any time. We will notify you of any
        changes to this Privacy Policy by posting the updated Privacy Policy to this website.
      </p>
    </LegalPageLayout>
  );
}
