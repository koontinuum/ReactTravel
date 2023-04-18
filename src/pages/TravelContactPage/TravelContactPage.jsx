import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Newsletter from '../../components/Newsletter/Newsletter'
import css from './TravelContactPage.module.scss'
import location from '../../assets/contactPageImg/location.svg'
import mail from '../../assets/contactPageImg/mail.svg'
import share from '../../assets/contactPageImg/share.svg'
import phone from '../../assets/contactPageImg/phone.svg'
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import main1 from '../../assets/contactPageImg/main1.svg'
import main2 from '../../assets/contactPageImg/main2.svg'
import main3 from '../../assets/contactPageImg/main3.svg'
import phoneL from '../../assets/contactPageImg/phoneLight.svg'
import mailL from '../../assets/contactPageImg/mailLight.svg'
import locationL from '../../assets/contactPageImg/locationLight.svg'
import leftImg from '../../assets/contactPageImg/leftImg.svg'




function TravelContactPage() {
    const lngs = {
        en: { nativeName: "Eng" },
        ru: { nativeName: "Rus" },
    };
    const { t, i18n } = useTranslation();
    const { isDark, setIsDark } = useTheme();
    return (
        <div>
            <Header />
            <div className={css.wrapper}>
                <div className={css.titleText}>
                    <h1 className={css.mainText}>{t("worldWide")}</h1>
                    <p className={css.text}>{t("shortText")}</p>
                </div>
                <div className={css.cards}>
                    <div className={css.firstCard}>
                        <img className={css.main} src={main1} alt="" />
                        <div className={css.bottomInfo}>
                            <h1 className={css.mainCityName}>{t("city1")}</h1>
                            <div className={css.extraInfo}>
                                <div className={css.topBottomInfo}>
                                    <div className={css.firstPart}>
                                    {isDark ? (
            <img className={css.logo} src={locationL} alt="" />
          ) : (
            <img className={css.logo} src={location} alt="" />
          )}                                        <h1>{t("adressWord")}</h1>
                                        <img src={share} alt="" />
                                    </div>
                                    <h1 className={css.add}>{t("adressAct1")}</h1>
                                </div>
                                <div className={css.midBottomInfo}>
                                    <div className={css.secondPart}>
                                    {isDark ? (
            <img className={css.logo} src={phoneL} alt="" />
          ) : (
            <img className={css.logo} src={phone} alt="" />
          )}                                        <h1>{t("phoneWord")}</h1>
                                    </div>
                                    <h1 className={css.num}>{t("phoneNum1")}</h1>
                                </div>
                                <div className={css.lowerBottomInfo}>
                                    <div className={css.thirdPart}>
                                    {isDark ? (
            <img className={css.logo} src={mailL} alt="" />
          ) : (
            <img className={css.logo} src={mail} alt="" />
          )}                                        <h1>{t("emailWord")}</h1>
                                    </div>
                                    <h1 className={css.mail}>jessica.hanson@example.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.secondCard}>
                        <img className={css.main} src={main2} alt="" />
                        <div className={css.bottomInfo}>
                            <h1 className={css.mainCityName}>{t("city2")}</h1>
                            <div className={css.extraInfo}>
                                <div  className={css.topBottomInfo}>
                                    <div className={css.firstPart}>
                                    {isDark ? (
            <img className={css.logo} src={locationL} alt="" />
          ) : (
            <img className={css.logo} src={location} alt="" />
          )}                                        <h1>{t("adressWord")}</h1>
                                        <img src={share} alt="" />
                                    </div>
                                    <h1 className={css.add}>{t("adressAct2")}</h1>
                                </div>
                                <div className={css.midBottomInfo}>
                                    <div className={css.secondPart}>
                                    {isDark ? (
            <img className={css.logo} src={phoneL} alt="" />
          ) : (
            <img className={css.logo} src={phone} alt="" />
          )}
                                        <h1>{t("phoneWord")}</h1>
                                    </div>
                                    <h1 className={css.num}>{t("phoneNum2")}</h1>
                                </div>
                                <div className={css.lowerBottomInfo}>
                                    <div className={css.thirdPart}>
                                    {isDark ? (
            <img className={css.logo} src={mailL} alt="" />
          ) : (
            <img className={css.logo} src={mail} alt="" />
          )}
                                        <h1>{t("emailWord")}</h1>
                                    </div>
                                    <h1 className={css.mail}>michelle.rivera@example.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.ThirdCard}>
                        <img className={css.main} src={main3} alt="" />
                        <div className={css.bottomInfo}>
                            <h1 className={css.mainCityName}>{t("city3")}</h1>
                            <div className={css.extraInfo}>
                                <div className={css.topBottomInfo}>
                                    <div className={css.firstPart}>
                                    {isDark ? (
            <img className={css.logo} src={locationL} alt="" />
          ) : (
            <img className={css.logo} src={location} alt="" />
          )}
                                        <h1>{t("adressWord")}</h1>
                                        <img src={share} alt="" />
                                    </div>
                                    <h1 className={css.add}>{t("adressAct3")}</h1>
                                </div>
                                <div className={css.midBottomInfo}>
                                    <div className={css.secondPart}>
                                    {isDark ? (
            <img className={css.logo} src={phoneL} alt="" />
          ) : (
            <img className={css.logo} src={phone} alt="" />
          )}
                                        <h1>{t("phoneWord")}</h1>
                                    </div>
                                    <h1 className={css.num}>{t("phoneNum3")}</h1>
                                </div>
                                <div className={css.lowerBottomInfo}>
                                    <div className={css.thirdPart}>
                                    {isDark ? (
            <img className={css.logo} src={mailL} alt="" />
          ) : (
            <img className={css.logo} src={mail} alt="" />
          )}
                                        <h1>{t("emailWord")}</h1>
                                    </div>
                                    <h1 className={css.mail}>curtis.weaver@example.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.line}>
                    <img src={leftImg} alt="" />
                    <div className={css.right}>
                        <h1>{t("dropaLine")}</h1>
                        <p>{t("timeTaken")}</p>
                        <div className={css.inps}>
                        <input type="text" placeholder={t("fullName")}/>
                        <input type="text" placeholder={t("Email")}/>
                        <input type="text" placeholder={t("subject")}/>
                        <input className={css.bigInp} type="text" placeholder={t("message")}/>
                        </div>
                        <button>{t("sendMessage")}</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default TravelContactPage