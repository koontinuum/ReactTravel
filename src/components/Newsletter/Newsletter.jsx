import React from 'react'
import css from './Newsletter.module.scss'
import right from "../../assets/arrow.svg";
import { useTranslation } from 'react-i18next';

function Newsletter() {
  const {t} = useTranslation()
  return (
    <div className={css.newSettler}>
      <div className={css.newSettlerInfo}>
        <h1>{t("newsLetter.title")}</h1>
        <p className={css.subTitle}>{t("newsLetter.subtitle")}</p>
        <span className={css.newInp}>
          <input type="text" placeholder="Enter your email" />
          <button>
            <img src={right} alt="" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Newsletter