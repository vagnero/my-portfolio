import { useState } from 'react';

export function useAlterMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return { darkMode, toggleTheme };
}