import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import css from "./TravelBlogMain.module.scss";
import soc1 from "../../assets/TravelBlogDetailsPageImages/facebookIcon.svg";
import soc2 from "../../assets/TravelBlogDetailsPageImages/instagramIcon.svg";
import soc3 from "../../assets/TravelBlogDetailsPageImages/linkedInIcon.svg";
import soc4 from "../../assets/TravelBlogDetailsPageImages/twitterIcon.svg";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

function TravelBlogMain() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <div className={css.wrapperMain}>
        <div className={css.textContent}>
          <b>{t("TBMwtb")}</b>
          <h1>{t("TBMwth1")}</h1>
          <p>{t("TBMwtp")}</p>
          <div>
            <img src={soc1} alt="" />
            <img src={soc2} alt="" />
            <img src={soc3} alt="" />
            <img src={soc4} alt="" />
          </div>
        </div>
      </div>
      <div className={css.bottomTextContent}>
        <Link
          className={cn({
            grey_text: isDark,
          })}
          to="/"
        >
          {t("headHome")}
        </Link>
        <p
          className={cn({
            grey_text: isDark,
          })}
        >
          ❯
        </p>
        <Link
          className={cn({
            grey_text: isDark,
          })}
          to="/blogpage"
        >
          {t("blog")}
        </Link>
        <p
          className={cn({
            grey_text: isDark,
          })}
        >
          ❯
        </p>
        <b>{t("TBMwbb")}</b>
      </div>
    </>
  );
}

export default TravelBlogMain;
