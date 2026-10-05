import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestMachineForm from "@/components/RequestMachineForm";

export const metadata: Metadata = {
  title: "Request a Machine | DL Vending",
  description:
    "Request a DL Vending machine for your qualifying 21+ nightlife venue.",
};

export default function RequestMachinePage() {
  return (
    <>
      <main>
        <section className="request-hero">
          <Navbar />

          <div className="hero-overlay" />

          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow">
                Request a DL Vending Machine
              </p>

              <h1 className="display-font">
                Bring vending
                <br />
                <span>to your venue.</span>
              </h1>

              <p>
                Tell us a little about your location and
                we&apos;ll review whether DL Vending could be
                a good fit for your venue.
              </p>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="container form-grid">
            <div className="form-intro">
              <p className="eyebrow">
                Venue Application
              </p>

              <h2 className="display-font">
                Tell us about
                <br />
                your venue.
              </h2>

              <p>
                Complete the form with your venue information.
                We&apos;ll review the location, venue type, and
                overall fit before discussing next steps.
              </p>

              <div className="expectations">
                <div className="expectation">
                  <span>01</span>

                  <div>
                    <h3>Submit your information</h3>
                    <p>
                      Tell us about your venue and how we can
                      reach you.
                    </p>
                  </div>
                </div>

                <div className="expectation">
                  <span>02</span>

                  <div>
                    <h3>We review the location</h3>
                    <p>
                      We determine whether the venue is a good
                      operational and placement fit.
                    </p>
                  </div>
                </div>

                <div className="expectation">
                  <span>03</span>

                  <div>
                    <h3>We contact you</h3>
                    <p>
                      If it looks like a fit, we&apos;ll reach
                      out to discuss placement and next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-panel">
              <RequestMachineForm />
            </div>
          </div>
        </section>

        <section className="bottom-section">
          <div className="container bottom-inner">
            <div>
              <p className="eyebrow">
                Questions First?
              </p>

              <h2 className="display-font">
                Not ready to submit
                <br />
                <span>the form yet?</span>
              </h2>

              <p>
                Reach out to us directly and we can answer any
                questions about DL Vending or the placement
                process.
              </p>
            </div>

            <a
              href="mailto:dlvendingcompany@gmail.com"
              className="email-button"
            >
              dlvendingcompany@gmail.com
            </a>
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

        .request-hero {
          position: relative;
          min-height: 720px;

          display: flex;
          align-items: center;

          background:
            url("/images/request-machine-hero.png");

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
              rgba(3, 5, 10, 0.28) 67%,
              rgba(3, 5, 10, 0.16) 100%
            ),
            linear-gradient(
              to top,
              rgba(3, 5, 10, 0.55),
              transparent 48%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;

          padding-top: 140px;
          padding-bottom: 90px;
        }

        .hero-copy {
          max-width: 660px;
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

        .hero-copy > p:not(.eyebrow) {
          max-width: 560px;

          margin: 0;

          color: #d0cbc3;

          font-size: 0.98rem;
          line-height: 1.78;
        }

        .form-section {
          padding: 105px 0;

          background:
            linear-gradient(
              180deg,
              #07080c,
              #050505
            );

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .form-grid {
          display: grid;

          grid-template-columns:
            0.8fr
            1.2fr;

          gap: 90px;

          align-items: start;
        }

        .form-intro {
          position: sticky;
          top: 50px;
        }

        .form-intro h2 {
          margin: 14px 0 20px;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .form-intro > p:not(
          .eyebrow
        ) {
          max-width: 470px;

          margin: 0;

          color: #969198;

          font-size: 0.9rem;
          line-height: 1.8;
        }

        .expectations {
          margin-top: 42px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .expectation {
          display: grid;

          grid-template-columns:
            52px
            1fr;

          gap: 17px;

          padding: 22px 0;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.09);
        }

        .expectation > span {
          color: var(--gold-light);

          font-family: var(--font-display);

          font-size: 1.35rem;
        }

        .expectation h3 {
          margin: 0 0 6px;

          color: #eee9df;

          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .expectation p {
          max-width: 340px;

          margin: 0;

          color: #858188;

          font-size: 0.79rem;
          line-height: 1.68;
        }

        .form-panel {
          padding: 35px;

          border: 1px solid
            rgba(224, 180, 95, 0.16);

          background:
            rgba(10, 10, 12, 0.9);
        }

        .bottom-section {
          padding: 90px 0;

          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(20, 72, 110, 0.12),
              transparent 42%
            ),
            #060608;

          border-top: 1px solid
            rgba(224, 180, 95, 0.12);
        }

        .bottom-inner {
          display: flex;

          align-items: flex-end;
          justify-content: space-between;

          gap: 50px;
        }

        .bottom-inner h2 {
          margin: 14px 0 16px;

          font-size: clamp(
            3rem,
            4.8vw,
            4.8rem
          );

          font-weight: 500;
          line-height: 0.95;
        }

        .bottom-inner h2 span {
          color: var(--gold-light);
        }

        .bottom-inner p:not(
          .eyebrow
        ) {
          max-width: 530px;

          margin: 0;

          color: #969198;

          font-size: 0.9rem;
          line-height: 1.75;
        }

        .email-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 50px;

          padding: 0 22px;

          border: 1px solid
            rgba(224, 180, 95, 0.5);

          color: var(--gold-light);

          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.07em;

          transition:
            background 150ms ease,
            color 150ms ease;
        }

        .email-button:hover {
          background: var(--gold);
          color: #111;
        }

        @media (max-width: 900px) {
          .form-grid {
            grid-template-columns: 1fr;

            gap: 50px;
          }

          .form-intro {
            position: static;
          }

          .bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .request-hero {
            min-height: 650px;

            background-position:
              67%
              center;
          }

          .hero-content {
            padding-top: 145px;
          }

          .hero-copy h1 {
            font-size: 3.9rem;
          }

          .form-section,
          .bottom-section {
            padding-top: 75px;
            padding-bottom: 80px;
          }

          .form-panel {
            padding: 22px;
          }

          .email-button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}