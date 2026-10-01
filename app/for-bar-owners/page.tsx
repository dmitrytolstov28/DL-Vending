import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Venues | AfterHours Vending",
  description:
    "AfterHours Vending provides fully managed vending solutions for qualifying 21+ bars, lounges, nightclubs, and nightlife venues.",
};

const benefits = [
  {
    icon: BarChart3,
    title: "Additional Revenue",
    text: "Earn an agreed share of qualifying machine sales.",
  },
  {
    icon: Users,
    title: "No Staff Management",
    text: "We handle inventory, restocking, and service.",
  },
  {
    icon: Sparkles,
    title: "Better Guest Experience",
    text: "Give customers access to useful products while they are already at your venue.",
  },
  {
    icon: Settings,
    title: "Fully Managed",
    text: "Your team focuses on the venue. We handle the vending operation.",
  },
];

const serviceItems = [
  "Machine placement and setup",
  "Product sourcing and inventory",
  "Regular restocking and monitoring",
  "Maintenance and technical support",
  "Customer service for machine issues",
  "Review of applicable placement requirements",
];

const processSteps = [
  {
    number: "01",
    title: "Tell us about your venue",
    text: "Share a few details about your location, audience, and operating setup.",
  },
  {
    number: "02",
    title: "We review the location",
    text: "We determine whether the venue is a good operational and placement fit.",
  },
  {
    number: "03",
    title: "We install and stock",
    text: "Placement, setup, and initial inventory are coordinated with management.",
  },
  {
    number: "04",
    title: "We maintain and restock",
    text: "Our team keeps the machine stocked, serviced, and operating smoothly.",
  },
];

