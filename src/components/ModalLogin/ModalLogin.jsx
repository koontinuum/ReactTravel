import React from "react";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";
import css from "./ModalLogin.module.scss";
import { useTranslation } from "react-i18next";
import fb from "../../assets/icon/fbDark.png";
import ins from "../../assets/icon/insDark.png";
import inDark from "../../assets/icon/inDark.png";
import twitDark from "../../assets/icon/twitDark.png";
import face from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import IN from "../../assets/in.svg";
import twitter from "../../assets/twitter.svg";

const ModalLogin = ({setOpenLog, openLog}) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  return (
    <div
      className={cn(css.wrapper_log, {
        card_tour: isDark,
      })}
    >
      <h3>
        {t("modalLogin.title")}
        <button
          className={cn({
            card_tour: isDark,
          })}
          onClick={() => setOpenLog(!openLog)}
        >
          X
        </button>
      </h3>
      <p>{t("modalLogin.loginTit")}</p>
      <input
        className={cn({
          dark_inp: isDark,
        })}
        type="text"
        placeholder={t("modalLogin.placholText")}
      />
      <p>{t("modalLogin.pass")}</p>
      <input
        className={cn(css.inpBorders, {
          dark_inp: isDark,
        })}
        placeholder={t("modalLogin.pass")}
        type="password"
      />
      <p>{t("modalLogin.or")}</p>
      {isDark ? (
        <div className={css.socials}>
          <img src={fb} alt="" />
          <img src={ins} alt="" />
          <img src={inDark} alt="" />
          <img src={twitDark} alt="" />
        </div>
      ) : (
        <div className={css.socials}>
          <img src={face} alt="" />
          <img src={insta} alt="" />
          <img src={IN} alt="" />
          <img src={twitter} alt="" />
        </div>
      )}
      <button>{t("modalLogin.login")}</button>
    </div>
  );
};

export default ModalLogin;
