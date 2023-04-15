import React from "react";
import { useTranslation } from "react-i18next";
import css from "./AboutLatestPosts.module.scss";
import card1 from "../../assets/CardTourImg/card6.png";
import avatar1 from "../../assets/CardTourImg/avatar1.svg";
import card2 from "../../assets/CardTourImg/card4.png";
import card3 from "../../assets/CardTourImg/card5.png";
import card4 from "../../assets/CardTourImg/card10.png";
import avatar2 from "../../assets/CardTourImg/avatar2.svg";
import avatar3 from "../../assets/CardTourImg/avatar3.svg";
import avatar4 from "../../assets/CardTourImg/avatar4.svg";

function AboutLatestPosts() {
  const { t } = useTranslation();
  return (
    <div className={css.mainContents}>
      <div className={css.top}>
        <h1>{t("ALPMth1")}</h1>
        <button>{t("ALPMtbtn")} →</button>
      </div>
      <div className={css.bottom}>
        <div className={css.card}>
          <img src={card1} alt="" />
          <p>{t("ALPbcp")}</p>
          <h1>{t("ALPbch1")}</h1>
          <b>
            <img src={avatar1} alt="" />
            {t("ALPcardAuthor1")}
          </b>
        </div>
        <div className={css.card}>
          <img src={card2} alt="" />
          <p>{t("ALPbcp")}</p>
          <h1>{t("ALPbch1")}</h1>
          <b>
            <img src={avatar2} alt="" />
            {t("ALPcardAuthor2")}
          </b>
        </div>
        <div className={css.card}>
          <img src={card3} alt="" />
          <p>{t("ALPbcp")}</p>
          <h1>{t("ALPbch1")}</h1>
          <b>
            <img src={avatar3} alt="" />
            {t("ALPcardAuthor3")}
          </b>
        </div>
        <div className={css.card}>
          <img src={card4} alt="" />
          <p>{t("ALPbcp")}</p>
          <h1>{t("ALPbch1")}</h1>
          <b>
            <img src={avatar4} alt="" />
            {t("ALPcardAuthor4")}
          </b>
        </div>
      </div>
    </div>
  );
}

export default AboutLatestPosts;
