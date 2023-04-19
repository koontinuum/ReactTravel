import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import css from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import logodark from "../../assets/icon/Logodark.png";
import sun from "../../assets/free-icon-switch-786484.png";
import moon from "../../assets/free-icon-switch-786486.png";
import burgerDark from "../../assets/icon/burger-menu-svgrepo-com.svg";
import burger from '../../assets/icon/burgerwhite.svg'
import cn from "classnames";



const lngs = {
  en: { nativeName: "Eng" },
  ru: { nativeName: "Rus" },
};



function Header() {

  const { t, i18n } = useTranslation();
  const { isDark, setIsDark } = useTheme();


   const [isOpen, setIsOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);

     useEffect(() => {
       setIsMounted(true);
     }, []);

   const modalRef = useRef(null);
   useEffect(() => {
     function handleClickOutside(event) {
       if (modalRef.current && !modalRef.current.contains(event.target)) {
         setIsOpen(false);
       }
     }

     if (isOpen) {
       document.addEventListener("mousedown", handleClickOutside);
     } else {
       document.removeEventListener("mousedown", handleClickOutside);
     }

     return () => {
       document.removeEventListener("mousedown", handleClickOutside);
     };
   }, [isOpen]);
   if (!isMounted) {
     return null;
   }
  return (
    <div className="container">
      <div className={css.wrapper}>
        {/*burger menu*/}

        {isOpen && (
          <div className={css.modal}>
            <div
              className={cn(css.modal_content, {
                card_tour: isDark,
              })}
              ref={modalRef}
            >
              <div className={css.modal_header}>
                <button
                  className={cn({
                    dark_text: isDark,
                  })}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  X
                </button>
              </div>
              <div className={css.modal_body}>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/"
                >
                  {t("pagelandinglink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/Travelpage"
                >
                  {t("pagelistlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/detailspage"
                >
                  {t("pagedetailslink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/checkoutPage"
                >
                  {t("pagecheckoutlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/checkoutCompletePage"
                >
                  {t("pagecompletedlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/blogpage"
                >
                  {t("blog")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/travelblogpage"
                >
                  {t("travelblogpagelink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/aboutpage"
                >
                  {t("pageaboutlink")}
                </Link>
                <Link
                  className={cn({
                    dark_text: isDark,
                  })}
                  to="/contactPage"
                >
                  {t("pagecontactslink")}
                </Link>
              </div>
            </div>
          </div>
        )}
        {/*burger menu end*/}

        <div className={css.left}>
          {isDark ? (
            <img className={css.logo} src={logodark} alt="" />
          ) : (
            <img className={css.logo} src={logo} alt="" />
          )}
          <Link to="/">{t("headHome")}</Link>
          <a href="">{t("headComp")}</a>
          <div className={css.dropdown}>
            <button className={css.dropbtn}>{t("headPage")}</button>
            <div className={css.dropdowncontent}>
              <Link to="/">{t("pagelandinglink")}</Link>
              <Link to="/Travelpage">{t("pagelistlink")}</Link>
              <Link to="/detailspage">{t("pagedetailslink")}</Link>
              <Link to="/checkoutPage">{t("pagecheckoutlink")}</Link>
              <Link to="/checkoutCompletePage">{t("pagecompletedlink")}</Link>
              <Link to="/blogpage">{t("blog")}</Link>
              <Link to="/travelblogpage">{t("travelblogpagelink")}</Link>
              <Link to="/aboutpage">{t("pageaboutlink")}</Link>
              <Link to="/contactPage">{t("pagecontactslink")}</Link>
            </div>
          </div>
          <a href="">{t("headDocum")}</a>
        </div>
        <div className={css.right}>
          <div className={css.leftContent}>
            <div className={css.toogleTheme}>
              <button onClick={() => setIsDark(!isDark)}>
                {isDark ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
              </button>
            </div>
            <div className={css.langButton}>
              {Object.keys(lngs).map((lng) => (
                <button
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
          </div>
          <button className={css.btn_burger} onClick={() => setIsOpen(true)}>
            {isDark ? (
              <img className={css.logo} src={burger} alt="" />
            ) : (
              <img className={css.logo} src={burgerDark} alt="" />
            )}
          </button>
          {isDark ? (
            <button className={css.login}>{t("headLogBtn")}</button>
          ) : (
            <button className={css.login1}>{t("headLogBtn")}</button>
          )}
          {isDark ? (
            <button className={css.joinUs}>{t("headJoinBtn")}</button>
          ) : (
            <button className={css.joinUs1}>{t("headJoinBtn")}</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
