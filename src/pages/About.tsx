import useDocumentTitle from "../hooks/useDocumentTitle";
import type { TFunction } from "i18next";

interface PageProps {
  pageName: string;
  t: TFunction;
}

const About: React.FC<PageProps> = ({ pageName, t }) => {
  useDocumentTitle(pageName, "Vagner da Silva Matias | About");
  return (
    <div className="page-shell portfolio-container">
      <header className="page-intro">
        <p className="section-heading__eyebrow">{t("portfolio.about.eyebrow")}</p>
        <h1>{t("portfolio.about.title")}</h1>
        <p className="prose">{t("portfolio.about.text")}</p>
      </header>
      <section className="content-panel" aria-labelledby="about-background-title">
        <h2 id="about-background-title">{t("resume.education")}</h2>
        <ul>
          {(t("resume.education_list", { returnObjects: true }) as string[]).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}

export default About;
