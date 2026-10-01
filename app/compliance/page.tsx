import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Compliance & Age Restrictions",
  description:
    "Learn about AfterHours Vending's focus on qualifying 21+ venues, licensing, responsible placement, and compliance review.",
};

export default function CompliancePage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Compliance & Age Restrictions"
          title="Responsible Placement Comes First."
          description="AfterHours Vending is being built specifically around regulated adult-product vending. Venue eligibility, licensing, product sourcing, and age restrictions are reviewed before launch."
          image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2200&q=88"
        />

        <section className="compliance-section">
          <div className="container">
            <div className="compliance-grid">
              <Compliance
                icon={<ShieldCheck />}
                title="21+ Venue Focus"
                text="Our placement strategy focuses on qualifying venues that meet applicable adult-only access requirements."
              />

              <Compliance
                icon={<FileCheck2 />}
                title="Licensing Review"
                text="State and local licensing requirements are reviewed before machines are placed into operation."
              />

              <Compliance
                icon={<Building2 />}
                title="Location Review"
                text="Each venue is evaluated independently because city and local requirements can differ."
              />

              <Compliance
                icon={<CheckCircle2 />}
                title="Product Review"
                text="Inventory is reviewed for sourcing, tax, and regulatory requirements before sale."
              />
            </div>

            <div className="disclaimer">
              <p className="section-eyebrow">
                Compliance Note
              </p>

              <h2 className="display-font">
                Rules Can Change
              </h2>

              <p>
                Tobacco, nicotine, vending, taxation,
                and licensing rules may change over
                time and can vary by jurisdiction.
                AfterHours Vending reviews
                requirements before entering new
                markets or locations.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .compliance-section {
          padding: 115px 0 125px;

          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(224, 180, 95, 0.07),
              transparent 30%
            ),
            #090909;
        }

        .compliance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .compliance-card {
          padding: 36px;
          border: 1px solid rgba(224, 180, 95, 0.17);
          border-radius: 12px;
          background: #0d0d0d;
        }

        .compliance-card svg {
          width: 31px;
          height: 31px;
          margin-bottom: 35px;
          color: var(--gold-light);
          stroke-width: 1.55;
        }

        .compliance-card h3 {
          margin: 0 0 12px;
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 600;
        }

        .compliance-card p {
          color: #99958e;
          line-height: 1.75;
        }

        .disclaimer {
          max-width: 850px;
          margin-top: 70px;
          padding: 45px;
          border-left: 2px solid var(--gold);
          background: #0c0c0c;
        }

        .disclaimer h2 {
          margin: 11px 0 15px;
          font-size: 3rem;
          font-weight: 500;
        }

        .disclaimer > p:last-child {
          color: #aaa69f;
          line-height: 1.8;
        }

        @media (max-width: 700px) {
          .compliance-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function Compliance({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="compliance-card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}