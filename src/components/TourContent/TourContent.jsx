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
import loc from "../../assets/icon/inpLoc.png";
import day from "../../assets/icon/inpDay.png";
import guests from "../../assets/icon/inpGuests.png";
import indiamain from "../../assets/indiamain.jpg";
import londonmain from "../../assets/londonmain.jpg";
import thailandmain from "../../assets/tourBackgroundImg.svg";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

function TourContent() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState(thailandmain);
  const [tourT, setTourT] = useState(1);
  const tourClick = () => {
    setBackgroundImage(londonmain);
    setTourT(2);
  };
  const tourClick1 = () => {
    setBackgroundImage(thailandmain);
    setTourT(1);
  };
  const tourClick2 = () => {
    setBackgroundImage(indiamain);
    setTourT(3);
  };

  return (
    <div
      className={css.tourContent}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
          <img src={loc} alt="" />
          <input
            className={css.inpBorders}
            type="text"
            placeholder={t("tourInp1")}
          />
          <img src={day} alt="" />
          <input
            className={css.inpBorders}
            type="text"
            placeholder={t("tourInp2")}
          />
          <img src={guests} alt="" />
          <input type="text" placeholder={t("tourInp3")} />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
      <div
        className={cn(css.tourInputsPhone, {
          card_tour: isDark,
        })}
      >
        <input
          className={cn({
            dark_inp: isDark,
          })}
          type="text"
          placeholder={t("tourInp1")}
        />
        <input
          className={cn(css.inpBorders, {
            dark_inp: isDark,
          })}
          type="text"
          placeholder={t("tourInp2")}
        />
        <input
          className={cn({
            dark_inp: isDark,
          })}
          type="text"
          placeholder={t("tourInp3")}
        />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default TourContent;
