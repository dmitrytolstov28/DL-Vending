import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the product categories AfterHours Vending plans to offer in qualifying 21+ nightlife venues.",
};

const productCategories = [
  {
    title: "Nicotine Pouches",
    description:
      "A selection of popular nicotine pouch products chosen around customer demand, venue fit, and legal availability.",
    image: "/images/product-pouches.png",
    label: "Adult Nicotine",
  },
  {
    title: "Vape Products",
    description:
      "Eligible adult vape products for qualifying 21+ venues, selected based on compliance requirements and customer demand.",
    image: "/images/product-vapes.png",
    label: "Adult Nicotine",
  },
  {
    title: "Cigarettes",
    description:
      "Traditional tobacco products offered where permitted, appropriately licensed, and suitable for the venue.",
    image: "/images/product-cigarettes.png",
    label: "Tobacco",
  },
  {
    title: "Nightlife Essentials",
    description:
      "Future additions may include charging cables, portable power banks, gum, mints, and other useful bar-night essentials.",
    image: "/images/product-essentials.png",
    label: "Coming Later",
  },
];

export default function ProductsPage() {
  return (
    <>
      <main>
        <section className="products-hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-content">
            <p className="section-label">
              AfterHours Product Selection
            </p>

            <h1 className="display-font">
              Built around
              <br />
              <span>what people need.</span>
            </h1>

            <p className="hero-description">
              We&apos;re starting with adult nicotine
              products and building toward a broader
              selection of useful nightlife essentials.
            </p>
          </div>
        </section>

        <section className="categories-section">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="section-label">
                  Product Categories
                </p>

                <h2 className="display-font">
                  What you can expect
                  <br />
                  from our machines.
                </h2>
              </div>

              <div className="intro-copy">
                <p>
                  Our machines are designed around
                  products people commonly look for
                  while they&apos;re already out for the
                  night.
                </p>

                <p>
                  Exact brands and inventory will vary
                  by venue, supplier availability,
                  licensing, and applicable regulations.
                </p>
              </div>
            </div>

            <div className="category-grid">
              {productCategories.map((product) => (
                <article
                  key={product.title}
                  className="category-card"
                >
                  <div
                    className="category-image"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          to top,
                          rgba(5, 5, 5, 0.92) 0%,
                          rgba(5, 5, 5, 0.12) 55%,
                          rgba(5, 5, 5, 0.04) 100%
                        ),
                        url("${product.image}")
                      `,
                    }}
                  />

                  <div className="category-content">
                    <p className="category-label">
                      {product.label}
                    </p>

                    <h3 className="display-font">
                      {product.title}
                    </h3>

                    <p className="category-description">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="future-section">
          <div className="container future-grid">
            <div>
              <p className="section-label">
                Built to Expand
              </p>

              <h2 className="display-font">
                The product mix will grow
                <br />
                with the business.
              </h2>
            </div>

            <div className="future-copy">
              <p>
                Once we have our regular stock and
                supplier relationships established,
                each category can have its own page
                showing the actual products currently
                available.
              </p>

              <p>
                For now, this page gives venue owners
                and customers a clear idea of what
                AfterHours Vending is built to offer.
              </p>
            </div>
          </div>
        </section>

        <section className="products-cta">
          <div className="cta-overlay" />

          <div className="container cta-content">
            <div>
              <p className="section-label">
                For Venue Owners
              </p>

              <h2 className="display-font">
                Want this product mix
                <br />
                <span>inside your venue?</span>
              </h2>
            </div>

            <Link
              href="/request-a-machine"
              className="cta-button"
            >
              Request a Machine
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .products-hero {
          position: relative;

          min-height: 610px;

          display: flex;
          align-items: flex-end;

          background:
            url("/images/hero-bar.png");

          background-size: cover;
          background-position: center;

          padding-bottom: 88px;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(4, 4, 4, 0.97) 0%,
              rgba(4, 4, 4, 0.79) 40%,
              rgba(4, 4, 4, 0.24) 75%,
              rgba(4, 4, 4, 0.4) 100%
            ),
            linear-gradient(
              to top,
              rgba(4, 4, 4, 0.94),
              transparent 45%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;

          padding-top: 150px;
        }

        .section-label {
          margin: 0;

          color: var(--gold-light);

          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .hero-content h1 {
          max-width: 800px;

          margin: 16px 0 20px;

          color: #f3ede3;

          font-size: clamp(
            4.3rem,
            7vw,
            7rem
          );

          font-weight: 500;
          line-height: 0.88;
          letter-spacing: -0.04em;
        }

        .hero-content h1 span {
          color: var(--gold-light);
        }

        .hero-description {
          max-width: 590px;

          margin: 0;

          color: #c4beb5;

          font-size: 1rem;
          line-height: 1.75;
        }

        .categories-section {
          padding: 105px 0 120px;

          background: #050505;
        }

        .section-intro {
          display: grid;

          grid-template-columns:
            1fr
            0.72fr;

          gap: 90px;

          align-items: end;

          margin-bottom: 60px;
        }

        .section-intro h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            5vw,
            5rem
          );

          font-weight: 500;
          line-height: 0.94;
        }

        .intro-copy p {
          margin: 0 0 16px;

          color: #97928a;

          font-size: 0.92rem;
          line-height: 1.8;
        }

        .category-grid {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);

          gap: 18px;
        }

        .category-card {
          position: relative;

          min-height: 500px;

          overflow: hidden;

          border: 1px solid
            rgba(224, 180, 95, 0.15);

          background: #090909;
        }

        .category-image {
          position: absolute;
          inset: 0;

          background-size: cover;
          background-position: center;

          transition:
            transform 350ms ease;
        }

        .category-card:hover
          .category-image {
          transform: scale(1.025);
        }

        .category-content {
          position: absolute;
          z-index: 2;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 32px;

          background:
            linear-gradient(
              to top,
              rgba(4, 4, 4, 0.97),
              rgba(4, 4, 4, 0.8),
              transparent
            );
        }

        .category-label {
          margin: 0 0 8px;

          color: var(--gold-light);

          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .category-content h3 {
          margin: 0 0 10px;

          color: #f3ede2;

          font-size: 2.4rem;
          font-weight: 500;
        }

        .category-description {
          max-width: 520px;

          margin: 0;

          color: #b0aba3;

          font-size: 0.85rem;
          line-height: 1.75;
        }

        .future-section {
          padding: 100px 0;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);

          background: #080808;
        }

        .future-grid {
          display: grid;

          grid-template-columns:
            1fr
            0.75fr;

          gap: 100px;
        }

        .future-grid h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            5vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .future-copy {
          padding-top: 22px;
        }

        .future-copy p {
          margin: 0 0 18px;

          color: #97928a;

          font-size: 0.9rem;
          line-height: 1.82;
        }

        .products-cta {
          position: relative;

          padding: 100px 0;

          overflow: hidden;

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
              rgba(4, 4, 4, 0.94),
              rgba(4, 4, 4, 0.67),
              rgba(4, 4, 4, 0.44)
            );
        }

        .cta-content {
          position: relative;
          z-index: 2;

          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          gap: 40px;
        }

        .cta-content h2 {
          margin: 14px 0 0;

          font-size: clamp(
            3rem,
            5vw,
            5rem
          );

          font-weight: 500;
          line-height: 0.94;
        }

        .cta-content h2 span {
          color: var(--gold-light);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          min-height: 52px;

          padding: 0 24px;

          border: 1px solid transparent;

          background:
            linear-gradient(
              180deg,
              #f2c873,
              #dca44a
            );

          color: #121212;

          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          transition:
            background 150ms ease,
            transform 150ms ease;
        }

        .cta-button:hover {
          transform: translateY(-1px);

          background:
            linear-gradient(
              180deg,
              #f5d58f,
              #e2ac58
            );
        }

        @media (max-width: 900px) {
          .section-intro,
          .future-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .category-card {
            min-height: 420px;
          }

          .cta-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .products-hero {
            min-height: 560px;
            padding-bottom: 60px;
            background-position: 66% center;
          }

          .hero-content h1 {
            font-size: 3.8rem;
          }

          .categories-section,
          .future-section,
          .products-cta {
            padding-top: 78px;
            padding-bottom: 82px;
          }

          .category-grid {
            grid-template-columns: 1fr;
          }

          .category-card {
            min-height: 390px;
          }

          .category-content {
            padding: 25px 22px;
          }

          .category-content h3 {
            font-size: 2rem;
          }

          .cta-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}