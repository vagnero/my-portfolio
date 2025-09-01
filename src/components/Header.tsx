import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { FaSun, FaMoon } from "react-icons/fa";
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

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (

    <Navbar color={darkMode ? "dark" : "light"} dark={darkMode} expand="md">
                  <PageWrapper language={i18n.language}>

      <Container className="d-flex justify-content-between align-items-center">
          <NavbarBrand tag={Link} to="/">{t("brand")}</NavbarBrand>

        {/* Botão hamburger */}
        <NavbarToggler onClick={toggleNavbar} />

        {/* Menu colapsável */}
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className="ms-auto d-flex align-items-center">
            <NavItem><Link className="nav-link" to="/about">{t("about")}</Link></NavItem>
            <NavItem><Link className="nav-link" to="/projects">{t("projects")}</Link></NavItem>
            <NavItem><Link className="nav-link" to="/college">{t("college")}</Link></NavItem>
            <NavItem><Link className="nav-link" to="/contact">{t("contact")}</Link></NavItem>

            {/* Switch de tema + botão de linguagem */}
            <NavItem className="d-flex align-items-center ms-3">
              <label className="dark-mode-switch mb-0 me-2">
                <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                <span className="dark-mode-slider">
                  <div className="icon-wrapper">
                    {darkMode ? <FaMoon size={14} color="#C5C5C5" /> : <FaSun size={14} color="#f1c40f" />}
                  </div>
                </span>
              </label>

              {/* Botão de idioma animado */}
          <button className="btn btn-outline-primary ms-3" onClick={toggleLanguage}>
          {i18n.language === "en" ? "PT" : "EN"}
        </button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
                  </PageWrapper>

    </Navbar>

  );
};

export default Header;
