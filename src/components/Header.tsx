import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import type { i18n, TFunction } from "i18next";

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
  t: TFunction;
  i18n: i18n;
  toggleLanguage: () => void;
}

const Header = ({ toggleTheme, darkMode, t, i18n, toggleLanguage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="portfolio-container site-header__inner">
        <Link className="site-header__brand" to="/" onClick={closeMenu}>
          {t("header.brand")}
        </Link>

        <button
          type="button"
          className="site-header__menu-button"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={toggleMenu}
        >
          <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
        </button>

        <nav id="site-navigation" className={`site-header__navigation ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <Link to="/" onClick={closeMenu}>{t("header.home")}</Link>
          <Link to="/projects" onClick={closeMenu}>{t("header.projects")}</Link>
          <Link to="/resume" onClick={closeMenu}>{t("header.resume")}</Link>
          <Link to="/about" onClick={closeMenu}>{t("header.about")}</Link>
          <Link to="/contact" onClick={closeMenu}>{t("header.contact")}</Link>
          <Link to="/college" onClick={closeMenu}>{t("header.college")}</Link>
        </nav>

        <div className="site-header__actions">
          <button type="button" className="site-header__text-button" onClick={toggleLanguage}>
            {i18n.language === "en" ? "PT" : "EN"}
          </button>
          <button
            type="button"
            className="site-header__icon-button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Use light theme" : "Use dark theme"}
          >
            {darkMode ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>
          <a className="site-header__icon-button" href="https://www.linkedin.com/in/vagner-da-silva-matias-967899263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a className="site-header__icon-button" href="https://github.com/?locale=pt-br" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub aria-hidden="true" />
          </a>
          <a className="site-header__icon-button" href="mailto:vagner_matias1@outlook.com" aria-label="Email">
            <FaEnvelope aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
