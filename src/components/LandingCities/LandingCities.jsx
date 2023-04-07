import React from "react";
import css from "./LandingCities.module.scss";
import Qatar from "../../assets/TourByCitiesImages/Qatar.svg";
import city1 from "../../assets/TourByCitiesImages/1.svg";
import city2 from "../../assets/TourByCitiesImages/2.svg";
import city3 from "../../assets/TourByCitiesImages/3.svg";
import city4 from "../../assets/TourByCitiesImages/4.svg";
import city5 from "../../assets/TourByCitiesImages/5.svg";
import city6 from "../../assets/TourByCitiesImages/6.svg";
import city7 from "../../assets/TourByCitiesImages/7.svg";

function LandingCities() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.text}>
          <h1>
            Tours By City
            <p>
              Our Featured Tours can help you find the trip that's perfect for
              you!
            </p>
          </h1>
          <button>View All →</button>
        </div>
        <div className={css.cards}>
          <div>
            <div className={css.card}>
              <img src={Qatar} alt="" />
              <h1>
                Qatar <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city1} alt="" />
              <h1>
                Barbados <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city2} alt="" />
              <h1>
                Hungary <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city3} alt="" />
              <h1>
                Netherlands <p>196 Place</p>
              </h1>
            </div>
          </div>
          <div>
            <div className={css.card}>
              <img src={city4} alt="" />
              <h1>
                Uganda <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city5} alt="" />
              <h1>
                Eritrea <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city6} alt="" />
              <h1>
                Gambia <p>196 Place</p>
              </h1>
            </div>
            <div className={css.card}>
              <img src={city7} alt="" />
              <h1>
                Lebanon <p>196 Place</p>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCities;
