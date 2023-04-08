import React from "react";
import css from "./DetailsDescription.module.scss";
import orangeMark from "../../assets/DetailspageImages/orangeMark.svg";
import grayMark from "../../assets/DetailspageImages/grayMark.svg";
import facebookIcon from "../../assets/DetailspageImages/facebookIcon.svg";
import instagramIcon from "../../assets/DetailspageImages/instagramIcon.svg";
import linkedinIcon from "../../assets/DetailspageImages/linkedinIcon.svg";
import twitterIcon from "../../assets/DetailspageImages/twitterIcon.svg";

function DetailsDescription() {
  return (
    <div className="container">
      <div className={css.descriptionContent}>
        <div>
          <h1>Tour Description</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
          <h1>Tour Highlights</h1>
          <ul>
            <li>
              A fermentum in morbi pretium aliquam adipiscing donec tempus.
            </li>
            <li> Vulputate placerat amet pulvinar lorem nisl.</li>
            <li>
              Consequat feugiat habitant gravida quisque elit bibendum id
              adipiscing sed.
            </li>
            <li>Etiam duis lobortis in fames ultrices commodo nibh.</li>
          </ul>
        </div>
      </div>
      <div className={css.includesContent}>
        <h1>Tour Includes</h1>
        <div>
          <div className={css.lefti}>
            <p>
              <img src={orangeMark} alt="" />
              Audio guide
            </p>
            <p>
              <img src={orangeMark} alt="" />
              Food and drinks
            </p>
            <b>
              <img src={grayMark} alt="" />
              Lunch
            </b>
            <b>
              <img src={grayMark} alt="" />
              Private tour
            </b>
            <b>
              <img src={grayMark} alt="" />
              Special activities
            </b>
          </div>
          <div className={css.righti}>
            <p>
              <img src={orangeMark} alt="" />
              Audio guide
            </p>
            <p>
              <img src={orangeMark} alt="" />
              Food and drinks
            </p>
            <b>
              <img src={grayMark} alt="" />
              Lunch
            </b>
            <b>
              <img src={grayMark} alt="" />
              Private tour
            </b>
            <b>
              <img src={grayMark} alt="" />
              Special activities
            </b>
          </div>
        </div>
      </div>
      <div className={css.tourProgramContent}>
        <h1>Tour Program</h1>
        <div>
          <h1>- Day 1</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
          <h1>- Day 2</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div>
          <h1>- Day 3</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className={css.sharesContent}>
        <h1>Share:</h1>
        <div className={css.btn1}>
          <img src={facebookIcon} alt="" />
          Facebook
        </div>
        <div className={css.btn2}>
          <img src={instagramIcon} alt="" />
          Instagram
        </div>
        <div className={css.btn3}>
          <img src={linkedinIcon} alt="" />
          LinkedIn
        </div>
        <div className={css.btn4}>
          <img src={twitterIcon} alt="" />
          Twitter
        </div>
      </div>
    </div>
  );
}

export default DetailsDescription;
