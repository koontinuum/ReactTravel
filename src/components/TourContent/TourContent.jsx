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
import Footer from "../Footer/Footer";

function TourContent() {
  return (
    <div className={css.tourContent}>
      <Header />
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.centerWrapper}>
            <div className={css.centralContent}>
              <b>New Tour</b>
              <h1>Thailand Tour</h1>
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
              <button>Book Now</button>
            </div>
            <div className={css.options}>
              <div className={css.option1}>
                <div className={css.left}>
                  <img src={ThailandImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1>Thailand</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    Asia
                  </p>
                </div>
              </div>
              <div className={css.option2}>
                <div className={css.left}>
                  <img src={LondonImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1>London</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    Europe
                  </p>
                </div>
              </div>
              <div className={css.option2}>
                <div className={css.left}>
                  <img src={IndiaImg} alt="" />
                </div>
                <div className={css.right}>
                  <h1>India</h1>
                  <p>
                    <img src={locationLogo} alt="" />
                    Asia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.tourInputs}>
          <input type="text" placeholder="Where we go?" />
          <input
            className={css.inpBorders}
            type="text"
            placeholder="Departure day"
          />
          <input type="text" placeholder="Guests" />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TourContent;
