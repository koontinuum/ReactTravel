import React, { useRef } from 'react'
import styles from './LandingCustomer.module.scss'
import img from '../../assets/customer.png'
import img1 from '../../assets/icon/cust66.png'
import left from '../../assets/icon/arrowLeft.png'
import right from '../../assets/icon/arrowRight.png'
import { useTranslation } from 'react-i18next'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingCustomer = () => {
   const arrowRef = useRef(null);
  const { t} = useTranslation();
     const settings = {
       dots: false,
       infinite: false,
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
            <h1>{t("custTitle")}</h1>
            <img src={img1} alt="" />
            <p>{t("custText")}</p>
            <h3>{t("custName")}</h3>
          </div>

          <div className={styles.card}>
            <h1>{t("custTitle")}</h1>
            <img src={img1} alt="" />
            <p>{t("custText")}</p>
            <h3>{t("custName")}</h3>
          </div>
        </Slider>
        <div>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <img src={left} alt="" />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <img src={right} alt="" />
          </button>
        </div>
      </main>
      <main className={styles.wrap_right}>
        <img src={img} alt="" />
      </main>
    </div>
  );
}

export default LandingCustomer
