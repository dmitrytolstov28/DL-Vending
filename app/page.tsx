import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "AfterHours Vending | Premium Vending for 21+ Venues",
  description:
    "AfterHours Vending provides fully managed vending machines for qualifying 21+ bars, lounges, nightclubs, and nightlife venues.",
};

const highlights = [
  {
    number: "01",
    title: "Fully Managed",
    text: "We install, stock, and service.",
  },
  {
    number: "02",
    title: "21+ Venue Focused",
    text: "Built specifically for nightlife.",
  },
  {
    number: "03",
    title: "Revenue Share",
    text: "Additional income for your venue.",
  },
  {
    number: "04",
    title: "Illinois Based",
    text: "Local operation and support.",
  },
];

const products = [
  {
    title: "Nicotine Pouches",
    text: "Popular pouch products based on legal availability and venue demand.",
    image: "/images/product-pouches.png",
  },
  {
    title: "Vape Products",
    text: "Eligible adult vape products sourced for qualifying locations.",
    image: "/images/product-vapes.png",
  },
  {
    title: "Cigarettes",
    text: "Traditional tobacco products where permitted and properly licensed.",
    image: "/images/product-cigarettes.png",
  },
  {
    title: "Nightlife Essentials",
    text: "Future additions may include chargers, power banks, gum, mints, and more.",
    image: "/images/product-essentials.png",
  },
];

