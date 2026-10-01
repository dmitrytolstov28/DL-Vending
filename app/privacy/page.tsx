import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Read the privacy policy and website terms for AfterHours Vending.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <main>
        <section className="legal-hero">
          <Navbar />

          <div className="container">
            <p className="section-eyebrow">
              Legal
            </p>

            <h1 className="display-font">
              Privacy Policy & Terms
            </h1>

            <p>
              Last updated: September 2026
            </p>
          </div>
        </section>

        <section className="legal-section">
          <div className="container legal-content">
            <LegalSection title="Privacy">
              AfterHours Vending may collect
              information that you voluntarily provide
              through our website, including your name,
              venue name, email address, phone number,
              city, venue type, and messages submitted
              through our forms.
            </LegalSection>

            <LegalSection title="How We Use Information">
              Information submitted through this
              website may be used to respond to
              inquiries, evaluate potential venue
              partnerships, communicate about vending
              services, and improve our business
              operations.
            </LegalSection>

            <LegalSection title="Data Sharing">
              We do not sell personal information
              submitted through our website.
              Information may be shared with service
              providers when reasonably necessary to
              operate the website or conduct business.
            </LegalSection>

            <LegalSection title="Website Purpose">
              This website is intended to provide
              information about AfterHours Vending and
              allow qualifying venues to inquire about
              machine placement. This website does not
              directly sell nicotine or tobacco
              products to consumers.
            </LegalSection>

            <LegalSection title="21+ Products">
              Products offered through AfterHours
              vending machines are intended only for
              legally eligible adult customers and
              qualifying venues. Product availability
              and placement are subject to applicable
              law.
            </LegalSection>

            <LegalSection title="No Guarantee of Placement">
              Submission of a venue inquiry does not
              guarantee that a vending machine will be
              placed at the venue. AfterHours Vending
              may review operational, regulatory,
              business, and location-specific factors
              before entering into any agreement.
            </LegalSection>

            <LegalSection title="Changes">
              These terms and privacy practices may be
              updated as the business, website, and
              applicable requirements change.
            </LegalSection>

            <LegalSection title="Contact">
              Questions regarding this website may be
              sent to
              {" "}
              afterhoursvendingcompany@gmail.com.
            </LegalSection>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .legal-hero {
          min-height: 450px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 80px;
          background: linear-gradient(90deg, #050505, #111);
        }

        .legal-hero h1 {
          margin: 15px 0 8px;
          font-size: clamp(3.5rem, 6vw, 6rem);
          font-weight: 500;
        }

        .legal-hero > .container > p:last-child {
          color: #77736e;
        }

        .legal-section {
          padding: 90px 0 120px;
          background: #090909;
        }

        .legal-content {
          max-width: 850px;
        }

        .legal-block {
          padding: 32px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .legal-block h2 {
          margin: 0 0 14px;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 500;
          color: #eeeae3;
        }

        .legal-block p {
          margin: 0;
          color: #aaa69f;
          line-height: 1.85;
        }
      `}</style>
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legal-block">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}