import React from "react";
import css from "./DetailsTourInfo.module.scss";
import likeIcon from "../../assets/likeIcon.svg";
import shareIcon from "../../assets/shareIcon.svg";
import starIcon from "../../assets/starIcon.svg";
import locationIcon from "../../assets/locationIcon.svg";
import avatar from "../../assets/avatar.svg";
import calendarIcon from "../../assets/DetailspageImages/calendarIcon.svg";
function DetailsTourInfo() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <div className={css.tourName}>
            <h1>Estonia City Tour</h1>
            <a href="#">
              <img src={shareIcon} alt="" />
              <img src={likeIcon} alt="" />
            </a>
          </div>
          <div className={css.tourInfo}>
            <div className={css.first}>
              <img src={starIcon} alt="" />
              <p>4.6</p>
              <b>(234 reviews)</b>
            </div>
            <div className={css.second}>
              <img src={locationIcon} alt="" />
              <p>Tokyo, Jappan</p>
            </div>
            <div className={css.third}>
              <img src={avatar} alt="" />
              <p>Tour guide by </p>
              <b> Kevin Francis</b>
            </div>
          </div>
          <div className={css.TourOverview}>
            <h1>Tour Overview</h1>
            <div className={css.contentOverview}>
              <div className={css.leftc}>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
              </div>
              <div className={css.rightc}>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
                <div className={css.content1}>
                  <img src={calendarIcon} alt="" />
                  <div>
                    <p>Available </p>
                    <b>03/01/2019 - 01/30/2023</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css.right}>
          <div className={css.rightCon1}>
            <h1>$199</h1>
            <h2>$119</h2>
            <p>/Tour</p>
          </div>
          <div className={css.rightCon2}>
            <input type="text" placeholder="Departure day" />
            <input type="text" placeholder="Guests" />
          </div>
          <div className={css.rightCon3}>
            <h1>
              Service charge <p>$357</p>
            </h1>
            <h1>
              Discount <p>-</p>
            </h1>
          </div>
          <div className={css.rightCon4}>
            <h1>
              Total <p>$357</p>
            </h1>
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTourInfo;
