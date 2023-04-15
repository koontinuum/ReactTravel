import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./AboutClients.module.scss";
import brand7 from "../../assets/BrandsLogos/1.svg";
import brand8 from "../../assets/BrandsLogos/2.svg";
import brand11 from "../../assets/BrandsLogos/3.svg";
import brand3 from "../../assets/BrandsLogos/4.svg";
import brand6 from "../../assets/BrandsLogos/5.svg";
import brand10 from "../../assets/BrandsLogos/6.svg";
import brand1 from "../../assets/BrandsLogos/7.svg";
import brand4 from "../../assets/BrandsLogos/8.svg";
import brand2 from "../../assets/BrandsLogos/9.svg";
import brand5 from "../../assets/BrandsLogos/10.svg";
import brand9 from "../../assets/BrandsLogos/11.svg";
import brand12 from "../../assets/BrandsLogos/12.svg";

function AboutClients() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className={css.top}>
        <h1>{t("ACth1")}</h1>
        <div>
          <h1>{t("ACtdh1")}</h1>
          <p>{t("ACtdp")}</p>
        </div>
      </div>
      <div className={css.bottom}>
        <div>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
        </div>
        <div>
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
        </div>
        <div>
          <img src={brand7} alt="" />
          <img src={brand8} alt="" />
          <img src={brand9} alt="" />
        </div>
        <div>
          <img src={brand10} alt="" />
          <img src={brand11} alt="" />
          <img src={brand12} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutClients;
