import type { i18n, TFunction } from "i18next";
interface FooterProps {
  darkMode: boolean;
  t: TFunction;
  i18n: i18n;
}

export default function Footer({ darkMode, t }: FooterProps) {
  return (
    <footer className={`portfolio-footer ${darkMode ? "is-dark" : ""}`}>
      <div className="portfolio-container portfolio-footer__inner">
        <p>© {new Date().getFullYear()} - {t("footer.footerText")}</p>
        <nav aria-label="Footer navigation">
          <a href="https://www.linkedin.com/in/vagner-matias-967899263/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:vagner_matias1@outlook.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
