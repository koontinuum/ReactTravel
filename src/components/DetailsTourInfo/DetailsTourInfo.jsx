import React from "react";
import { useTranslation } from "react-i18next";
import css from "./DetailsTourInfo.module.scss";
import likeIcon from "../../assets/likeIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import starIcon from "../../assets/starIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import avatar from "../../assets/avatar.svg";
import calendarIcon from "../../assets/DetailspageImages/calendarIcon.svg";
import langIcon from "../../assets/DetailspageImages/langIcon.svg";
import locationIcon1 from "../../assets/DetailspageImages/locationIcon.svg";
import phoneIcon from "../../assets/DetailspageImages/phoneIcon.svg";
import timesIcon from "../../assets/DetailspageImages/phoneIcon.svg";
import contactIcon from "../../assets/DetailspageImages/contactIcon.svg";

function DetailsTourInfo() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <div className={css.tourName}>
            <h1>{t("DTIth1")}</h1>
            <a href="#">
              <img src={shareIcon} alt="" />
              <img src={likeIcon} alt="" />
            </a>
          </div>
          <div className={css.tourInfo}>
            <div className={css.first}>
              <img src={starIcon} alt="" />
              <p>4.6</p>
              <b>({t("DTItfb")})</b>
            </div>
            <div className={css.second}>
              <img src={locationIcon} alt="" />
              <p>{t("DTIsp")}</p>
            </div>
            <div className={css.third}>
              <img src={avatar} alt="" />
              <p>{t("DTItp")} </p>
              <b>{t("DTItb")}</b>
            </div>
          </div>
          <div className={css.TourOverview}>
            <h1>{t("DTITOh1")}</h1>
            <div className={css.contentOverview}>
              <div className={css.leftc}>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>{t("DTIcdp1")}</p>
                    <b>{t("DTIcdb1")}</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={locationIcon1} alt="" />
                  <div>
                    <p>{t("DTIcdp2")}</p>
                    <b>{t("DTIcdb2")}</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={timesIcon} alt="" />
                  <div>
                    <p>{t("DTIcdp3")}</p>
                    <b>{t("DTIcdb3")}</b>
                  </div>
                </div>
              </div>
              <div className={css.rightc}>
                <div className={css.content1}>
                  <img src={contactIcon} alt="" />
                  <div>
                    <p>{t("DTIcdp4")}</p>
                    <b>{t("DTIcdb4")}</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={phoneIcon} alt="" />
                  <div>
                    <p>{t("DTIcdp5")}</p>
                    <b>{t("DTIcdb5")}</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={langIcon} alt="" />
                  <div>
                    <p>{t("DTIcdp6")}</p>
                    <b>{t("DTIcdb6")}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.rightCon1}>
            <h1>$199</h1>
            <h2>$119</h2>
            <p>{t("DTIrr1p")}</p>
          </div>
          <div className={css.rightCon2}>
            <input type="text" placeholder={t("DTIrr2i1")} />
            <input type="text" placeholder={t("DTIrr2i2")} />
          </div>
          <div className={css.rightCon3}>
            <h1>
              {t("DTIrr3h11")}
              <p>$357</p>
            </h1>
            <h1>
              {t("DTIrr3h12")}
              <p>-</p>
            </h1>
          </div>
          <div className={css.rightCon4}>
            <h1>
              {t("DTIrr4h1")}
              <p>$357</p>
            </h1>
            <button>{t("DTIrr4btn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTourInfo;
