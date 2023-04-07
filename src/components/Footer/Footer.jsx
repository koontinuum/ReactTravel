import React from 'react'
import css from './Footer.module.scss'
import mail from '../../assets/mail.svg'
import location from '../../assets/location.svg'
import right from '../../assets/arrow.svg'
import face from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import IN from '../../assets/in.svg'
import twitter from '../../assets/twitter.svg'
import logo from '../../assets/logo.svg'
import { useTranslation } from "react-i18next";


const lngs = {
    en: { nativeName: "" },
    ru: { nativeName: "" },
  };

function Footer() {
    const { t, i18n } = useTranslation();
  return (
    <div className={css.wrapper}>
        <div className={css.newSettler}>
            <div className={css.newSettlerInfo}>
            <h1>{t("newSettler")}</h1>
            <p>{t("signUpText")}</p>
            <div className={css.inputAlign}>
            <span className={css.newInp}>
            <input type="text" placeholder={t("newInput")}/>
            <button className={css.newBtn}>
                <img src={right} alt="" />
            </button>
            </span>
            </div>
            </div>
        </div>
    <div className={css.zone}>
        <img className={css.logo} src={logo} alt="" />
        <div className={css.contacts}>
            <p className={css.contactText}>{t("zoneText")}</p>
            <div className={css.how2Find}>
                <div className={css.Email}>
                <img src={mail} alt="" />
                <p>info@example.com</p>
                </div>
                <div className={css.place}>
                <img src={location} alt="" />
                <p>655 Schaefer Dale</p>
                </div>
            </div>
            <div className={css.inp}>
            <div className={css.inputContact}>
                <input type="text" placeholder={t("inputInfo")}/>
                <button className={css.inputBtn}><img src={right} alt="" /></button>
            </div>
            </div>
        </div>
        <div className={css.socials} >
            <img src={face} alt="" />
            <img src={insta} alt="" />
            <img src={IN} alt="" />
            <img src={twitter} alt="" />
        </div>
        <div className={css.service}>
            <p className={css.copyright}>{t("copyRight")}</p>
            <div className={css.feedBack}>
                <p className={css.copyright}>{t("help")}</p>
                <p className={css.copyright}>{t("service")}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer