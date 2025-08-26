import { useTranslation } from "react-i18next";


const useAlterLanguage = () => {
    useTranslation();

    const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };
  return {toggleLanguage };
};

export default useAlterLanguage;
