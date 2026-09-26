import type { TFunction } from "i18next";
import useDocumentTitle from "../hooks/useDocumentTitle";

interface PageProps {
  pageName: string;
  t: TFunction;
  darkMode: boolean;
  language: "en" | "pt";
}

const Resume: React.FC<PageProps> = ({ pageName, darkMode, t, language }) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | Resume");

  // Obtem arrays do JSON de tradução
  const experienceList = t("resume.experience_list", { returnObjects: true }) as {
    role: string;
    company: string;
    period: string;
    description: string[];
  }[];

  const educationList = t("resume.education_list", { returnObjects: true }) as string[];
  const certificationList = t("resume.certification_list", { returnObjects: true }) as string[];
  const skillsList = t("resume.skills_list", { returnObjects: true }) as string[];
  const languageList = t("resume.language_list", { returnObjects: true }) as string[];
  const resumeUrl = `${import.meta.env.BASE_URL}cv/${language === "pt" ? "Curriculo_Vagner_Matias_Portuguese.pdf" : "Curriculo_Vagner_Matias_English.docx"}`;
  return (
    <div className={`page-shell portfolio-container ${darkMode ? "is-dark" : ""}`}>
      <header className="page-intro">
        <p className="section-heading__eyebrow">{t("header.resume")}</p>
        <h1>{t("resume.title")}</h1>
        <p className="prose">{t("resume.summary")}</p>
        <div className="hero__actions">
          <a className="portfolio-button" href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
            {t("resume.download")}
          </a>
          <a className="portfolio-button portfolio-button--secondary" href="#experience-title">
            {t("resume.viewOnline")}
          </a>
        </div>
      </header>
      <section className="resume-layout" aria-labelledby="experience-title">
        <div className="resume-section">
          <h2 id="experience-title">{t("resume.experience")}</h2>
          {experienceList.map((exp) => (
            <article className="experience-item" key={`${exp.company}-${exp.role}`}>
              <p className="experience-item__period">{exp.period}</p>
              <h3>{exp.role}</h3>
              <p>{exp.company}</p>
              <ul>{exp.description.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <aside className="resume-section resume-section--sidebar">
          <h2>{t("resume.education")}</h2>
          <div className="content-panel">
            <ul>{educationList.map((edu) => <li key={edu}>{edu}</li>)}</ul>
          </div>
          <div className="content-panel">
            <h3>{t("resume.certifications")}</h3>
            <ul>{certificationList.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="content-panel">
            <h3>{t("resume.skills")}</h3>
            <ul>{skillsList.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="content-panel">
            <h3>{t("resume.languages")}</h3>
            <ul>{languageList.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Resume;
