import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | DL Vending",
  description:
    "Contact DL Vending about vending solutions for qualifying 21+ nightlife venues.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <section className="contact-hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                Contact DL Vending
              </p>

              <h1 className="display-font">
                Let&apos;s
                <br />
                <span>connect.</span>
              </h1>

              <p>
                Have questions about DL Vending or want
                to learn more about bringing a machine
                into your venue? We&apos;d be happy to
                talk.
              </p>

              <div className="hero-actions">
                <a
                  href="mailto:dlvendingcompany@gmail.com"
                  className="primary-button"
                >
                  Email Us
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/request-a-machine"
                  className="secondary-button"
                >
                  Request a Machine
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container contact-grid">
            <div className="contact-heading">
              <p className="eyebrow">
                Get In Touch
              </p>

              <h2 className="display-font">
                We&apos;re here to
                <br />
                answer your questions.
              </h2>

              <p>
                Whether you&apos;re a venue owner,
                potential partner, or simply want more
                information about DL Vending, reach out
                and we&apos;ll get back to you.
              </p>
            </div>

            <div className="contact-cards">
              <a
                href="mailto:dlvendingcompany@gmail.com"
                className="contact-card"
              >
                <div className="icon-wrap">
                  <Mail size={25} />
                </div>

                <div>
                  <span className="card-label">
                    Email
                  </span>

                  <h3>
                    dlvendingcompany@gmail.com
                  </h3>

                  <p>
                    The best way to reach our team
                    directly.
                  </p>
                </div>

                <ArrowRight
                  className="card-arrow"
                  size={19}
                />
              </a>

              <div className="contact-card">
                <div className="icon-wrap">
                  <MapPin size={25} />
                </div>

                <div>
                  <span className="card-label">
                    Service Area
                  </span>

                  <h3>Illinois</h3>

                  <p>
                    Serving qualifying 21+ nightlife
                    venues.
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <div className="icon-wrap">
                  <Clock3 size={25} />
                </div>

                <div>
                  <span className="card-label">
                    Response
                  </span>

                  <h3>We&apos;ll get back to you.</h3>

                  <p>
                    Send us an email with your venue
                    information and what you&apos;d like
                    to discuss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="venue-contact">
          <div className="container venue-contact-inner">
            <div>
              <p className="eyebrow">
                Venue Owners
              </p>

              <h2 className="display-font">
                Interested in adding
                <br />
                <span>a machine to your venue?</span>
              </h2>

              <p>
                Tell us a little about your location and
                we&apos;ll review whether DL Vending
                could be a good fit.
              </p>
            </div>

            <Link
              href="/request-a-machine"
              className="request-button"
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

        .contact-hero {
          position: relative;

          min-height: 720px;

          display: flex;
          align-items: center;

          background:
            url("/images/contact-hero.png");

          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 4, 12, 0.97) 0%,
              rgba(3, 4, 12, 0.83) 34%,
              rgba(3, 4, 12, 0.34) 65%,
              rgba(3, 4, 12, 0.2) 100%
            ),
            linear-gradient(
              to top,
              rgba(3, 4, 12, 0.62),
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
          max-width: 650px;
        }

        .hero-copy h1 {
          margin: 15px 0 20px;

          color: #f3eee5;

          font-size: clamp(
            4.5rem,
            7vw,
            7rem
          );

          font-weight: 500;
          line-height: 0.88;
          letter-spacing: -0.045em;
        }

        .hero-copy h1 span {
          color: var(--gold-light);
        }

        .hero-copy > p:not(.eyebrow) {
          max-width: 560px;

          margin: 0;

          color: #d0cadf;

          font-size: 0.98rem;
          line-height: 1.8;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;

          gap: 14px;

          margin-top: 30px;
        }

        .primary-button,
        .secondary-button {
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

          background:
            rgba(5, 5, 12, 0.4);

          color: #eee7dc;
        }

        .contact-section {
          padding: 105px 0;

          background:
            linear-gradient(
              180deg,
              #07080d,
              #050505
            );

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .contact-grid {
          display: grid;

          grid-template-columns:
            0.85fr
            1.15fr;

          gap: 90px;

          align-items: start;
        }

        .contact-heading {
          position: sticky;
          top: 50px;
        }

        .contact-heading h2 {
          margin: 14px 0 20px;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .contact-heading > p:not(
          .eyebrow
        ) {
          max-width: 470px;

          margin: 0;

          color: #949098;

          font-size: 0.9rem;
          line-height: 1.8;
        }

        .contact-cards {
          border-top: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .contact-card {
          position: relative;

          display: grid;

          grid-template-columns:
            55px
            1fr
            auto;

          gap: 18px;

          align-items: center;

          min-height: 150px;

          padding: 26px 0;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.09);

          color: inherit;
        }

        .icon-wrap {
          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            rgba(224, 180, 95, 0.38);

          color: var(--gold-light);
        }

        .card-label {
          display: block;

          margin-bottom: 7px;

          color: var(--gold-light);

          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .contact-card h3 {
          margin: 0 0 8px;

          color: #eee9df;

          font-family: var(--font-display);

          font-size: 1.55rem;
          font-weight: 500;
        }

        .contact-card p {
          max-width: 510px;

          margin: 0;

          color: #87838a;

          font-size: 0.8rem;
          line-height: 1.68;
        }

        .card-arrow {
          color: var(--gold-light);

          transition: transform 150ms ease;
        }

        a.contact-card:hover
          .card-arrow {
          transform: translateX(4px);
        }

        .venue-contact {
          padding: 90px 0;

          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(50, 25, 100, 0.18),
              transparent 40%
            ),
            #060608;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .venue-contact-inner {
          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 50px;
        }

        .venue-contact h2 {
          margin: 14px 0 16px;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .venue-contact h2 span {
          color: var(--gold-light);
        }

        .venue-contact p:not(
          .eyebrow
        ) {
          max-width: 530px;

          margin: 0;

          color: #969198;

          font-size: 0.9rem;
          line-height: 1.75;
        }

        .request-button {
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

          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .contact-heading {
            position: static;
          }

          .venue-contact-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .contact-hero {
            min-height: 650px;

            background-position:
              62%
              center;
          }

          .hero-content {
            padding-top: 145px;
          }

          .hero-copy h1 {
            font-size: 4rem;
          }

          .hero-actions {
            flex-direction: column;

            width: 100%;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
          }

          .contact-section,
          .venue-contact {
            padding-top: 75px;
            padding-bottom: 80px;
          }

          .contact-card {
            grid-template-columns:
              46px
              1fr;

            gap: 15px;
          }

          .card-arrow {
            display: none;
          }

          .contact-card h3 {
            font-size: 1.25rem;
          }

          .request-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}