export default function ForBarOwnersPage() {
  return (
    <>
      <main>
        <section className="venues-hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                For Bars & Nightlife Venues
              </p>

              <h1 className="display-font">
                Built for venues
                <br />
                that stay busy
                <br />
                <span>after dark.</span>
              </h1>

              <p className="hero-description">
                Add a useful amenity to your venue without
                adding work for your staff. AfterHours
                Vending installs, stocks, services, and
                manages vending machines for qualifying
                nightlife locations.
              </p>

              <div className="hero-links">
                <a
                  href="#why-afterhours"
                  className="primary-action"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#how-it-works"
                  className="secondary-action"
                >
                  See How It Works
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="why-afterhours"
          className="benefits-section"
        >
          <div className="container">
            <div className="benefits-heading">
              <div>
                <p className="eyebrow">
                  Why Venues Partner With Us
                </p>

                <h2 className="display-font">
                  A simple way to add
                  <br />
                  value to your venue.
                </h2>
              </div>

              <p className="benefits-intro">
                Our machines give customers convenient
                access to in-demand products while creating
                another revenue opportunity for the venue.
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="benefit-item"
                  >
                    <Icon
                      size={34}
                      strokeWidth={1.5}
                    />

                    <h3>{benefit.title}</h3>

                    <p>{benefit.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="service-image" />

          <div className="service-content">
            <div className="service-inner">
              <p className="eyebrow">
                What We Handle
              </p>

              <h2 className="display-font">
                Everything behind
                <br />
                the scenes.
              </h2>

              <p className="service-description">
                AfterHours Vending is designed to be a
                managed solution. Once a machine is placed,
                our team handles the day-to-day operation.
              </p>

              <div className="service-list">
                {serviceItems.map((item) => (
                  <div
                    key={item}
                    className="service-row"
                  >
                    <span className="check-icon">
                      <Check
                        size={14}
                        strokeWidth={3}
                      />
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="process-section"
        >
          <div className="container">
            <div className="process-heading">
              <div>
                <p className="eyebrow">
                  How It Works
                </p>

                <h2 className="display-font">
                  Simple from day one.
                </h2>
              </div>

              <p>
                Getting a machine into your venue should be
                straightforward. We handle the operational
                work so your staff can stay focused on the
                business.
              </p>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article
                  key={step.number}
                  className="process-item"
                >
                  <div className="process-top">
                    <span className="process-number">
                      {step.number}
                    </span>

                    {index < processSteps.length - 1 && (
                      <ArrowRight
                        size={18}
                        className="process-arrow"
                      />
                    )}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compliance-section">
          <div className="container compliance-shell">
            <div className="compliance-copy">
              <p className="eyebrow">
                Compliance & Responsible Placement
              </p>

              <h2 className="display-font">
                Responsible placement
                <br />
                comes first.
              </h2>

              <p>
                Placement is focused on qualifying adult
                venues and reviewed for applicable
                age-access, licensing, product, and local
                requirements before operation.
              </p>

              <Link
                href="/compliance"
                className="outline-link"
              >
                Learn About Compliance
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="compliance-visual">
              <div className="compliance-image" />
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="final-overlay" />

          <div className="container final-content">
            <div>
              <p className="eyebrow">
                AfterHours Vending
              </p>

              <h2 className="display-font">
                Let&apos;s bring AfterHours
                <br />
                <span>to your venue.</span>
              </h2>

              <p>
                Interested in adding a machine or want to
                learn whether your venue could be a fit?
              </p>
            </div>

            <Link
              href="/request-a-machine"
              className="final-button"
            >
              Request a Machine
              <ArrowRight size={17} />
            </Link>
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

        .venues-hero {
          position: relative;
          min-height: 760px;
          display: flex;
          align-items: center;
          background: url("/images/venues-hero.png");
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(3, 3, 3, 0.96) 0%,
              rgba(3, 3, 3, 0.82) 37%,
              rgba(3, 3, 3, 0.27) 68%,
              rgba(3, 3, 3, 0.32) 100%
            ),
            linear-gradient(
              to top,
              rgba(3, 3, 3, 0.7),
              transparent 45%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 145px;
          padding-bottom: 90px;
        }

        .hero-copy {
          max-width: 680px;
        }

        .hero-copy h1 {
          margin: 16px 0 22px;
          color: #f3eee5;
          font-size: clamp(4.3rem, 6.5vw, 6.8rem);
          font-weight: 500;
          line-height: 0.89;
          letter-spacing: -0.045em;
        }

        .hero-copy h1 span {
          color: var(--gold-light);
        }

        .hero-description {
          max-width: 575px;
          margin: 0;
          color: #d0cbc3;
          font-size: 0.98rem;
          line-height: 1.75;
        }

        .hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .primary-action,
        .secondary-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 0 22px;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .primary-action {
          background:
            linear-gradient(
              180deg,
              #f2c873,
              #dda84f
            );
          color: #121212;
        }

        .secondary-action {
          border: 1px solid
            rgba(224, 180, 95, 0.48);
          background:
            rgba(6, 6, 6, 0.4);
          color: #f0e9dd;
        }

        .benefits-section {
          padding: 95px 0 100px;
          background: #060606;
          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .benefits-heading {
          display: grid;
          grid-template-columns:
            1fr
            0.65fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 58px;
        }

        .benefits-heading h2 {
          margin: 14px 0 0;
          font-size: clamp(
            3rem,
            5vw,
            5rem
          );
          font-weight: 500;
          line-height: 0.95;
        }

        .benefits-intro {
          margin: 0;
          color: #9d9890;
          font-size: 0.92rem;
          line-height: 1.8;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          border-top: 1px solid
            rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.08);
        }

        .benefit-item {
          min-height: 240px;
          padding: 38px 30px;
          border-right: 1px solid
            rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        .benefit-item:last-child {
          border-right: 0;
        }

        .benefit-item svg {
          margin-bottom: 25px;
          color: var(--gold-light);
        }

        .benefit-item h3 {
          margin: 0 0 12px;
          color: #f1ece2;
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .benefit-item p {
          max-width: 230px;
          margin: 0 auto;
          color: #8e8981;
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .service-section {
          display: grid;
          grid-template-columns:
            1fr
            1fr;
          min-height: 520px;
          background: #080808;
          border-bottom: 1px solid
            rgba(255, 255, 255, 0.07);
        }

        .service-image {
          min-height: 520px;
          background:
            url("/images/venues-lounge.png");
          background-size: cover;
          background-position: center;
        }

        .service-content {
          display: flex;
          align-items: center;
          padding: 60px 72px;
        }

        .service-inner {
          max-width: 590px;
        }

        .service-inner h2 {
          margin: 14px 0 18px;
          font-size: clamp(
            2.8rem,
            4.2vw,
            4.2rem
          );
          font-weight: 500;
          line-height: 0.95;
        }

        .service-description {
          max-width: 510px;
          margin: 0 0 24px;
          color: #9c978f;
          font-size: 0.88rem;
          line-height: 1.75;
        }

        .service-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .service-row {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d7d2c9;
          font-size: 0.84rem;
        }

        .check-icon {
          width: 21px;
          height: 21px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--gold-light);
          color: #111;
        }

        .process-section {
          padding: 85px 0 95px;
          background: #060606;
        }

        .process-heading {
          display: grid;
          grid-template-columns:
            1fr
            0.55fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 38px;
        }

        .process-heading h2 {
          margin: 14px 0 0;
          font-size: clamp(
            2.9rem,
            4.7vw,
            4.7rem
          );
          font-weight: 500;
          line-height: 0.95;
        }

        .process-heading > p {
          margin: 0;
          color: #969189;
          font-size: 0.86rem;
          line-height: 1.75;
        }

        .process-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          border-top: 1px solid
            rgba(255, 255, 255, 0.1);
        }

        .process-item {
          padding: 28px 28px 12px 0;
        }

        .process-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .process-number {
          color: var(--gold-light);
          font-family: var(--font-display);
          font-size: 1.9rem;
        }

        .process-arrow {
          margin-right: 18px;
          color: var(--gold-light);
        }

        .process-item h3 {
          max-width: 170px;
          margin: 0 0 10px;
          color: #f0ebe2;
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .process-item p {
          max-width: 220px;
          margin: 0;
          color: #88847d;
          font-size: 0.77rem;
          line-height: 1.68;
        }

        .compliance-section {
          padding: 72px 0;
          background:
            linear-gradient(
              180deg,
              #0a0a0a,
              #070707
            );
          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
          border-bottom: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .compliance-shell {
          display: grid;
          grid-template-columns:
            1.05fr
            0.95fr;
          gap: 68px;
          align-items: center;
        }

        .compliance-copy {
          max-width: 650px;
        }

        .compliance-copy h2 {
          margin: 14px 0 18px;
          font-size: clamp(
            2.9rem,
            4.4vw,
            4.4rem
          );
          font-weight: 500;
          line-height: 0.95;
        }

        .compliance-copy > p:not(
          .eyebrow
        ) {
          max-width: 590px;
          margin: 0;
          color: #9b968e;
          font-size: 0.88rem;
          line-height: 1.75;
        }

        .outline-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          width: fit-content;
          min-height: 45px;
          margin-top: 23px;
          padding: 0 18px;
          border: 1px solid
            rgba(224, 180, 95, 0.55);
          color: var(--gold-light);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .compliance-visual {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .compliance-image {
          width: 100%;
          max-width: 560px;
          height: 330px;
          border: 1px solid
            rgba(224, 180, 95, 0.14);
          background:
            url("/images/venues-compliance.png");
          background-size: cover;
          background-position: 63% center;
        }

        .final-section {
          position: relative;
          min-height: 430px;
          display: flex;
          align-items: center;
          background:
            url("/images/venues-chicago.png");
          background-size: cover;
          background-position: center 48%;
        }

        .final-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(4, 4, 4, 0.9) 0%,
              rgba(4, 4, 4, 0.7) 38%,
              rgba(4, 4, 4, 0.15) 100%
            ),
            linear-gradient(
              to bottom,
              rgba(4, 4, 4, 0.22),
              rgba(4, 4, 4, 0.38)
            );
        }

        .final-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 50px;
          padding-top: 85px;
          padding-bottom: 85px;
        }

        .final-content h2 {
          margin: 14px 0 16px;
          font-size: clamp(
            3.1rem,
            5vw,
            5rem
          );
          font-weight: 500;
          line-height: 0.94;
        }

        .final-content h2 span {
          color: var(--gold-light);
        }

        .final-content p:not(
          .eyebrow
        ) {
          max-width: 520px;
          margin: 0;
          color: #c1bbb2;
          font-size: 0.92rem;
          line-height: 1.75;
        }

        .final-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 24px;
          flex-shrink: 0;
          background:
            linear-gradient(
              180deg,
              #f2c873,
              #dda84f
            );
          color: #111;
          font-size: 0.77rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        @media (max-width: 1000px) {
          .benefits-heading,
          .process-heading {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .benefits-grid,
          .process-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .service-section {
            grid-template-columns: 1fr;
          }

          .service-image {
            min-height: 400px;
          }

          .service-content {
            padding: 60px 6vw;
          }

          .compliance-shell {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .compliance-image {
            max-width: none;
            height: 350px;
          }
        }

        @media (max-width: 700px) {
          .venues-hero {
            min-height: 720px;
            background-position:
              60%
              center;
          }

          .hero-content {
            padding-top: 150px;
          }

          .hero-copy h1 {
            font-size: 3.9rem;
          }

          .hero-links {
            flex-direction: column;
            width: 100%;
          }

          .primary-action,
          .secondary-action {
            width: 100%;
          }

          .benefits-section,
          .process-section {
            padding-top: 75px;
            padding-bottom: 80px;
          }

          .benefits-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .benefit-item {
            border-right: 0;
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.08);
          }

          .service-image {
            min-height: 300px;
          }

          .service-content {
            padding: 58px 22px;
          }

          .process-item {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.08);
            padding: 27px 0;
          }

          .process-arrow {
            display: none;
          }

          .compliance-section {
            padding: 62px 0;
          }

          .compliance-image {
            height: 280px;
          }

          .final-section {
            min-height: 500px;
          }

          .final-content {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .final-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}