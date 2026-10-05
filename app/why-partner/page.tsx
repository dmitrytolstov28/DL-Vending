import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Gauge,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About | DL Vending",
  description:
    "Learn about DL Vending and our fully managed vending solutions for qualifying 21+ nightlife venues.",
};

const values = [
  {
    icon: Building2,
    title: "Nightlife Focused",
    text: "Built specifically for bars, lounges, clubs, and qualifying adult venues.",
  },
  {
    icon: Gauge,
    title: "Fully Managed",
    text: "We handle placement, stocking, servicing, and the day-to-day operation.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Placement",
    text: "We focus on qualifying locations and review applicable placement requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Built to Grow",
    text: "We start with high-demand products and expand the product mix as the business grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main>
        <section className="about-hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                About DL Vending
              </p>

              <h1 className="display-font">
                Built for the
                <br />
                <span>nightlife industry.</span>
              </h1>

              <p className="hero-description">
                DL Vending provides fully managed vending
                solutions for qualifying 21+ nightlife venues,
                giving guests convenient access to useful
                products while creating another opportunity
                for venue owners.
              </p>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="container mission-grid">
            <div>
              <p className="eyebrow">
                Our Mission
              </p>

              <h2 className="display-font">
                Make vending feel
                <br />
                <span>like part of the venue.</span>
              </h2>
            </div>

            <div className="mission-copy">
              <p>
                We believe vending in nightlife should feel
                modern, discreet, and useful — not like an
                afterthought.
              </p>

              <p>
                Our goal is to give venue owners a simple,
                managed solution that adds convenience for
                guests without creating extra work for staff.
              </p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <div className="values-heading">
              <div>
                <p className="eyebrow">
                  What DL Vending Is Built Around
                </p>

                <h2 className="display-font">
                  Simple principles.
                  <br />
                  Real value.
                </h2>
              </div>

              <p>
                We keep the business focused on what matters:
                useful products, reliable service, strong
                venue relationships, and responsible placement.
              </p>
            </div>

            <div className="values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="value-card"
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.5}
                    />

                    <h3>{value.title}</h3>

                    <p>{value.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="direction-section">
          <div className="container direction-grid">
            <div className="direction-copy">
              <p className="eyebrow">
                Where We&apos;re Going
              </p>

              <h2 className="display-font">
                More products.
                <br />
                More venues.
                <br />
                <span>A better night out.</span>
              </h2>

              <p>
                DL Vending is starting with nicotine products
                and plans to expand into useful nightlife
                essentials such as chargers, gum, mints, and
                other high-demand convenience items.
              </p>

              <p>
                As we grow, the goal is to build strong
                relationships with venues and create a better
                experience for guests after dark.
              </p>
            </div>

            <div className="direction-panel">
              <div className="direction-stat">
                <span>01</span>
                <h3>Venue-first</h3>
                <p>
                  We design the service around what works for
                  the location and its guests.
                </p>
              </div>

              <div className="direction-stat">
                <span>02</span>
                <h3>Managed service</h3>
                <p>
                  Stocking, maintenance, monitoring, and support
                  stay on our side.
                </p>
              </div>

              <div className="direction-stat">
                <span>03</span>
                <h3>Expanding selection</h3>
                <p>
                  The product mix can grow as customer demand
                  and the business evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="container final-inner">
            <div>
              <p className="eyebrow">
                Learn More
              </p>

              <h2 className="display-font">
                Interested in working
                <br />
                <span>with DL Vending?</span>
              </h2>

              <p>
                Explore our venue partnership page or reach
                out directly if you have questions.
              </p>
            </div>

            <div className="final-actions">
              <Link
                href="/for-bar-owners"
                className="primary-button"
              >
                For Venues
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="secondary-button"
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .eyebrow {
          margin: 0;
          color: var(--gold-light);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .about-hero {
          position: relative;
          min-height: 720px;

          display: flex;
          align-items: center;

          background:
            url("/images/about-hero.png");

          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 5, 10, 0.96) 0%,
              rgba(3, 5, 10, 0.8) 36%,
              rgba(3, 5, 10, 0.22) 68%,
              rgba(3, 5, 10, 0.16) 100%
            ),
            linear-gradient(
              to top,
              rgba(3, 5, 10, 0.58),
              transparent 46%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;

          padding-top: 140px;
          padding-bottom: 90px;
        }

        .hero-copy {
          max-width: 700px;
        }

        .hero-copy h1 {
          margin: 16px 0 22px;

          color: #f3eee5;

          font-size: clamp(
            4.4rem,
            6.8vw,
            7rem
          );

          font-weight: 500;
          line-height: 0.89;
          letter-spacing: -0.045em;
        }

        .hero-copy h1 span {
          color: var(--gold-light);
        }

        .hero-description {
          max-width: 590px;

          margin: 0;

          color: #d0cbc3;

          font-size: 0.98rem;
          line-height: 1.78;
        }

        .mission-section {
          padding: 105px 0;

          background: #060606;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .mission-grid {
          display: grid;

          grid-template-columns:
            1fr
            0.75fr;

          gap: 90px;

          align-items: start;
        }

        .mission-grid h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            5vw,
            5rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .mission-grid h2 span {
          color: var(--gold-light);
        }

        .mission-copy {
          padding-top: 24px;
        }

        .mission-copy p {
          margin: 0 0 18px;

          color: #97928a;

          font-size: 0.92rem;
          line-height: 1.82;
        }

        .values-section {
          padding: 95px 0 105px;

          background:
            linear-gradient(
              180deg,
              #080808,
              #050505
            );

          border-top: 1px solid
            rgba(255, 255, 255, 0.06);
        }

        .values-heading {
          display: grid;

          grid-template-columns:
            1fr
            0.6fr;

          gap: 80px;

          align-items: end;

          margin-bottom: 52px;
        }

        .values-heading h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .values-heading > p {
          margin: 0;

          color: #959088;

          font-size: 0.88rem;
          line-height: 1.78;
        }

        .values-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);

          border-top: 1px solid
            rgba(255, 255, 255, 0.08);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .value-card {
          min-height: 245px;

          padding: 38px 30px;

          border-right: 1px solid
            rgba(255, 255, 255, 0.08);

          text-align: center;
        }

        .value-card:last-child {
          border-right: 0;
        }

        .value-card svg {
          margin-bottom: 24px;

          color: var(--gold-light);
        }

        .value-card h3 {
          margin: 0 0 12px;

          color: #f0ebe2;

          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .value-card p {
          max-width: 230px;

          margin: 0 auto;

          color: #8e8981;

          font-size: 0.8rem;
          line-height: 1.72;
        }

        .direction-section {
          padding: 105px 0;

          background:
            radial-gradient(
              circle at 78% 45%,
              rgba(39, 83, 135, 0.12),
              transparent 42%
            ),
            #06070a;

          border-top: 1px solid
            rgba(224, 180, 95, 0.1);
        }

        .direction-grid {
          display: grid;

          grid-template-columns:
            0.95fr
            1.05fr;

          gap: 90px;

          align-items: start;
        }

        .direction-copy h2 {
          margin: 14px 0 22px;

          font-size: clamp(
            3rem,
            5vw,
            5rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .direction-copy h2 span {
          color: var(--gold-light);
        }

        .direction-copy > p:not(
          .eyebrow
        ) {
          max-width: 520px;

          margin: 0 0 17px;

          color: #969198;

          font-size: 0.9rem;
          line-height: 1.8;
        }

        .direction-panel {
          border-top: 1px solid
            rgba(255, 255, 255, 0.1);
        }

        .direction-stat {
          display: grid;

          grid-template-columns:
            70px
            0.8fr
            1fr;

          gap: 25px;

          align-items: center;

          padding: 28px 0;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.1);
        }

        .direction-stat > span {
          color: var(--gold-light);

          font-family: var(--font-display);

          font-size: 1.9rem;
        }

        .direction-stat h3 {
          margin: 0;

          color: #f0ebe2;

          font-family: var(--font-display);

          font-size: 1.55rem;
          font-weight: 500;
        }

        .direction-stat p {
          margin: 0;

          color: #89858d;

          font-size: 0.79rem;
          line-height: 1.7;
        }

        .final-section {
          padding: 90px 0;

          background: #050505;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .final-inner {
          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 50px;
        }

        .final-inner h2 {
          margin: 14px 0 16px;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .final-inner h2 span {
          color: var(--gold-light);
        }

        .final-inner p:not(
          .eyebrow
        ) {
          max-width: 520px;

          margin: 0;

          color: #969198;

          font-size: 0.9rem;
          line-height: 1.75;
        }

        .final-actions {
          display: flex;

          flex-direction: column;

          gap: 12px;

          align-items: flex-end;
        }

        .primary-button,
        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          min-height: 50px;

          padding: 0 22px;

          min-width: 190px;

          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .primary-button {
          background:
            linear-gradient(
              180deg,
              #f2c873,
              #dda84f
            );

          color: #111;
        }

        .secondary-button {
          border: 1px solid
            rgba(224, 180, 95, 0.5);

          color: var(--gold-light);

          background: transparent;
        }

        @media (max-width: 950px) {
          .mission-grid,
          .values-heading,
          .direction-grid {
            grid-template-columns: 1fr;

            gap: 40px;
          }

          .values-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .value-card:nth-child(2) {
            border-right: 0;
          }

          .value-card:nth-child(-n + 2) {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.08);
          }

          .final-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .final-actions {
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .about-hero {
            min-height: 650px;

            background-position:
              58%
              center;
          }

          .hero-content {
            padding-top: 145px;
          }

          .hero-copy h1 {
            font-size: 3.9rem;
          }

          .mission-section,
          .values-section,
          .direction-section,
          .final-section {
            padding-top: 75px;
            padding-bottom: 80px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            border-right: 0;
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.08);
          }

          .value-card:last-child {
            border-bottom: 0;
          }

          .direction-stat {
            grid-template-columns:
              55px
              1fr;

            gap: 16px;
          }

          .direction-stat p {
            grid-column: 2;
          }

          .final-actions,
          .primary-button,
          .secondary-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}