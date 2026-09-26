import type { TFunction } from "i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import CertificationCard from "../components/home/CertificationCard";
import SectionHeading from "../components/home/SectionHeading";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface PageProps {
  pageName: string;
  t: TFunction;
  darkMode: boolean;
  language: "en" | "pt";
}

interface TechnologyGroup {
  title: string;
  items: string[];
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const Home = ({ pageName, t, language }: PageProps) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | Data Engineer");

  const technologyGroups = t("portfolio.technologies.groups", { returnObjects: true }) as TechnologyGroup[];
  const experienceList = t("resume.experience_list", { returnObjects: true }) as ExperienceItem[];
  const linkedinUrl = "https://www.linkedin.com/in/vagner-da-silva-matias-967899263/";
  const githubUrl = "https://github.com/?locale=pt-br";
  const emailUrl = "mailto:vagner_matias1@outlook.com";
  const certificatePdf = assetPath("certificates/AWS Certified Data Engineer - Associate certificate.pdf");
  const certificateImage = assetPath("certificates/AWSDataEngineeringAssociate.png");
  const resumeUrl = assetPath(language === "pt"
    ? "cv/Curriculo_Vagner_Matias_Portuguese.pdf"
    : "cv/Curriculo_Vagner_Matias_English.docx");

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="portfolio-container hero__grid">
          <div>
            <p className="hero__eyebrow">{t("portfolio.hero.eyebrow")}</p>
            <h1 id="hero-title">Vagner da Silva Matias</h1>
            <p className="hero__role">{t("portfolio.hero.role")}</p>
            <p className="hero__summary">{t("portfolio.hero.summary")}</p>
            <div className="hero__actions">
              <Link className="portfolio-button" to="/projects">
                {t("portfolio.hero.primaryAction")}
              </Link>
              <a className="portfolio-button portfolio-button--secondary" href={resumeUrl} download>
                {t("portfolio.hero.resumeAction")}
              </a>
            </div>
            <nav className="social-links" aria-label="Professional profiles">
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin aria-hidden="true" /> {t("portfolio.hero.linkedin")}
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> {t("portfolio.hero.github")}
              </a>
            </nav>
          </div>
          <aside className="hero__proof" aria-labelledby="certification-proof-title">
            <p className="hero__proof-label">{t("portfolio.certification.eyebrow")}</p>
            <h2 id="certification-proof-title">{t("portfolio.certification.title")}</h2>
            <a href={certificatePdf} target="_blank" rel="noopener noreferrer">
              <img src={certificateImage} alt={t("portfolio.certification.title")} />
            </a>
            <a className="portfolio-button" href={certificatePdf} target="_blank" rel="noopener noreferrer">
              {t("portfolio.certification.view")}
            </a>
          </aside>
        </div>
      </section>

      <div className="portfolio-main">
        <section className="portfolio-section" id="technologies" aria-labelledby="technologies-title">
          <div className="portfolio-container">
            <SectionHeading
              eyebrow={t("portfolio.technologies.eyebrow")}
              title={t("portfolio.technologies.title")}
              description={t("portfolio.technologies.description")}
              id="technologies-title"
            />
            <div className="technology-grid">
              {technologyGroups.map((group) => (
                <article className="content-panel" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="technology-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-section--tinted" id="experience" aria-labelledby="experience-title">
          <div className="portfolio-container">
            <SectionHeading
              eyebrow={t("portfolio.experience.eyebrow")}
              title={t("portfolio.experience.title")}
              description={t("portfolio.experience.description")}
              id="experience-title"
            />
            <div className="experience-grid">
              {experienceList.map((experience) => (
                <article className="experience-item" key={`${experience.company}-${experience.role}`}>
                  <p className="experience-item__period">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                  <ul>
                    {experience.description.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-section" id="projects" aria-labelledby="projects-title">
          <div className="portfolio-container">
            <SectionHeading
              eyebrow={t("portfolio.projects.eyebrow")}
              title={t("portfolio.projects.title")}
              description={t("portfolio.projects.description")}
              id="projects-title"
            />
            <div className="project-grid">
              <article className="project-card">
                <a className="project-card__image-link" href="https://github.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready" target="_blank" rel="noopener noreferrer">
                  <img
                    className="project-card__image"
                    src="https://raw.githubusercontent.com/vagnero/Desafio-Tecnico-Engenheiro-de-Dados-Cloud-Ready/main/src/images/desafio-engenharia-de-dados.jpg"
                    alt={t("portfolio.projects.batchPipeline.imageAlt")}
                  />
                </a>
                <p className="project-card__meta">{t("portfolio.projects.batchPipeline.meta")}</p>
                <h3>{t("portfolio.projects.batchPipeline.title")}</h3>
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
            </div>
            <p><Link className="inline-link" to="/projects">{t("portfolio.projects.openProjects")}</Link></p>
          </div>
        </section>

        <section className="portfolio-section portfolio-section--tinted" id="certifications" aria-labelledby="certifications-title">
          <div className="portfolio-container">
            <SectionHeading eyebrow={t("portfolio.certification.eyebrow")} title={t("portfolio.certification.title")} id="certifications-title" />
            <CertificationCard
              title={t("portfolio.certification.title")}
              issuer={t("portfolio.certification.issuer")}
              description={t("portfolio.certification.description")}
              viewLabel={t("portfolio.certification.view")}
              downloadLabel={t("portfolio.certification.download")}
              imagePath={certificateImage}
              pdfPath={certificatePdf}
            />
          </div>
        </section>

        <section className="portfolio-section" id="about" aria-labelledby="about-title">
          <div className="portfolio-container content-grid">
            <SectionHeading eyebrow={t("portfolio.about.eyebrow")} title={t("portfolio.about.title")} id="about-title" />
            <div className="content-panel">
              <p className="prose">{t("portfolio.about.text")}</p>
              <Link className="inline-link" to="/about">{t("portfolio.about.action")}</Link>
            </div>
          </div>
        </section>

        <section className="portfolio-section portfolio-section--tinted" id="contact" aria-labelledby="contact-title">
          <div className="portfolio-container">
            <SectionHeading eyebrow={t("portfolio.contact.eyebrow")} title={t("portfolio.contact.title")} description={t("portfolio.contact.text")} id="contact-title" />
            <div className="social-links">
              <a className="portfolio-button" href={emailUrl}>{t("portfolio.contact.email")}</a>
              <a className="portfolio-button portfolio-button--secondary" href={linkedinUrl} target="_blank" rel="noopener noreferrer">{t("portfolio.hero.linkedin")}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
