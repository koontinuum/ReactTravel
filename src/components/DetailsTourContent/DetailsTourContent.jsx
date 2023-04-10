import React, { useState } from "react";
import css from "./DetailsTourContent.module.scss";
import con1 from "../../assets/TourByCitiesImages/trCon1.svg";
import con2 from "../../assets/TourByCitiesImages/trCon2.svg";
import con3 from "../../assets/TourByCitiesImages/trCon3.svg";
import con4 from "../../assets/TourByCitiesImages/trCon4.svg";
import con5 from "../../assets/TourByCitiesImages/trCon5.svg";

function DetailsTourContent() {
  const [mainImgSrc, setMainImgSrc] = useState(con1);
  function handleClickForSecondImage() {
    setMainImgSrc(con2);
  }
  function handleClickForThirdImage() {
    setMainImgSrc(con3);
  }
  function handleClickForFourthImage() {
    setMainImgSrc(con4);
  }
  function handleClickForFifthImage() {
    setMainImgSrc(con5);
  }
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>
          Home {">"} Tours {">"} <a href="">Estonia City Tour</a>
        </h1>
        <div className={css.imagesContent}>
          <div className={css.mainCon}>
            <img className={css.mainConImg} src={mainImgSrc} alt="" />
          </div>
          <div className={css.contents}>
            <img src={con2} alt="" onClick={handleClickForSecondImage} />
            <img src={con3} alt="" onClick={handleClickForThirdImage} />
            <img src={con4} alt="" onClick={handleClickForFourthImage} />
            <img src={con5} alt="" onClick={handleClickForFifthImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTourContent;
