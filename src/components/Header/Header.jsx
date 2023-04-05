import React, { useState } from "react";
import css from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import languageIcon from "../../assets/languageIcon.svg";
import { useTranslation } from "react-i18next";

const lngs = {
  en: { nativeName: "" },
  ru: { nativeName: "" },
};

function Header() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <img src={logo} alt="" />
          <a href="">{t("headHome")}</a>
          <a href="">{t("headComp")}</a>
          <a href="">{t("head")}</a>
          <a href="">{t("learn")}</a>
        </div>
        <div className={css.right}>
          <div className={css.leftContent}>
            <img src={searchIcon} alt="" />
            <div>
              {Object.keys(lngs).map((lng) => (
                <button
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  <img src={languageIcon} alt="" />
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </div>
          <button className={css.login}>Login</button>
          <button className={css.joinUs}>Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
