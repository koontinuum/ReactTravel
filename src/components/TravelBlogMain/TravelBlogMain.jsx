import React from "react";
import css from "./TravelBlogMain.module.scss";
import soc1 from "../../assets/TravelBlogDetailsPageImages/facebookIcon.svg";
import soc2 from "../../assets/TravelBlogDetailsPageImages/instagramIcon.svg";
import soc3 from "../../assets/TravelBlogDetailsPageImages/linkedInIcon.svg";
import soc4 from "../../assets/TravelBlogDetailsPageImages/twitterIcon.svg";

function TravelBlogMain() {
  return (
    <>
      <div className={css.wrapperMain}>
        <div className={css.textContent}>
          <b>8 minute read</b>
          <h1>The Complete Digital Marketing Course - 12 Courses In 1</h1>
          <p>16 Mar 2020 12:35 PM</p>
          <div>
            <img src={soc1} alt="" />
            <img src={soc2} alt="" />
            <img src={soc3} alt="" />
            <img src={soc4} alt="" />
          </div>
        </div>
      </div>
      <div className={css.bottomTextContent}>
        <a href="">Home</a>
        <p>❯</p>
        <a href="">Blog</a>
        <p>❯</p>
        <b>The Complete Digital Marketing Course - 12 Courses in 1</b>
      </div>
    </>
  );
}

export default TravelBlogMain;
