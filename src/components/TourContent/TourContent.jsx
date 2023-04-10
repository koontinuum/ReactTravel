import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";
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

function TourContent() {
  const { t } = useTranslation();
  // const [tour, setTour] = useState(t("TCnameTour1"));
  const [tourT, setTourT] = useState(1);
  const tourClick = () => {
    // setTour(t("TCnameTour2"));
    setTourT(2);
  };
  const tourClick1 = () => {
    // setTour(t("TCnameTour1"));
    setTourT(1);
  };
  const tourClick2 = () => {
    // setTour(t("TCnameTour3"));
    setTourT(3);
  };

  return (
    <div className={css.tourContent}>
      <Header />
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.centerWrapper}>
            <div className={css.centralContent}>
              <b>{t("headTourb")}</b>
              <div className={css.mainTourText}>
                <h1>
                  {tourT > 1
                    ? tourT == 2
                      ? t("TCrh12")
                      : t("TCrh13")
                    : t("TCrh11")}
                </h1>
              </div>
              <div className={css.info}>
                <p>
                  <img src={timeLogo} alt="" />
                  {t("headTourC1")}
                </p>
                <p>
                  <img src={starLogo} alt="" />
                  {t("headTourC2")}
                </p>
                <p>
                  <img src={moneyLogo} alt="" />
                  {t("headTourC3")}
                </p>
              </div>
              <button className={css.btnlink}>
                <Link to="/detailspage">{t("headTourBtn")}</Link>
              </button>
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
      <div className={css.tourInputsPhone}>
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
  );
}

export default TourContent;
