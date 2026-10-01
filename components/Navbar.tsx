import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navLinks = [
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
];

export default function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-shell">
          <Link
            href="/"
            className="brand"
            aria-label="DL Vending Home"
          >
            <Image
              src="/images/dl-vending-logo.png"
              alt="DL Vending"
              width={260}
              height={120}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/request-a-machine"
            className="nav-cta"
          >
            Request a Machine
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <style>{`
        .site-header {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 20;
          width: 100%;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.07);

          background: rgba(3, 3, 3, 0.62);
          backdrop-filter: blur(12px);
        }

        .nav-shell {
          min-height: 90px;

          display: grid;
          grid-template-columns:
            265px
            1fr
            auto;

          align-items: center;
          gap: 28px;
        }

        .brand {
          display: flex;
          align-items: center;

          width: fit-content;
          height: 86px;
        }

        .brand-logo {
          width: 225px;
          height: 82px;

          object-fit: contain;
          object-position: left center;
        }

        .desktop-nav {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 34px;
        }

        .nav-link {
          color: #ddd7cd;

          font-size: 0.74rem;
          font-weight: 600;

          letter-spacing: 0.17em;
          text-transform: uppercase;

          transition: color 150ms ease;
        }

        .nav-link:hover {
          color: var(--gold-light);
        }

        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          min-height: 44px;

          padding: 0 19px;

          border: 1px solid
            rgba(224, 180, 95, 0.65);

          color: var(--gold-light);

          font-size: 0.73rem;
          font-weight: 700;

          letter-spacing: 0.09em;
          text-transform: uppercase;

          transition:
            background 150ms ease,
            color 150ms ease,
            border-color 150ms ease;
        }

        .nav-cta:hover {
          background: var(--gold);
          border-color: var(--gold);

          color: #101010;
        }

        @media (max-width: 980px) {
          .nav-shell {
            grid-template-columns:
              1fr
              auto;
          }

          .desktop-nav {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .nav-shell {
            min-height: 78px;
          }

          .brand {
            height: 68px;
          }

          .brand-logo {
            width: 165px;
            height: 64px;
          }

          .nav-cta {
            padding: 0 12px;

            font-size: 0.64rem;
          }
        }
      `}</style>
    </>
  );
}