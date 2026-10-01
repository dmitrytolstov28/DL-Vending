import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Venues",
    href: "/for-bar-owners",
  },
  {
    label: "About",
    href: "/why-partner",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy",
    href: "/privacy",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-brand-area">
            <Link
              href="/"
              className="footer-brand"
              aria-label="DL Vending Home"
            >
              <Image
                src="/images/dl-vending-logo.png"
                alt="DL Vending"
                width={240}
                height={110}
                className="footer-logo"
              />
            </Link>

            <p>
              Fully managed vending solutions for
              qualifying 21+ nightlife venues.
            </p>
          </div>

          <nav className="footer-nav">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="container footer-bottom">
          <p>
            Illinois-based vending solutions for
            qualifying nightlife venues.
          </p>

          <a
            href="mailto:dlvendingcompany@gmail.com"
            className="footer-email"
          >
            dlvendingcompany@gmail.com
          </a>

          <p>
            © 2026 DL Vending. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .site-footer {
          border-top: 1px solid
            rgba(224, 180, 95, 0.13);

          background: #040404;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 40px;

          padding-top: 35px;
          padding-bottom: 30px;
        }

        .footer-brand-area {
          max-width: 330px;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
        }

        .footer-logo {
          width: 165px;
          height: 75px;

          object-fit: contain;
          object-position: left center;
        }

        .footer-brand-area p {
          max-width: 290px;

          margin: 10px 0 0;

          color: #77736d;

          font-size: 0.74rem;
          line-height: 1.65;
        }

        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;

          gap: 22px;
        }

        .footer-link {
          color: #9d988f;

          font-size: 0.71rem;
          font-weight: 600;

          letter-spacing: 0.13em;
          text-transform: uppercase;

          transition: color 150ms ease;
        }

        .footer-link:hover {
          color: var(--gold-light);
        }

        .footer-bottom {
          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;
          gap: 25px;

          padding-top: 18px;
          padding-bottom: 30px;

          border-top: 1px solid
            rgba(255, 255, 255, 0.06);
        }

        .footer-bottom p,
        .footer-email {
          margin: 0;

          color: #68645e;

          font-size: 0.72rem;
        }

        .footer-email {
          transition: color 150ms ease;
        }

        .footer-email:hover {
          color: var(--gold-light);
        }

        .footer-bottom p:last-child {
          text-align: right;
        }

        @media (max-width: 800px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-nav {
            justify-content: flex-start;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
          }

          .footer-bottom p:last-child {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
}