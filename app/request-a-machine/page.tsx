import type { Metadata } from "next";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import RequestMachineForm from "@/components/RequestMachineForm";

export const metadata: Metadata = {
  title: "Request a Machine",
  description:
    "Request an AfterHours vending machine for your qualifying bar, nightclub, lounge, or entertainment venue.",
};

export default function RequestMachinePage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Request a Machine"
          title="Bring AfterHours to Your Venue."
          description="Complete the form below and tell us about your bar, nightclub, lounge, or entertainment venue."
          image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=88"
        />

        <section className="request-section">
          <div className="container request-grid">
            <div className="request-copy">
              <p className="section-eyebrow">
                Venue Inquiry
              </p>

              <h2 className="display-font">
                Tell Us About
                <br />
                Your Location
              </h2>

              <p>
                After submission, we can review the
                location, operating model, potential
                machine placement, and next steps.
              </p>

              <div className="mini-info">
                <strong>
                  afterhoursvendingcompany@gmail.com
                </strong>

                <span>
                  Illinois-based operations
                </span>
              </div>
            </div>

            <RequestMachineForm />
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .request-section {
          padding: 110px 0 125px;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(224, 180, 95, 0.08),
              transparent 28%
            ),
            #090909;
        }

        .request-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 70px;
          align-items: start;
        }

        .request-copy {
          position: sticky;
          top: 40px;
        }

        .request-copy h2 {
          margin: 12px 0 20px;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 500;
          line-height: 0.95;
        }

        .request-copy > p:not(.section-eyebrow) {
          color: #aaa69f;
          line-height: 1.8;
        }

        .mini-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 35px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mini-info strong {
          color: var(--gold-light);
          font-size: 0.82rem;
          overflow-wrap: anywhere;
        }

        .mini-info span {
          color: #77736e;
          font-size: 0.78rem;
        }

        @media (max-width: 900px) {
          .request-grid {
            grid-template-columns: 1fr;
          }

          .request-copy {
            position: static;
          }
        }
      `}</style>
    </>
  );
}