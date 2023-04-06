import React from "react";
import css from "./LandingFrames.module.scss";
import blog1 from "../../assets/FramesContentImages/ic_travel_tickets.svg";
import blog2 from "../../assets/FramesContentImages/ic_travel_booking.svg";
import blog3 from "../../assets/FramesContentImages/ic_travel_site_visitors.svg";
import blog4 from "../../assets/FramesContentImages/ic_travel_verified_hotels.svg";

function LandingFrames() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <h1>Fastest Way to Book over 450 Great Tours</h1>
        <p>
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        <div className={css.framesContents}>
          <div className={css.blog}>
            <img src={blog1} alt="" />
            <h1>130</h1>
            <p>Air tickets sold</p>
          </div>
          <div className={css.blog}>
            <img src={blog2} alt="" />
            <h1>196</h1>
            <p>Tours booked</p>
          </div>
          <div className={css.blog}>
            <img src={blog3} alt="" />
            <h1>10,67k</h1>
            <p>Site visitors</p>
          </div>
          <div className={css.blog}>
            <img src={blog4} alt="" />
            <h1>877</h1>
            <p>Verified hotels</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFrames;
