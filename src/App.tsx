import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useAlterMode } from "./hooks/useAlterMode";
function App() {
  const { darkMode, toggleTheme } = useAlterMode();

  return (
    <HashRouter>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
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
