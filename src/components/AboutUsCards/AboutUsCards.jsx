import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./AboutUsCards.module.scss";
import card1 from "../../assets/DifferentImages/card1.svg";
import card2 from "../../assets/DifferentImages/card2.svg";
import card3 from "../../assets/DifferentImages/card3.svg";
import card4 from "../../assets/DifferentImages/card4.svg";
import plus from "../../assets/DifferentImages/The starting point f.svg";
import minus from "../../assets/DifferentImages/Rectangle 530.svg";
import plus1 from "../../assets/DifferentImages/plus1.png";

function AboutUsCards() {
  const { t } = useTranslation();
  const [show, setShow] = useState(true);
  function handClick() {
    setShow(!show);
  }
  return (
    <div className="container">
      <div className={css.text}>
        <h1>{t("AUCth1")}</h1>
        <p>{t("AUCtp")}</p>
      </div>
      <div className={css.containerCards}>
        <div className={css.box}>
          <img src={card1} alt="" />
        </div>
        <div className={css.box}>
          <img src={card2} alt="" />
        </div>
        <div className={css.box}>
          <img src={card3} alt="" />
        </div>
        <div className={css.box}>
          <img src={card4} alt="" />
        </div>
      </div>
      <div className={css.textInfo}>
        <div className={css.block1}>
          <div>
            <h1>130</h1>
            <img src={plus} alt="" />
          </div>
          <p>{t("AUCtIbp1")}</p>
        </div>
        <div className={css.block2}>
          <div>
            <h1>196</h1>
            <img src={plus} alt="" />
          </div>
          <p>{t("AUCtIbp2")}</p>
        </div>
        <div className={css.block3}>
          <div>
            <h1>10.68k</h1>
            <img src={plus} alt="" />
          </div>
          <p>{t("AUCtIbp3")}</p>
        </div>
        <div className={css.block4}>
          <div>
            <h1>877</h1>
            <img src={plus} alt="" />
          </div>
          <p>{t("AUCtIbp4")}</p>
        </div>
      </div>
      <div className={css.maecenasText}>
        <div className={css.left}>
          <img src={show ? minus : plus1} alt="" onClick={handClick} />
          <h1>{!show ? <p></p> : <p>{t("AUCmlh1p")}</p>}</h1>
        </div>
        <div className={css.right}>
          <h1>{t("AUCmrh1")}</h1>
          <p>{t("AUCmrp")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsCards;
