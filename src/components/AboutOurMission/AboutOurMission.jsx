import React from "react";
import css from "./AboutOurMission.module.scss";
import mainContent from "../../assets/DifferentImages/illustration_vision.svg";

function AboutOurMission() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>Our Mission</h1>
        <p>
          Curabitur ullamcorper ultricies nisi. Aenean viverra rhoncus pede.
        </p>
        <div className={css.contents}>
          <div className={css.left}>
            <img src={mainContent} alt="" />
          </div>
          <div className={css.right}>
            <div className={css.rightCard1}>
              <h1>01</h1>
              <h2>Vestibulum</h2>
              <p>
                Donec elit libero, sodales nec, volutpat a, suscipit non,
                turpis.
              </p>
            </div>
            <div className={css.rightCards}>
              <div className={css.rightCard1}>
                <h1>02</h1>
                <h2>Fusce</h2>
                <p>
                  In dui magna, posuere eget, vestibulum et, tempor auctor,
                  justo.
                </p>
              </div>
              <div className={css.rightCard1}>
                <h1>03</h1>
                <h2>Praesent</h2>
                <p>Suspendisse feugiat. Quisque id odio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOurMission;
