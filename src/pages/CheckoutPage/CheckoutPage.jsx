import React from 'react'
import Header from '../../components/Header/Header'
import css from './CheckoutPage.module.scss'
import numCir1 from '../../assets/checkoutImg/numberCir1.svg'
import numCir2 from '../../assets/checkoutImg/numberCir2.svg'
import circle from '../../assets/checkoutImg/circle.svg'
import paypal from '../../assets/checkoutImg/paypal.svg'
import checkmark from '../../assets/checkoutImg/checkmark.svg'
import visa from '../../assets/checkoutImg/visaCard.svg'
import Footer from '../../components/Footer/Footer'
import postImg from '../../assets/checkoutImg/postImg.svg'
import star from '../../assets/checkoutImg/star.svg'
import profile from '../../assets/checkoutImg/profilePic.svg'
import calendar from '../../assets/checkoutImg/calendar.svg'
import people from '../../assets/checkoutImg/people.svg'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import ToggleSwitch from '../../switch/ToggleSwitch'
import { useState } from 'react'



const lngs = {
    en: { nativeName: "Eng" },
    ru: { nativeName: "Rus" },
  };

function CheckoutPage() {
    const handleClick = () => {
        setImgL(
            checkmark
        )
      };
    const handlePlay = e => {
        e.target.setAttribute( 'src', circle);
    }
    
    const [imgL , setImgL] = useState(circle)
    const { t, i18n } = useTranslation();
    const { isDark, setIsDark } = useTheme();
    return (
        <div>
            <Header />
            <div className='container'>
              <div className={css.wrapper}>
                <div className={css.confirmPay}>
                    <h1 className={css.title}>{t("confirmPay")}</h1>
                    <hr />
                    <div className={css.shippingInfo}>
                        <div className={css.firstMethod}>
                            <img src={numCir1} alt="" />
                            <h1>{t("shippingInfo")}</h1>
                        </div>
                        <p className={css.biAdress}>{t("billingAdress")}</p>
                        <div className={css.inputs}>
                        <span className={css.firstTwoInp}>
                            <input className={css.mainInp} type="text" placeholder={t("firstName")} />
                            <input className={css.mainInp} type="text" placeholder={t("lastName")} />
                        </span>
                        <input className={css.thirdInp} type="text" placeholder={t("fullAdress")} />
                        <input className={css.fourthInp} type="text" placeholder={t("fullAdress2")} />
                        </div>
                    </div>
                    <div className={css.shipAdress}>
                        <div className={css.topShipAdress}>
                            <p className={css.shipAdressText}>{t("shippingAdress")}</p>
                            <div className={css.switch}>
                                <h1 className={css.biText}>{t("SameasBillingAddress")}</h1>
                                <ToggleSwitch />
                            </div>
                        </div>
                        <div className={css.inputs}>
                        <span className={css.firstTwoInp}>
                            <input className={css.mainInp} type="text" placeholder={t("firstName")} />
                            <input className={css.mainInp} type="text" placeholder={t("lastName")} />
                        </span>
                        <input className={css.thirdInp} type="text" placeholder={t("fullAdress")} />
                        <input className={css.fourthInp} type="text" placeholder={t("fullAdress2")} />
                        </div>
                    </div>
                    <hr />
                    <div className={css.secondMethod}>
                        <div className={css.headline}>
                            <img src={numCir2} alt="" />
                            <h1 className={css.title}>{t("paymentMethods")}</h1>
                        </div>
                        <div className={css.paypalMethod} >
                            <img src={imgL ? circle : checkmark} onClick={handleClick} alt="" />
                            <div>
                                <h1>{t("payPal")}</h1>
                                <p>{t("payPalInfo")}</p>
                            </div>
                            <img src={paypal} alt="" />
                        </div>
                        <div className={css.debitMethod}>
                            <div className={css.topPart}>
                            <span className={css.left}>
                            <img src={checkmark} onClick={handlePlay} alt="" />
                            <div className={css.text}>

                                <h1>{t("debit")}</h1>
                                <p>{t("debitInfo")}</p>
                            </div>
                            </span>
                            <img src={visa} alt="" />
                            </div>
                            <div className={css.inputing}>
                            
                        <input className={css.thirdInp} type="text" id='cardNum'  placeholder={t("cardNum")} />
                        <label htmlFor="cardNum"></label>
                        <input className={css.fourthInp} type="text" placeholder={t("cardHolder")} />
                        <span className={css.SecondTwoInp}>
                            <input className={css.mainInps} type="text" placeholder={t("expDate")} />
                            <input className={css.mainInps} type="text" placeholder={t("CVC")} />
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.dayTour}>
                    <div className={css.mainInfo}>
                        <div className={css.info}>
                        <img className={css.postImg} src={postImg} alt="" />
                          <div className={css.text}>
                            <div className={css.subInfo}>
                                <h1 className={css.top}>{t("warsaw")}</h1>
                                <div className={css.bottom}>
                                    <img src={star} alt="" />
                                    <h1>4.6</h1>
                                    <p>{t("review")}</p>
                                </div>
                            </div>
                            <hr />
                            <div className={css.profileInfo}>
                                <img src={profile} alt="" />
                                <div className={css.userName}>
                                    <p>{t("tourGuide")} </p>
                                    <h1>{t("userName")}</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.extraInfo}>
                        <div className={css.datenum } >
                        <div className={css.date}>
                            <img src={calendar} alt="" />
                            <span >
                                {isDark}
                                <p >{t("departureDay")}</p>
                                <h1>{t("departureDate")}</h1>
                            </span>
                        </div>
                        <hr className={css.hrOfInfo}/>
                        <div className={css.numGuest}>
                        <img src={people} alt="" />
                            <span>
                                <p>{t("guestWord")}</p>
                                <h1>{t("guestCount")}</h1>
                            </span>
                        </div>
                        </div>
                        <div className={css.cost}>
                            <span className={css.service}>
                                <p>{t("service")}</p>
                                <p>{t("discount")}</p>
                                
                                
                            </span>
                            <span className={css.discount}>
                                
                                <h1>$357</h1>
                                <h1>-</h1>
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className={css.totals}>
                        <div className={css.text}>
                            <h1 className={css.word}>{t('total')}</h1>
                            <h1 className={css.cost}>$357</h1>
                        </div>
                        <Link to='/checkoutCompletePage'><button className={css.btn}>
                            {t('btnBooking')}
                        
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    )
}
export default CheckoutPage