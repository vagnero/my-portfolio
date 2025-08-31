import { Link } from "react-router-dom";
import { Container, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FaSun, FaMoon } from "react-icons/fa";
import type { i18n, TFunction } from "i18next";
interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
  t: TFunction;
  i18n: i18n;
  toggleLanguage: () => void;
}

const Header = ({ toggleTheme, darkMode, t, i18n, toggleLanguage }: HeaderProps) => {



  return (
<Navbar color={darkMode ? "dark" : "light"} dark={darkMode} expand="md">
  <Container className="d-flex justify-content-between align-items-center">

    {/* Lado esquerdo: Brand + NavItems */}
    <div className="d-flex align-items-center">
          <NavbarBrand tag={Link} to="/">{t("brand")}</NavbarBrand>
          <Nav navbar className="ms-3 d-flex align-items-center">
            <NavItem><Link className="nav-link" to="/about">{t("about")}</Link></NavItem>
            <NavItem><Link className="nav-link" to="/projects">{t("projects")}</Link></NavItem>
            <NavItem><Link className="nav-link" to="/contact">{t("contact")}</Link></NavItem>
      </Nav>
    </div>

    {/* Lado direito: Dark Mode Switch */}
    <div>

<label className="dark-mode-switch mb-0">
  <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
  <span className="dark-mode-slider">
    <div className="icon-wrapper">
      {darkMode ? <FaMoon size={14} color="#C5C5C5" /> : <FaSun size={14} color="#f1c40f" />}
    </div>
  </span>
</label>
          <button className="btn btn-outline-primary ms-3" onClick={toggleLanguage}>
          {i18n.language === "en" ? "PT" : "EN"}
        </button>
    </div>

  </Container>
</Navbar>

  );
}

export default Header;
