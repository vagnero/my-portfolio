import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAlterMode } from "./hooks/useAlterMode";
import useAlterLanguage from "./hooks/useAlterLanguage";
import { useTranslation } from "react-i18next";
function App() {
  const { darkMode, toggleTheme } = useAlterMode();
  const { toggleLanguage } = useAlterLanguage();
  const { t, i18n } = useTranslation();


  return (
    <HashRouter>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} t={t} i18n={i18n} toggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer darkMode={darkMode} />

    </HashRouter>
  );
}

export default App;
