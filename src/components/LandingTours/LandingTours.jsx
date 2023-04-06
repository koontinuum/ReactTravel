import React from "react";
import css from "./LandingTours.module.scss";
import likeCard from "../../assets/TourContentImages/likeCard.svg";
import time from "../../assets/TourContentImages/cardStar.svg";
import star from "../../assets/TourContentImages/cardTime.svg";

function LandingTours() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>Featured Tours</h1>
        <p>
          Our Featured Tours can help you find the trip that's perfect for you!
        </p>
        <div className={css.wrapperContent}>
          <div className={css.card}>
            <div className={css.top}>
              <button className={css.price}>$299</button>
              <button className={css.like}>
                <img src={likeCard} alt="" />
              </button>
            </div>
            <div className={css.center}>
              <h2>England</h2>
              <h1>Warsaw Day Tour</h1>
            </div>
            <div className={css.bottom}>
              <p>
                <img src={star} alt="" /> 3 days 2 nights
              </p>
              <b>
                <img src={time} alt="" /> 4.8
              </b>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.top2}>
              <button className={css.price}>$299</button>
              <button className={css.like}>
                <img src={likeCard} alt="" />
              </button>
            </div>
            <div className={css.center}>
              <h2>England</h2>
              <h1>Warsaw Day Tour</h1>
            </div>
            <div className={css.bottom}>
              <p>
                <img src={star} alt="" /> 3 days 2 nights
              </p>
              <b>
                <img src={time} alt="" /> 4.8
              </b>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.top3}>
              <button className={css.price}>$299</button>
              <button className={css.like}>
                <img src={likeCard} alt="" />
              </button>
            </div>
            <div className={css.center}>
              <h2>England</h2>
              <h1>Warsaw Day Tour</h1>
            </div>
            <div className={css.bottom}>
              <p>
                <img src={star} alt="" /> 3 days 2 nights
              </p>
              <b>
                <img src={time} alt="" /> 4.8
              </b>
            </div>
          </div>
          <div className={css.card}>
            <div className={css.top4}>
              <button className={css.price}>$299</button>
              <button className={css.like}>
                <img src={likeCard} alt="" />
              </button>
            </div>
            <div className={css.center}>
              <h2>England</h2>
              <h1>Warsaw Day Tour</h1>
            </div>
            <div className={css.bottom}>
              <p>
                <img src={star} alt="" /> 3 days 2 nights
              </p>
              <b>
                <img src={time} alt="" /> 4.8
              </b>
            </div>
          </div>
        </div>
        <button className={css.toursBtn}>View All Tours</button>
      </div>
    </div>
  );
}

export default LandingTours;
