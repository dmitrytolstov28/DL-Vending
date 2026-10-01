import type { Metadata } from "next";
import {
  BadgeDollarSign,
  Box,
  MapPin,
  Settings,
} from "lucide-react";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how AfterHours Vending handles venue review, installation, stocking, maintenance, and revenue sharing.",
};

const steps = [
  {
    number: "01",
    icon: <MapPin />,
    title: "Venue Review",
    text: "We learn about the location and determine whether the venue is a suitable candidate for placement.",
  },
  {
    number: "02",
    icon: <Settings />,
    title: "Machine Setup",
    text: "We coordinate placement, setup, and payment configuration with venue management.",
  },
  {
    number: "03",
    icon: <Box />,
    title: "Stock & Service",
    text: "AfterHours monitors inventory, restocks products, and handles machine maintenance.",
  },
  {
    number: "04",
    icon: <BadgeDollarSign />,
    title: "Revenue Share",
    text: "Qualifying machine sales are tracked and the venue receives its agreed share.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="How It Works"
          title="Simple for the Venue. Managed by Us."
          description="Our process is designed to reduce the workload for venue owners while keeping machine operation, inventory, and service under AfterHours management."
          image="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=2200&q=88"
        />

        <section className="process">
          <div className="container">
            <div className="process-grid">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="process-card"
                >
                  <div className="card-top">
                    <span>
                      {step.number}
                    </span>

                    <div>
                      {step.icon}
                    </div>
                  </div>

                  <h2 className="display-font">
                    {step.title}
                  </h2>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .process {
          padding: 115px 0 125px;
          background: #090909;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .process-card {
          min-height: 330px;
          padding: 38px;
          border: 1px solid rgba(224, 180, 95, 0.17);
          border-radius: 12px;
          background: linear-gradient(145deg, #111, #090909);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
        }

        .card-top span {
          color: var(--gold-light);
          font-family: var(--font-display);
          font-size: 1.3rem;
        }

        .card-top div {
          color: var(--gold-light);
        }

        .card-top svg {
          width: 29px;
          height: 29px;
          stroke-width: 1.5;
        }

        .process-card h2 {
          margin: 0 0 13px;
          font-size: 2.5rem;
          font-weight: 500;
        }

        .process-card p {
          max-width: 520px;
          color: #99958e;
          line-height: 1.75;
        }

        @media (max-width: 700px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}