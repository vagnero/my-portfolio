import useDocumentTitle from "../hooks/useDocumentTitle";
import type { TFunction } from "i18next";
import { Link } from "react-router-dom";


interface PageProps {
  pageName: string;
  t: TFunction;
}

const Projects: React.FC<PageProps> = ({ pageName, t }) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | Projects");

  return (
    <div className="page-shell portfolio-container">
      <header className="page-intro">
        <p className="section-heading__eyebrow">{t("portfolio.projects.eyebrow")}</p>
        <h1>{t("portfolio.projects.title")}</h1>
        <p className="prose">{t("portfolio.projects.description")}</p>
      </header>
      <section className="project-grid" aria-label={t("portfolio.projects.title")}>
        <article className="project-card">
          <a className="project-card__image-link" href="https://github.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready" target="_blank" rel="noopener noreferrer">
            <img
              className="project-card__image"
              src="https://raw.githubusercontent.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready/main/src/images/desafio-engenharia-de-dados.jpg"
              alt={t("portfolio.projects.batchPipeline.imageAlt")}
            />
          </a>
          <p className="project-card__meta">{t("portfolio.projects.batchPipeline.meta")}</p>
          <h2>{t("portfolio.projects.batchPipeline.title")}</h2>
          <p className="prose">{t("portfolio.projects.batchPipeline.description")}</p>
          <div className="project-card__flow" aria-label={t("portfolio.projects.batchPipeline.flowLabel")}>
            {(t("portfolio.projects.batchPipeline.flow", { returnObjects: true }) as string[]).map((step) => <span key={step}>{step}</span>)}
          </div>
          <ul className="project-card__stack">
            {(t("portfolio.projects.batchPipeline.stack", { returnObjects: true }) as string[]).map((item) => <li key={item}>{item}</li>)}
          </ul>
          <div className="project-card__footer">
            <a className="portfolio-button" href="https://github.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready" target="_blank" rel="noopener noreferrer">{t("portfolio.projects.batchPipeline.code")}</a>
            <a className="portfolio-button portfolio-button--secondary" href="https://github.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready#arquitetura-do-projeto" target="_blank" rel="noopener noreferrer">{t("portfolio.projects.batchPipeline.readme")}</a>
          </div>
        </article>
      </section>
      <p className="page-back-link"><Link className="inline-link" to="/">{t("header.home")}</Link></p>
    </div>
  );
}

export default Projects;
