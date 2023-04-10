import React from 'react'
import { useTranslation } from 'react-i18next';
import { cityTourCard } from '../../../../constants/TourByCity';
import styles from './LandingCityTours.module.scss'

const LandingCityTours = () => {
	const { t} = useTranslation();
const render = cityTourCard.map((item) => (
  <div className={styles.card} key={item.id}>
    <img src={item.img} alt="" />
    <div>
      <h1>{t(`${item.city}`)}</h1>
      <p>{t(`${item.palce}`)}</p>
    </div>
  </div>
));

  return (
    <div>
      <header className={styles.header}>
        <div>
          <h1>{t("cityTourTitle")}</h1>
          <p>{t("cityTourInfo")}</p>
        </div>
        <div className={styles.btn}>
          <button>{t("cityTourBtn")}&#8594;</button>
        </div>
      </header>
      <main className={styles.cardContent}>{render}</main>
      <div className={styles.btn1}>
        <button>View All &#8594;</button>
      </div>
    </div>
  );
}

export default LandingCityTours
