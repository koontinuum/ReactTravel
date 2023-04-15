import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import css from './CheckoutCompletePage.module.scss'
import { useTranslation } from "react-i18next";
import star from '../../assets/checkoutImg/star.svg'
import profile from '../../assets/checkoutImg/profilePic.svg'
import calendar from '../../assets/checkoutImg/calendar.svg'
import people from '../../assets/checkoutImg/people.svg'
import postImg from '../../assets/checkoutImg/postImg.svg'
import useTheme from "../../hooks/useTheme";
import card from '../../assets/checkoutCompleteImg/cardPay.svg'
import cube from '../../assets/checkoutCompleteImg/cube.svg'
import download from '../../assets/checkoutCompleteImg/download.svg'
import leftArr from '../../assets/checkoutCompleteImg/leftArrow.svg'
import paper from '../../assets/checkoutCompleteImg/paper.svg'




function CheckoutCompletePage() {
    const lngs = {
        en: { nativeName: "Eng" },
        ru: { nativeName: "Rus" },
    };
    const { t, i18n } = useTranslation();
    const { isDark, setIsDark } = useTheme();
    return (
    
        <div className={css.wrapper}>
            <Header />
          <div className={css.mainWeb}>
            <img className={css.mainImg} src={postImg} alt="" />
            <div className={css.right}>
                <h1 className={css.title}>{t("completed")}</h1>
                <div className={css.topRight}>
                    <div className={css.textInfo}>
                        <h1 className={css.textTitle}>{t("warsaw")}</h1>
                        <div className={css.review}>
                            <img src={star} alt="" />
                            <h1>4.6</h1>
                            <p>{t("review")}</p>
                        </div>
                    </div>
                    <div className={css.profile}>
                        <img src={profile} alt="" />
                        <div>
                            <p>{t("tourGuide")}</p>
                            <h1>{t("userName")}</h1>
                        </div>
                    </div>
                </div>
                <div className={css.middleRight}>
                <div className={css.infos}>
                    <h1 className={css.midTitle}>{t("bookDetail")}</h1>
                    
                    <div className={css.departureInfo}>
                        <span>
                            <img src={calendar} alt="" />
                            <p>{t("departureDay")}</p>
                        </span>
                        <h1> {t("departureDate")}</h1>
                    </div>
                    <div className={css.numOfGuest}>
                        <span>
                            <img src={people} alt="" />
                            <p>{t("guestWord")}</p>
                        </span>
                        <h1>{t("guestNum")}</h1>
                    </div>
                    <hr />
                    <div className={css.bookCode}>
                        <span>
                            <img src={cube} alt="" />
                            <p>{t("bookCode")}</p>
                        </span>
                        <h1>KU_H8SDM</h1>
                    </div>
                    <div className={css.bookDay}>
                        <span>
                            <img src={calendar} alt="" />
                            <p>{t("bookingDay")}</p>
                        </span>
                        <h1>{t("bookingDate")}</h1>
                    </div>
                    <div className={css.total}>
                        <span>
                            <img src={paper} alt="" />
                            <p>{t("totalWord")}</p>
                        </span>
                        <h1>$357</h1>
                    </div>
                    <div className={css.paymentMethod}>
                        <span>
                            <img src={card} alt="" />
                            <p>{t("paymentMethod")}</p>
                        </span>
                        <h1>Paypal</h1>
                    </div>
                </div>
              </div>  
                <div className={css.bottomRight}>
                    <button>
                        <img src={leftArr} alt="" />
                        {t("backHome")}
                    </button>
                    <button>
                        <img src={download} alt="" />
                        {t("downloadInvoice")}
                    </button>
                </div>
            </div>
          </div>
            <Footer />
        </div>
    )
}

export default CheckoutCompletePage