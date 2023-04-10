import React from "react";
import css from "./LandingDevice.module.scss";
import payment from "../../assets/ExploreContentImages/payment.svg";
import popularity from "../../assets/ExploreContentImages/popularity.svg";
import reputation from "../../assets/ExploreContentImages/reputation.svg";
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import cn from "classnames"

function LandingDevice() {
  const { t } = useTranslation();
   const { isDark } = useTheme();
  return (
    <div className={css.wrapper}>
      <div className={css.textContent + " container"}>
        <h1>{t("h1LanDev")}</h1>
        <p>{t("pLanDev")}</p>
      </div>
      <div className={css.mainContent}>
        <div
          className={cn(css.deviceWrapper, {
            card_tour: isDark,
          })}
        >
          <b>{t("dbLanDev")}</b>
          <h1>{t("dh1LanDev")}</h1>
          <button>▷ {t("dbtnLanDev")}</button>
        </div>
      </div>
      <div className={css.bottomContent + " cardDark"}>
        <div className={css.content}>
          <img src={popularity} alt="" />
          <h1>{t("h1LDCon1")}</h1>
          <p>{t("pLDCon")}</p>
        </div>
        <div className={css.content}>
          <img src={reputation} alt="" />
          <h1>{t("h1LDCon2")}</h1>
          <p>{t("pLDCon")}</p>
        </div>
        <div className={css.content}>
          <img src={payment} alt="" />
          <h1>{t("h1LDCon3")}</h1>
          <p>{t("pLDCon")}</p>
        </div>
      </div>
    </div>
  );
}

export default LandingDevice;
