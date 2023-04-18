import React from "react";
import css from "./LandingTours.module.scss";
import likeCard from "../../assets/TourContentImages/likeCard.svg";
import time from "../../assets/TourContentImages/cardStar.svg";
import star from "../../assets/TourContentImages/cardTime.svg";
import { CardTourLIst } from "../../constants/CardTourLIst";
import useTheme from "../../hooks/useTheme";
import cn from 'classnames'
import { useTranslation } from "react-i18next";

function LandingTours() {
  const { isDark } = useTheme();
    const { t } = useTranslation();
 const card = CardTourLIst.slice(0, 4)
  const render = card.map((item) => (
    <div
      className={cn(css.card, {
        card_tour: isDark,
      })}
      key={item.id}
    >
      <img src={item.img} alt="" />
      <div>
        <img className={css.card_like} src={likeCard} alt="" />
        <p>{t(item.loc)}</p>
        <h1>{t(item.title)}</h1>
        <div>
          <p>
            <img src={time} alt="" />
            {t(item.time)}
          </p>
          <span className={css.card_price}>{item.price}</span>
          <p>
            <img src={star} alt="" /> {item.point}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className={css.wrapper}>
        <h1>{t("FeaturedTours")}</h1>
        <p>{t("cityTourInfo")}</p>
        <div className={css.cardContent}>{render}</div>
        <button  className={css.toursBtn}>{t("ViewAllTours")}</button>
      </div>
    </div>
  );
}

export default LandingTours;
