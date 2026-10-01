import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AfterHours Vending regarding venue partnerships, machine placement, or business inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's Talk."
          description="Have questions about placement, partnerships, machine operations, or venue eligibility? Reach out to AfterHours Vending."
          image="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=2200&q=88"
        />

        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-card">
              <Mail />

              <p className="section-eyebrow">
                Email
              </p>

              <h2 className="display-font">
                Business Inquiries
              </h2>

              <a href="mailto:afterhoursvendingcompany@gmail.com">
                afterhoursvendingcompany@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <MapPin />

              <p className="section-eyebrow">
                Service Area
              </p>

              <h2 className="display-font">
                Illinois
              </h2>

              <p>
                New venue placements are reviewed
                individually.
              </p>
            </div>
          </div>

          <div className="container contact-cta">
            <h2 className="display-font">
              Want a Machine at Your Venue?
            </h2>

            <Link
              href="/request-a-machine"
              className="primary-button"
            >
              Request a Machine
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .contact-section {
          padding: 110px 0 125px;
          background: #090909;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .contact-card {
          min-height: 320px;
          padding: 40px;
          border: 1px solid rgba(224, 180, 95, 0.17);
          border-radius: 12px;
          background: #0d0d0d;
        }

        .contact-card > svg {
          width: 31px;
          height: 31px;
          margin-bottom: 44px;
          color: var(--gold-light);
          stroke-width: 1.5;
        }

        .contact-card h2 {
          margin: 10px 0 16px;
          font-size: 2.5rem;
          font-weight: 500;
        }

        .contact-card a,
        .contact-card > p:last-child {
          color: #aaa69f;
          line-height: 1.7;
          overflow-wrap: anywhere;
        }

        .contact-card a:hover {
          color: var(--gold-light);
        }

        .contact-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          margin-top: 65px;
          padding-top: 45px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .contact-cta h2 {
          margin: 0;
          font-size: 3rem;
          font-weight: 500;
        }

        @media (max-width: 700px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}