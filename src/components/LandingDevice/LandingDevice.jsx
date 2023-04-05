import React from "react";
import css from "./LandingDevice.module.scss";
import payment from "../../assets/ExploreContentImages/payment.svg";
import popularity from "../../assets/ExploreContentImages/popularity.svg";
import reputation from "../../assets/ExploreContentImages/reputation.svg";

function LandingDevice() {
  return (
    <div className={css.wrapper}>
      <div className={css.textContent + " container"}>
        <h1>Explore A Different Way To Travel</h1>
        <p>
          Cras ultricies mi eu turpis hendrerit fringilla. Nulla consequat massa
          quis enim.
        </p>
      </div>
      <div className={css.mainContent}>
        <div className={css.deviceWrapper + " container"}>
          <b>Device</b>
          <h1>The More Important the Work</h1>
          <button>▷ Watch Video</button>
        </div>
      </div>
      <div className={css.bottomContent + " container"}>
        <div className={css.content}>
          <img src={popularity} alt="" />
          <h1>Professional Tour Guides</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
        <div className={css.content}>
          <img src={reputation} alt="" />
          <h1>Professional Tour Guides</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
        <div className={css.content}>
          <img src={payment} alt="" />
          <h1>Professional Tour Guides</h1>
          <p>Nunc nonummy metus. Donec elit libero</p>
        </div>
      </div>
    </div>
  );
}

export default LandingDevice;
