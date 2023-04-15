import React from "react";
import { useTranslation } from "react-i18next";
import css from "./AboutOurMission.module.scss";
import mainContent from "../../assets/DifferentImages/illustration_vision.svg";

function AboutOurMission() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>{t("AOMwh1")}</h1>
        <p>{t("AOMwp")}</p>
        <div className={css.contents}>
          <div className={css.left}>
            <img src={mainContent} alt="" />
          </div>
          <div className={css.right}>
            <div className={css.rightCard1}>
              <h1>01</h1>
              <h2>{t("AOMrrh21")}</h2>
              <p>{t("AOMrrp1")}</p>
            </div>
            <div className={css.rightCards}>
              <div className={css.rightCard1}>
                <h1>02</h1>
                <h2>{t("AOMrrh22")}</h2>
                <p>{t("AOMrrp2")}</p>
              </div>
              <div className={css.rightCard1}>
                <h1>03</h1>
                <h2>{t("AOMrrh23")}</h2>
                <p>{t("AOMrrp3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurMission;
