import React from "react";
import { useTranslation } from "react-i18next";
import css from "./DetailsDescription.module.scss";
import orangeMark from "../../assets/DetailspageImages/orangeMark.svg";
import grayMark from "../../assets/DetailspageImages/grayMark.svg";
import facebookIcon from "../../assets/DetailspageImages/facebookIcon.svg";
import instagramIcon from "../../assets/DetailspageImages/instagramIcon.svg";
import linkedinIcon from "../../assets/DetailspageImages/linkedinIcon.svg";
import twitterIcon from "../../assets/DetailspageImages/twitterIcon.svg";

function DetailsDescription() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={css.descriptionContent}>
        <div>
          <h1>{t("DDddh1")}</h1>
          <p>{t("DDddp")}</p>
        </div>
        <div>
          <h1>{t("DDddh11")}</h1>
          <ul>
            <li>{t("DDddli1")}</li>
            <li>{t("DDddli2")}</li>
            <li>{t("DDddli3")}</li>
            <li>{t("DDddli4")}</li>
          </ul>
        </div>
      </div>
      <div className={css.includesContent}>
        <h1>{t("DDiCh1")}</h1>
        <div>
          <div className={css.lefti}>
            <p>
              <img src={orangeMark} alt="" />
              {t("DDilp1")}
            </p>
            <p>
              <img src={orangeMark} alt="" />
              {t("DDilp2")}
            </p>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp3")}
            </b>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp4")}
            </b>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp5")}
            </b>
          </div>
          <div className={css.righti}>
            <p>
              <img src={orangeMark} alt="" />
              {t("DDilp6")}
            </p>
            <p>
              <img src={orangeMark} alt="" />
              {t("DDilp7")}
            </p>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp8")}
            </b>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp9")}
            </b>
            <b>
              <img src={grayMark} alt="" />
              {t("DDilp10")}
            </b>
          </div>
        </div>
      </div>
      <div className={css.tourProgramContent}>
        <h1>{t("DDtPh1")}</h1>
        <div>
          <h1>{t("DDtPh1day1")}</h1>
          <p>{t("DDtPpDay")}</p>
        </div>
        <div>
          <h1>{t("DDtPh1day2")}</h1>
          <p>{t("DDtPpDay")}</p>
        </div>
        <div>
          <h1>{t("DDtPh1day3")}</h1>
          <p>{t("DDtPpDay")}</p>
        </div>
      </div>
      <div className={css.sharesContent}>
        <h1>{t("DDsCh1Share")}</h1>
        <div className={css.btn1}>
          <img src={facebookIcon} alt="" />
          Facebook
        </div>
        <div className={css.btn2}>
          <img src={instagramIcon} alt="" />
          Instagram
        </div>
        <div className={css.btn3}>
          <img src={linkedinIcon} alt="" />
          LinkedIn
        </div>
        <div className={css.btn4}>
          <img src={twitterIcon} alt="" />
          Twitter
        </div>
      </div>
    </div>
  );
}

export default DetailsDescription;
