import React from "react";
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
  return (
    <div className={css.mainContents}>
      <div className={css.top}>
        <h1>Latest Posts</h1>
        <button>View All →</button>
      </div>
      <div className={css.bottom}>
        <div className={css.card}>
          <img src={card1} alt="" />
          <p>24 May 2019 · 8 min read</p>
          <h1>The More Important the Work, the More Important the Rest</h1>
          <b>
            <img src={avatar1} alt="" />
            Suraj Gregory
          </b>
        </div>
        <div className={css.card}>
          <img src={card2} alt="" />
          <p>24 May 2019 · 8 min read</p>
          <h1>The More Important the Work, the More Important the Rest</h1>
          <b>
            <img src={avatar2} alt="" />
            Kamile Burke
          </b>
        </div>
        <div className={css.card}>
          <img src={card3} alt="" />
          <p>24 May 2019 · 8 min read</p>
          <h1>The More Important the Work, the More Important the Rest</h1>
          <b>
            <img src={avatar3} alt="" />
            Raihan Nieves
          </b>
        </div>
        <div className={css.card}>
          <img src={card4} alt="" />
          <p>24 May 2019 · 8 min read</p>
          <h1>The More Important the Work, the More Important the Rest</h1>
          <b>
            <img src={avatar4} alt="" />
            Cruz Truong
          </b>
        </div>
      </div>
    </div>
  );
}

export default AboutLatestPosts;
