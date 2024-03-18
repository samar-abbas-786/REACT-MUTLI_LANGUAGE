import React, { useEffect } from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "French" },
  { code: "hi", name: "Hindi" },
  { code: "ar", name: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    console.log(i18n.dir());
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div>
      <div className="btn-container">
        {languages.map((lng) => {
          return (
            <button
              className={lng.code === i18n.language ? "selected" : ""}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
            >
              {lng.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default LanguageSelector;
