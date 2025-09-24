import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Nav,
  NavItem,
} from "reactstrap";
import { FaSun, FaMoon, FaLinkedin, FaEnvelope } from "react-icons/fa";
import type { i18n, TFunction } from "i18next";
import { PageWrapper } from "./PageWrapper";

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
  t: TFunction;
  i18n: i18n;
  toggleLanguage: () => void;
}

const Header = ({ toggleTheme, darkMode, t, i18n, toggleLanguage }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => setIsOpen(!isOpen);

  return (
    <Navbar color={darkMode ? "dark" : "light"} dark={darkMode} fixed="top">
      <PageWrapper language={i18n.language}>
        <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand tag={Link} to="/">
            {t("header.brand")}
          </NavbarBrand>
          <div className="d-flex align-items-center">
            {/* Botão de idioma */}
            <button className="btn btn-outline-primary lang-btn me-2" onClick={toggleLanguage}>
              {i18n.language === "en" ? "PT" : "EN"}
            </button>

            {/* Switch de tema */}
            <label className="dark-mode-switch mb-0 me-2 fs-6">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
              <span className="dark-mode-slider">
                <div className="icon-wrapper">
                  {darkMode ? <FaMoon size={14} color="#C5C5C5" /> : <FaSun size={14} color="#f1c40f" />}
                </div>
              </span>
            </label>

            {/* Ícones sociais */}
            <a
              href="https://www.linkedin.com/in/vagner-da-silva-matias-967899263/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
              title="LinkedIn"
            >
              <FaLinkedin size={25} color={darkMode ? "#fff" : "#0A66C2"} />
            </a>
            <a
              href="mailto:vagnerimperador16@gmail.com"
              className="me-2"
              title="Email"
            >
              <FaEnvelope size={25} color={darkMode ? "#fff" : "#333"} />
            </a>

            {/* Botão hamburguer */}
            <NavbarToggler onClick={toggleOffcanvas} className="custom-toggler" />

          </div>
        </Container>
      </PageWrapper>

      {/* Menu lateral */}
      <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas} direction="end" className={`${darkMode ? "bg-dark text-light" : ""}`}>
        <OffcanvasHeader toggle={toggleOffcanvas}>{t("header.brand")}</OffcanvasHeader>
        <OffcanvasBody>
          <Nav navbar className="flex-column">
            <NavItem>
              <Link className="nav-link" to="/resume" onClick={toggleOffcanvas}>
                {t("header.resume")}
              </Link>
              <Link className="nav-link" to="/about" onClick={toggleOffcanvas}>
                {t("header.about")}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/projects" onClick={toggleOffcanvas}>
                {t("header.projects")}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/college" onClick={toggleOffcanvas}>
                {t("header.college")}
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact" onClick={toggleOffcanvas}>
                {t("header.contact")}
              </Link>
            </NavItem>
          </Nav>
        </OffcanvasBody>
      </Offcanvas>
    </Navbar>
  );
};

export default Header;
