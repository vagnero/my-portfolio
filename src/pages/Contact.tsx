import useDocumentTitle from "../hooks/useDocumentTitle";
import type { TFunction } from "i18next";

interface PageProps {
  pageName: string;
  t: TFunction;
}

const Contact: React.FC<PageProps> = ({ pageName, t }) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | Contact");

  return (
    <div className="page-shell portfolio-container">
      <header className="page-intro">
        <p className="section-heading__eyebrow">{t("portfolio.contact.eyebrow")}</p>
        <h1>{t("portfolio.contact.title")}</h1>
        <p className="prose">{t("portfolio.contact.text")}</p>
      </header>
      <section className="content-panel contact-list" aria-label={t("portfolio.contact.title")}>
        <a className="portfolio-button" href="mailto:vagner_matias1@outlook.com">{t("portfolio.contact.email")}</a>
        <a className="portfolio-button portfolio-button--secondary" href="https://www.linkedin.com/in/vagner-da-silva-matias-967899263/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="portfolio-button portfolio-button--secondary" href="https://github.com/?locale=pt-br" target="_blank" rel="noopener noreferrer">GitHub</a>
      </section>
    </div>
  );
}
export default Contact;