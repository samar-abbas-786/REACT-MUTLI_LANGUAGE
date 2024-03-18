import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import LanguageSelector from "./components/language-selector";
function App() {
  const { t } = useTranslation();
  const description = t("description");
  // console.log(description);
  return (
    <>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      {/* <p>{description}</p> */}
      <Trans
        i18nKey={"description"}
        values={{
          channel: "XYZ",
        }}
        components={{ 1: <b /> }}
      ></Trans>
    </>
  );
}

export default App;
