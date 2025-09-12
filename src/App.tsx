import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "./store/slices/languageSlice";
import { toggleTheme } from "./store/slices/themeSlice";
import type { RootState } from "./store";
import React from "react";
import { PageWrapper } from "./components/PageWrapper";
import College from "./pages/College";
function App() {
  const dispatch = useDispatch();
  
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const language = useSelector((state: RootState) => state.language.language);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    i18n.changeLanguage(language);
    document.body.classList.toggle("dark", darkMode);
  }, [language, i18n, darkMode]);
  return (
    <HashRouter>
            <Header
        toggleTheme={() => dispatch(toggleTheme())}
        darkMode={darkMode}
        t={t}
        i18n={i18n}
        toggleLanguage={() => dispatch(toggleLanguage())}
      />
     
  <main>
    <PageWrapper language={language}>
      <Routes>
        <Route path="/" element={<Home pageName={t("header.home")} />} />
        <Route path="/about" element={<About pageName={t("header.about")} />} />
        <Route path="/projects" element={<Projects pageName={t("header.projects")} />} />
        <Route path="/contact" element={<Contact pageName={t("header.contact")} />} />
        <Route path="/college" element={<College pageName={t("header.college")} darkMode={darkMode} />} />
      </Routes>
    </PageWrapper>
  </main>

    <Footer darkMode={darkMode} t={t} i18n={i18n} />

  </HashRouter>
  );
}

export default App;
