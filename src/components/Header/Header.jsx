import css from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { useTranslation } from "react-i18next";
import sun from "../../assets/icon/sun.png";
import moon from "../../assets/icon/moon.png";
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { useState } from "react";


const lngs = {
  en: { nativeName: "Eng" },
  ru: { nativeName: "Rus" },
};

function Header() {
  const { t, i18n } = useTranslation();
  const { isDark, setIsDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <img src={logo} alt="" />
          <a href="">{t("headHome")}</a>
          <a href="">{t("headComp")}</a>
          <a href="">{t("headPage")}</a>
          <a href="">{t("headDocum")}</a>
        </div>
        <div className={css.right}>
          <div className={css.leftContent}>
            <div className={css.toogleTheme}>
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
              </button>
            </div>
            <div className={css.langButton}>
              {Object.keys(lngs).map((lng) => (
                <button
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </div>
          <button className={css.login}>{t("headLogBtn")}</button>
          <button className={css.joinUs}>{t("headJoinBtn")}</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
