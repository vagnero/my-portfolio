import useDocumentTitle from "../hooks/useDocumentTitle";
import type { TFunction } from "i18next";

interface PageProps {
  pageName: string;
  t: TFunction;
}

interface AboutHighlight {
  title: string;
  text: string;
}

const About: React.FC<PageProps> = ({ pageName, t }) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | About");
  const highlights = t("portfolio.about.highlights", { returnObjects: true }) as AboutHighlight[];
  const certificatePdf = `${import.meta.env.BASE_URL}certificates/AWS Certified Data Engineer - Associate certificate.pdf`;
  return (
    <div className="page-shell portfolio-container">
      <header className="page-intro">
        <p className="section-heading__eyebrow">{t("portfolio.about.eyebrow")}</p>
        <h1>{t("portfolio.about.title")}</h1>
        <p className="prose">{t("portfolio.about.text")}</p>
      </header>

      <section className="about-highlight-grid" aria-label={t("portfolio.about.title")}>
        <article className="content-panel about-highlight about-highlight--primary">
          <p className="content-panel__label">{t("portfolio.about.focusLabel")}</p>
          <h2>{t("portfolio.about.focusTitle")}</h2>
          <p className="prose">{t("portfolio.about.focusText")}</p>
        </article>
        <article className="content-panel about-highlight">
          <p className="content-panel__label">{t("portfolio.about.certificationLabel")}</p>
          <h2>{t("portfolio.about.certificationTitle")}</h2>
          <p className="prose">{t("portfolio.about.certificationText")}</p>
          <a className="portfolio-button portfolio-button--secondary" href={certificatePdf} target="_blank" rel="noopener noreferrer">
            {t("portfolio.about.certificationAction")}
          </a>
        </article>
      </section>

      <section className="about-details" aria-labelledby="about-details-title">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{t("portfolio.about.approachLabel")}</p>
          <h2 id="about-details-title">{t("portfolio.about.approachTitle")}</h2>
          <p>{t("portfolio.about.approachText")}</p>
        </div>
        <div className="about-highlight-grid">
          {highlights.map((highlight) => (
            <article className="content-panel" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p className="prose">{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-panel about-education" aria-labelledby="about-background-title">
        <p className="content-panel__label">{t("portfolio.about.educationLabel")}</p>
        <h2 id="about-background-title">{t("resume.education")}</h2>
        <ul>
          {(t("resume.education_list", { returnObjects: true }) as string[]).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}

export default About;