const processSteps = [
  {
    number: "01",
    title: "We review the venue",
    text: "We make sure the location is a good operational and compliance fit.",
  },
  {
    number: "02",
    title: "We install the machine",
    text: "Placement and setup are coordinated directly with venue management.",
  },
  {
    number: "03",
    title: "We stock and service it",
    text: "AfterHours handles inventory, restocking, monitoring, and maintenance.",
  },
  {
    number: "04",
    title: "Your venue earns",
    text: "Sales are tracked and the venue receives its agreed revenue share.",
  },
];

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="section-label">
                Premium vending for 21+ venues
              </p>

              <h1 className="display-font">
                Built for
                <br />
                <span>after hours.</span>
              </h1>

              <p className="hero-description">
                Fully managed vending solutions for
                qualifying 21+ bars, lounges,
                nightclubs, and nightlife venues.
              </p>

              <div className="hero-actions">
                <Link
                  href="/request-a-machine"
                  className="hero-primary"
                >
                  Request a Machine
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/for-bar-owners"
                  className="hero-secondary"
                >
                  For Bar Owners
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="highlights-bar">
            <div className="container highlights-grid">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="highlight"
                >
                  <span className="highlight-number">
                    {item.number}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="owner-section">
          <div className="container owner-grid">
            <div className="owner-image" />

            <div className="owner-copy">
              <p className="section-label">
                For Venue Owners
              </p>

              <h2 className="display-font">
                We handle the machine.
                <br />
                <span>You run the venue.</span>
              </h2>

              <p>
                AfterHours Vending gives nightlife
                venues a simple way to offer in-demand
                products without taking on another
                inventory system.
              </p>

              <p>
                We manage installation, stocking,
                maintenance, and servicing so your
                staff can stay focused on the venue.
              </p>

              <Link
                href="/for-bar-owners"
                className="section-link"
              >
                Learn about partnerships
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="container products-layout">
            <div className="products-copy">
              <p className="section-label">
                What We Stock
              </p>

              <h2 className="display-font">
                Start with what
                <br />
                customers already want.
              </h2>

              <p>
                Our initial machines are centered on
                adult nicotine products, with room to
                expand into useful nightlife
                essentials.
              </p>

              <Link
                href="/products"
                className="section-link"
              >
                View all products
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article
                  key={product.title}
                  className="product-card"
                >
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `linear-gradient(
                        to top,
                        rgba(5, 5, 5, 0.9),
                        rgba(5, 5, 5, 0.04)
                      ),
                      url("${product.image}")`,
                    }}
                  />

                  <div className="product-body">
                    <h3>{product.title}</h3>
                    <p>{product.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <div className="process-heading">
              <div>
                <p className="section-label">
                  How It Works
                </p>

                <h2 className="display-font">
                  Simple from day one.
                </h2>
              </div>

              <Link
                href="/how-it-works"
                className="section-link"
              >
                Full process
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="process-item"
                >
                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-overlay" />

          <div className="container cta-layout">
            <div className="cta-copy">
              <p className="section-label">
                AfterHours Vending
              </p>

              <h2 className="display-font">
                Interested in a machine
                <br />
                <span>for your venue?</span>
              </h2>
            </div>

            <div className="cta-actions">
              <Link
                href="/request-a-machine"
                className="hero-primary"
              >
                Request a Machine
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/for-bar-owners"
                className="hero-secondary"
              >
                Learn About Partnerships
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .hero {
          position: relative;
          min-height: 910px;

          background:
            url("/images/hero-bar.png");

          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(4, 4, 4, 0.96) 0%,
              rgba(4, 4, 4, 0.78) 34%,
              rgba(4, 4, 4, 0.14) 68%,
              rgba(4, 4, 4, 0.34) 100%
            ),
            linear-gradient(
              to top,
              rgba(4, 4, 4, 0.95),
              transparent 42%
            );
        }

        .hero-layout {
          position: relative;
          z-index: 2;

          min-height: 770px;

          display: flex;
          align-items: center;

          padding-top: 140px;
          padding-bottom: 150px;
        }

        .hero-copy {
          max-width: 660px;
        }

        .section-label {
          margin: 0;

          color: var(--gold-light);

          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hero h1 {
          margin: 18px 0 18px;

          color: #f4ede2;

          font-size: clamp(
            4.5rem,
            7.1vw,
            7.4rem
          );

          font-weight: 500;
          line-height: 0.88;
          letter-spacing: -0.045em;
        }

        .hero h1 span {
          color: var(--gold-light);
        }

        .hero-description {
          max-width: 570px;

          margin: 0;

          color: #d1cbc2;

          font-size: 1.02rem;
          line-height: 1.72;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;

          margin-top: 32px;
        }

        .hero-primary,
        .hero-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          min-height: 52px;

          padding: 0 24px;

          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          transition:
            background 150ms ease,
            color 150ms ease,
            border-color 150ms ease;
        }

        .hero-primary {
          border: 1px solid transparent;

          background:
            linear-gradient(
              180deg,
              #f2c873,
              #dca44a
            );

          color: #121212;
        }

        .hero-primary:hover {
          background:
            linear-gradient(
              180deg,
              #f5d58f,
              #e2ac58
            );
        }

        .hero-secondary {
          border: 1px solid
            rgba(224, 180, 95, 0.5);

          background:
            rgba(8, 8, 8, 0.35);

          color: #f2eadb;
        }

        .hero-secondary:hover {
          border-color:
            var(--gold-light);

          color: var(--gold-light);
        }

        .highlights-bar {
          position: absolute;
          z-index: 3;

          left: 0;
          bottom: 0;

          width: 100%;

          border-top: 1px solid
            rgba(224, 180, 95, 0.18);

          border-bottom: 1px solid
            rgba(224, 180, 95, 0.1);

          background:
            rgba(5, 5, 5, 0.86);

          backdrop-filter: blur(8px);
        }

        .highlights-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
        }

        .highlight {
          display: grid;

          grid-template-columns:
            auto
            1fr;

          gap: 16px;

          min-height: 94px;

          padding: 20px 18px;

          border-right: 1px solid
            rgba(255, 255, 255, 0.07);

          align-items: center;
        }

        .highlight:last-child {
          border-right: 0;
        }

        .highlight-number {
          color: var(--gold-light);

          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        .highlight h3 {
          margin: 0 0 5px;

          color: #f0ebe0;

          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .highlight p {
          margin: 0;

          color: #9f9a91;

          font-size: 0.77rem;
          line-height: 1.55;
        }

        .owner-section {
          padding: 110px 0 100px;

          background: #050505;
        }

        .owner-grid {
          display: grid;

          grid-template-columns:
            1fr
            1fr;

          gap: 56px;

          align-items: stretch;
        }

        .owner-image {
          min-height: 440px;

          border: 1px solid
            rgba(224, 180, 95, 0.12);

          background:
            linear-gradient(
              rgba(5, 5, 5, 0.08),
              rgba(5, 5, 5, 0.08)
            ),
            url("/images/venue-owners.png");

          background-size: cover;
          background-position: center;
        }

        .owner-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 28px 0;
        }

        .owner-copy h2 {
          margin: 14px 0 20px;

          font-size: clamp(
            3rem,
            5vw,
            4.7rem
          );

          font-weight: 500;
          line-height: 0.94;
        }

        .owner-copy h2 span {
          color: var(--gold-light);
        }

        .owner-copy p {
          max-width: 520px;

          margin: 0 0 16px;

          color: #9f9a92;

          font-size: 0.95rem;
          line-height: 1.82;
        }

        .section-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-top: 10px;

          color: var(--gold-light);

          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;

          transition:
            color 150ms ease,
            gap 150ms ease;
        }

        .section-link:hover {
          gap: 12px;
          color: #f2d18a;
        }

        .products-section {
          padding: 95px 0 105px;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);

          background: #050505;
        }

        .products-layout {
          display: grid;

          grid-template-columns:
            0.85fr
            1.15fr;

          gap: 42px;

          align-items: start;
        }

        .products-copy {
          padding-right: 10px;
        }

        .products-copy h2 {
          margin: 14px 0 18px;

          font-size: clamp(
            2.9rem,
            4.8vw,
            4.7rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .products-copy p {
          max-width: 470px;

          margin: 0;

          color: #979289;

          line-height: 1.8;
        }

        .products-copy .section-link {
          margin-top: 22px;
        }

        .product-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);

          gap: 12px;
        }

        .product-card {
          overflow: hidden;

          border: 1px solid
            rgba(224, 180, 95, 0.14);

          background: #0a0a0a;
        }

        .product-image {
          height: 185px;

          background-size: cover;
          background-position: center;
        }

        .product-body {
          padding: 18px 16px 20px;
        }

        .product-body h3 {
          margin: 0 0 8px;

          color: #f1ebe1;

          font-family:
            var(--font-display);

          font-size: 1.45rem;
          font-weight: 500;
          line-height: 1.04;
        }

        .product-body p {
          margin: 0;

          color: #8f8a82;

          font-size: 0.77rem;
          line-height: 1.68;
        }

        .process-section {
          padding: 95px 0 105px;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);

          background: #040404;
        }

        .process-heading {
          display: flex;
          align-items: end;
          justify-content:
            space-between;

          gap: 30px;

          margin-bottom: 34px;
        }

        .process-heading h2 {
          margin: 14px 0 0;

          font-size: clamp(
            2.9rem,
            4.8vw,
            4.7rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .process-grid {
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);

          border-top: 1px solid
            rgba(255, 255, 255, 0.09);

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .process-item {
          padding: 28px 22px 30px;

          border-right: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .process-item:last-child {
          border-right: 0;
        }

        .process-number {
          display: block;

          margin-bottom: 16px;

          color: var(--gold-light);

          font-family:
            var(--font-display);

          font-size: 2.25rem;
          line-height: 1;
        }

        .process-item h3 {
          margin: 0 0 10px;

          color: #f1ebe1;

          font-size: 0.96rem;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .process-item p {
          margin: 0;

          color: #89857d;

          font-size: 0.78rem;
          line-height: 1.72;
        }

        .cta-section {
          position: relative;

          overflow: hidden;

          padding: 90px 0;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);

          background:
            url("/images/final-cta.png");

          background-size: cover;
          background-position: center;
        }

        .cta-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(5, 5, 5, 0.92),
              rgba(5, 5, 5, 0.65),
              rgba(5, 5, 5, 0.38)
            );
        }

        .cta-layout {
          position: relative;
          z-index: 2;

          display: flex;
          justify-content:
            space-between;
          align-items: flex-end;

          gap: 40px;
        }

        .cta-copy h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            5vw,
            4.9rem
          );

          font-weight: 500;
          line-height: 0.94;
        }

        .cta-copy h2 span {
          color: var(--gold-light);
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;

          align-items: flex-end;
        }

        @media (max-width: 1080px) {
          .products-layout {
            grid-template-columns: 1fr;
          }

          .product-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }
        }

        @media (max-width: 920px) {
          .hero {
            min-height: 980px;
          }

          .highlights-bar {
            position: relative;
          }

          .highlights-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .highlight:nth-child(2) {
            border-right: 0;
          }

          .highlight:nth-child(-n + 2) {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.07);
          }

          .owner-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .process-item:nth-child(2) {
            border-right: 0;
          }

          .process-item:nth-child(-n + 2) {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.09);
          }

          .cta-layout {
            flex-direction: column;
            align-items: flex-start;
          }

          .cta-actions {
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .hero {
            min-height: 860px;
            background-position: 65% center;
          }

          .hero-layout {
            min-height: auto;

            padding-top: 150px;
            padding-bottom: 72px;
          }

          .hero h1 {
            font-size: 4rem;
          }

          .hero-description {
            font-size: 0.94rem;
          }

          .highlights-grid,
          .product-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .highlight,
          .process-item {
            border-right: 0;
          }

          .highlight {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.07);
          }

          .highlight:last-child {
            border-bottom: 0;
          }

          .process-item {
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.09);
          }

          .process-item:last-child {
            border-bottom: 0;
          }

          .owner-section,
          .products-section,
          .process-section,
          .cta-section {
            padding-top: 78px;
            padding-bottom: 82px;
          }

          .product-image {
            height: 210px;
          }

          .hero-actions,
          .cta-actions {
            width: 100%;
          }

          .hero-primary,
          .hero-secondary {
            width: 100%;
          }

          .process-heading {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}