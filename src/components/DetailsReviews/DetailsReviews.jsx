import React, { useState } from "react";
import styles from "./DetailsReviews.module.scss";
import kevin from "../../assets/DetailspageImages/cardIcon.png";
import star from "../../assets/icon/star.svg";
import fb from "../../assets/icon/fb.svg";
import ins from "../../assets/icon/ins.svg";
import inn from "../../assets/icon/in.svg";
import twit from "../../assets/icon/twit.svg";
import rating from "../../assets/icon/Rating.png";
import arrDown from "../../assets/icon/arr_down.svg";
import { Reviews } from "../../constants/reviews";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

const DetailsReviews = () => {
  const { isDark } = useTheme();
  const [active, setActive] = useState(false);
  console.log(Reviews);
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <main>
          <div className={styles.card}>
            <img src={kevin} alt="" />
            <h1>Kevin Francis</h1>
            <div className={styles.item_card}>
              <img src={star} alt="" />
              <h4>4.8</h4>
              <span>(234 reciews)</span>
            </div>
            <p
              className={cn("Layout", {
                dark_text: isDark,
              })}
            >
              Described by Queenstown House & Garden magazine as having 'one of
              the best views we've ever seen' you will love relaxing in this
              newly built
            </p>
            <div className={styles.card_icon}>
              <img src={fb} alt="" />
              <img src={ins} alt="" />
              <img src={inn} alt="" />
              <img src={twit} alt="" />
            </div>
            <p>Member since Mar 15, 2021</p>
            <button
              className={cn(styles.btn_cont, {
                dark_text: isDark,
              })}
            >
              Contact Tour Guide
            </button>
          </div>
        </main>
        <main className={styles.reviews}>
          <div className={styles.reviews_title}>
            <h1>123 Reviews</h1>
            <div>
              <button
                className={cn(styles.btn_most, {
                  dark_text: isDark,
                })}
              >
                {" "}
                Most recent <img src={arrDown} alt="" />{" "}
              </button>
              <button className={styles.btn_write}> Write a Review</button>
            </div>
          </div>
          {Reviews.map((item) => (
            <div className={styles.comment} key={item.id}>
              <div className={styles.com_top}>
                <div>
                  <div>
                    <img id={styles.avatar} src={item.img} alt="" />
                  </div>
                  <div className={styles.icon_info}>
                    <h1>{item.name}</h1>
                    <p>{item.date}</p>
                  </div>
                </div>
                <img src={rating} alt="" />
              </div>
              <div className={styles.com_bot}>
                <p
                  className={cn("Layout", {
                    dark_text: isDark,
                  })}
                >
                  {item.text}
                </p>
                <p className={styles.reviews_btn}>
                  Helpful &#183;{" "}
                  <button  onClick={()=> setActive(!active)}
                    className={cn("Layout", {
                      dark_text: isDark,
                    })}
                  >
                    Reply
                  </button>
                </p>
              </div>
              { active && (
                <>
                  <div className={styles.reply_content}>
                    <div className={styles.reply}>
                      <div>
                        <img id={styles.avatar} src={item.reply.img} alt="" />
                      </div>
                      <div className={styles.icon_info1}>
                        <h1>{item.reply.name}</h1>
                        <p>{item.reply.date}</p>
                      </div>
                    </div>
                    <div className={styles.com_bot}>
                      <p
                        className={cn("Layout", {
                          dark_text: isDark,
                        })}
                      >
                        {item.reply.text}
                      </p>
                    </div>
                  </div>
                  <div className={styles.reply_content}>
                    <div className={styles.reply}>
                      <div>
                        <img id={styles.avatar} src={item.reply2.img} alt="" />
                      </div>
                      <div className={styles.icon_info1}>
                        <h1>{item.reply2.name}</h1>
                        <p>{item.reply2.date}</p>
                      </div>
                    </div>
                    <div className={styles.com_bot}>
                      <p
                        className={cn("Layout", {
                          dark_text: isDark,
                        })}
                      >
                        {item.reply2.text}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};
export default DetailsReviews;
