import React from "react";
import { useTranslation } from "react-i18next";
import css from "./Footer.module.scss";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";
import right from "../../assets/arrow.svg";
import face from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import IN from "../../assets/in.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/logo.svg";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";
import logodark from "../../assets/icon/Logodark.png";
import fb from "../../assets/icon/fbDark.png";
import ins from "../../assets/icon/insDark.png";
import inDark from "../../assets/icon/inDark.png";
import twitDark from "../../assets/icon/twitDark.png";
import messDark from "../../assets/icon/messDark.png";
import locDark from "../../assets/icon/locDark.png";

function Footer() {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <hr />
      <div className={css.newSettler}>
        <div className={css.newSettlerInfo}>
        </div>
      </div>
      <div className={css.zone}>
        {isDark ? (
          <img className={css.logo} src={logodark} alt="" />
        ) : (
          <img className={css.logo} src={logo} alt="" />
        )}
        <div className={css.contacts}>
          <p className={css.contactText}>{t("footercp")}</p>
          <div className={css.how2Find}>
            <div className={css.Email}>
              {isDark ? (
                <img src={messDark} alt="" />
              ) : (
                <img src={mail} alt="" />
              )}
              <p
                className={cn("Layout", {
                  dark_text: isDark,
                })}
              >
                info@example.com
              </p>
            </div>
            <div className={css.place}>
              {isDark ? (
                <img src={locDark} alt="" />
              ) : (
                <img src={location} alt="" />
              )}
              <p
                className={cn("Layout", {
                  dark_text: isDark,
                })}
              >
                655 Schaefer Dale
              </p>
            </div>
          </div>
          <div className={css.inputContact}>
            <input type="text" placeholder={t("footeriCi")} />
            <button className={css.inputBtn}>
              <img src={right} alt="" />
            </button>
          </div>
        </div>

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

        <div className={css.service}>
          <p className={css.copyright}>{t("footersp")}</p>
          <div className={css.feedBack}>
            <p className={css.copyright}>{t("footersp2")}</p>
            <p className={css.copyright}>{t("footersp3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
