import React from "react";
import css from "./LandingFrames.module.scss";
import blog1 from "../../assets/FramesContentImages/ic_travel_tickets.svg";
import blog2 from "../../assets/FramesContentImages/ic_travel_booking.svg";
import blog3 from "../../assets/FramesContentImages/ic_travel_site_visitors.svg";
import blog4 from "../../assets/FramesContentImages/ic_travel_verified_hotels.svg";
import { useTranslation } from "react-i18next";

function LandingFrames() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>{t("lfwh1")}</h1>
        <p>{t("lfwp")}</p>
        <div className={css.framesContents}>
          <div className={css.blog}>
            <img src={blog1} alt="" />
            <h1>130</h1>
            <p>{t("lffpblog1")}</p>
          </div>
          <div className={css.blog}>
            <img src={blog2} alt="" />
            <h1>196</h1>
            <p>{t("lffpblog2")}</p>
          </div>
          <div className={css.blog}>
            <img src={blog3} alt="" />
            <h1>10,67k</h1>
            <p>{t("lffpblog3")}</p>
          </div>
          <div className={css.blog}>
            <img src={blog4} alt="" />
            <h1>877</h1>
            <p>{t("lffpblog4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFrames;
