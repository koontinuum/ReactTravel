import React, { useState } from "react";
import css from "./AboutUsCards.module.scss";
import card1 from "../../assets/DifferentImages/card1.svg";
import card2 from "../../assets/DifferentImages/card2.svg";
import card3 from "../../assets/DifferentImages/card3.svg";
import card4 from "../../assets/DifferentImages/card4.svg";
import plus from "../../assets/DifferentImages/The starting point f.svg";
import minus from "../../assets/DifferentImages/Rectangle 530.svg";

function AboutUsCards() {
  const [show, setShow] = useState(true);
  function handClick() {
    setShow(!show);
  }
  return (
    <div className="container">
      <div className={css.text}>
        <h1>About Us</h1>
        <p>
          Master Digital Marketing Strategy, Social Media Marketing, SEO,
          YouTube, Email, Facebook Marketing, Analytics & More!
        </p>
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
          <p>Air tickets sold</p>
        </div>
        <div className={css.block2}>
          <div>
            <h1>196</h1>
            <img src={plus} alt="" />
          </div>
          <p>Tours booked</p>
        </div>
        <div className={css.block3}>
          <div>
            <h1>10.68k</h1>
            <img src={plus} alt="" />
          </div>
          <p>Site visitors</p>
        </div>
        <div className={css.block4}>
          <div>
            <h1>877</h1>
            <img src={plus} alt="" />
          </div>
          <p>Verified hotels</p>
        </div>
      </div>
      <div className={css.maecenasText}>
        <div className={css.left}>
          <img src={minus} alt="" onClick={handClick} />
          <h1>
            {!show ? (
              <p></p>
            ) : (
              <p>
                Maecenas malesuada. Cras ultricies mi eu turpis hendrerit
                fringilla.
              </p>
            )}
          </h1>
        </div>
        <div className={css.right}>
          {!show ? (
            <h1></h1>
          ) : (
            <p>
              <h1>Fusce convallis metus id felis luctus</h1>
              Fusce convallis metus id felis luctus adipiscing. Etiam imperdiet
              imperdiet orci. Vestibulum eu odio. Phasellus nec sem in justo
              pellentesque facilisis. Donec pede justo, fringilla vel, aliquet
              nec, vulputate eget, arcu. Maecenas nec odio et ante tincidunt
              tempus. Suspendisse enim turpis, dictum sed, iaculis a,
              condimentum nec, nisi. Vestibulum eu odio. Curabitur ullamcorper
              ultricies nisi.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutUsCards;
