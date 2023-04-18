import React from 'react'
import styles from './LandingPost.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import btn from '../../assets/icon/postBtn.png'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';


const LandingPost = () => {
   const arrowRef = useRef(null);
   const { t} = useTranslation();
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: false,
   };
  return (
    <div className={styles.wrapper}>
      <main className={styles.wrap_left}>
        <Slider ref={arrowRef} {...settings}>
          <div className={styles.card}>
            <p>19 {t("May")} 2021</p>
            <h1>{t("postTitle")}</h1>
            <h6>{t("postInfo")}</h6>
          </div>
          <div className={styles.card}>
            <p>19 {t("May")} 2021</p>
            <h1>{t("postTitle")}</h1>
            <h6>{t("postInfo")}</h6>
          </div>
          <div className={styles.card}>
            <p>19 {t("May")} 2021</p>
            <h1>{t("postTitle")}</h1>
            <h6>{t("postInfo")}</h6>
          </div>
          <div className={styles.card}>
            <p>19 {t("May")} 2021</p>
            <h1>{t("postTitle")}</h1>
            <h6>{t("postInfo")}</h6>
          </div>
        </Slider>
        <button className={styles.btn} onClick={() => arrowRef.current.slickNext()}>
          <img src={btn} alt="" />
        </button>
      </main>
      <main className={styles.wrap_right}>
        <h1>{t("posth1")}</h1>
        <div className={styles.item}>
          <h6>17 {t("May")} 2021</h6>
          <h2>{t("postSubt")}</h2>
          <p>{t("postText")}</p>
        </div>
        <div className={styles.item}>
          <h6> 13 {t("aug")} 2021</h6>
          <h2>{t("postSubt1")}</h2>
          <p>{t("postText1")}</p>
        </div>
        <div className={styles.item}>
          <h6> 04 {t("jul")} 2021</h6>
          <h2>{t("postSubt2")}</h2>
          <p>{t("postText2")}</p>
        </div>
      </main>
    </div>
  );
}

export default LandingPost