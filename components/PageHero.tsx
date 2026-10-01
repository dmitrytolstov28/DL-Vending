import Navbar from "@/components/Navbar";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
}: PageHeroProps) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(3, 3, 3, 0.96) 0%,
            rgba(3, 3, 3, 0.78) 40%,
            rgba(3, 3, 3, 0.3) 75%
          ),
          linear-gradient(
            to top,
            rgba(5,5,5,.92),
            transparent 50%
          ),
          url("${image}")
        `,
      }}
    >
      <Navbar />

      <div className="container page-hero-content">
        <p className="section-eyebrow">
          {eyebrow}
        </p>

        <h1 className="display-font">
          {title}
        </h1>

        <p className="page-hero-description">
          {description}
        </p>
      </div>

      <style>{`
        .page-hero {
          position: relative;
          min-height: 620px;

          display: flex;
          align-items: flex-end;

          background-size: cover;
          background-position: center;

          padding-bottom: 95px;
        }

        .page-hero-content {
          position: relative;
          z-index: 2;

          padding-top: 160px;
        }

        .page-hero h1 {
          max-width: 850px;

          margin: 14px 0 22px;

          font-size: clamp(
            3.8rem,
            7vw,
            7rem
          );

          font-weight: 500;
          line-height: 0.9;
          letter-spacing: -0.035em;
        }

        .page-hero-description {
          max-width: 660px;

          margin: 0;

          color: #d5d0c8;

          font-size: 1.02rem;
          line-height: 1.75;
        }

        @media (max-width: 650px) {
          .page-hero {
            min-height: 560px;
            padding-bottom: 65px;
          }

          .page-hero h1 {
            font-size: 3.7rem;
          }
        }
      `}</style>
    </section>
  );
}