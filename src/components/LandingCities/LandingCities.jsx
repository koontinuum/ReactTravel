import React from "react";
import css from "./LandingCities.module.scss";
import { cityTourCard } from "../../constants/TourByCity";
import { useTranslation } from "react-i18next";

function LandingCities() {
const  {t} = useTranslation()
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.text}>
          <h1>
            {t("cityTourTitle")}
            <p>{t("cityTourInfo")}</p>
          </h1>
          <button>{t("ALPMtbtn")} →</button>
        </div>
        <div className={css.cards}>    

            {cityTourCard.map((item) => (
              <div key={item.id} className={css.card}>
                <img src={item.img} alt="" />
                <h1>
                  {t(item.city)} <p>196 {t(item.palce)}</p>
                </h1>
              </div>
            ))}
         
        </div>
      </div>
    </div>
  );
}

export default LandingCities;
