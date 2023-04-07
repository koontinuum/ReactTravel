import React from "react";
import css from "./TourContent.module.scss";
import Header from "../Header/Header";
import timeLogo from "../../assets/TourContentImages/timeIcon.svg";
import starLogo from "../../assets/TourContentImages/starIcon.svg";
import moneyLogo from "../../assets/TourContentImages/moneyIcon.svg";
import ThailandImg from "../../assets/TourContentImages/ThailandImage.svg";
import LondonImg from "../../assets/TourContentImages/LondonImage.svg";
import IndiaImg from "../../assets/TourContentImages/IndiaImage.svg";
import locationLogo from "../../assets/TourContentImages/locationIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function TourContent() {
  const [tour, setTour] = useState("Thailand");

  const tourClick = () => {
    setTour("Europe");
  };
  const tourClick1 = () => {
    setTour("Thailand");
  };
  const tourClick2 = () => {
    setTour("India");
  };

  const { t } = useTranslation();
  return (
    <div className={css.tourContent}>
      <Header />
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.centerWrapper}>
            <div className={css.centralContent}>
              <b>{t("headTourb")}</b>

              <div className={css.mainTourText}>
                <h1>{tour}</h1>
              </div>

              <div className={css.info}>
                <p>
                  <img src={timeLogo} alt="" />3 days 2 nights
                </p>
                <p>
                  <img src={starLogo} alt="" />
                  4.8 reviews
                </p>
                <p>
                  <img src={moneyLogo} alt="" />
                  Starting at $69
                </p>
              </div>
              <button>{t("headTourBtn")}</button>
            </div>
            <div className={css.options}>
              <div className={css.option1} onClick={tourClick1}>
                <div className={css.left}>
                  <img src={ThailandImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1> {t("TCrh11")}</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    {t("TCrp3")}
                  </p>
                </div>
              </div>
              <div className={css.option2} onClick={tourClick}>
                <div className={css.left}>
                  <img src={LondonImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1>{t("TCrh12")}</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    {t("TCrp2")}
                  </p>
                </div>
              </div>
              <div className={css.option2} onClick={tourClick2}>
                <div className={css.left}>
                  <img src={IndiaImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1>{t("TCrh13")}</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    {t("TCrp3")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.tourInputs}>
          <input type="text" placeholder={t("tourInp1")} />
          <input
            className={css.inpBorders}
            type="text"
            placeholder={t("tourInp2")}
          />
          <input type="text" placeholder={t("tourInp3")} />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourContent;
