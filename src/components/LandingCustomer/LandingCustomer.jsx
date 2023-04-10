import React from 'react'
import styles from './LandingCustomer.module.scss'
import img from '../../assets/customer.png'
import img1 from '../../assets/icon/cust66.png'
import left from '../../assets/icon/arrowLeft.png'
import right from '../../assets/icon/arrowRight.png'
import { useTranslation } from 'react-i18next'

const LandingCustomer = () => {
  const { t} = useTranslation();
  return (
    <div className={styles.wrapper}>
      <main className={styles.wrap_left}>
        <h1>{t("custTitle")}</h1>
        <img src={img1} alt="" />
        <p>{t("custText")}</p>
        <h3>{t("custName")}</h3>
        <div>
          <button>
            <img src={left} alt="" />
          </button>
          <button>
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
