import React, { useRef } from 'react'
import styles from './BlogTopics.module.scss'
import left from '../../assets/icon/arrowLeft.png'
import right from '../../assets/icon/arrowRight.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useTheme from '../../hooks/useTheme';
import cn from 'classnames'


const BlogTopics = () => {
	 const { isDark} = useTheme();
	const arrowRef = useRef(null);
	    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <main
      className={cn(styles.wrapper, {
        card_tour: isDark,
      })}
    >
      <div className={styles.header}>
        <h1
          className={cn({
            text_dark: isDark,
          })}
        >
          Trending Topics
        </h1>
        <div>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <img src={left} alt="" />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.slide_content}>
        <Slider ref={arrowRef} {...settings}>
          <div className={styles.card1}>
            <h1>Travel</h1>
            <p>12 psots</p>
          </div>
          <div className={styles.card2}>
            <h1>Business</h1>
            <p>26 posts</p>
          </div>
          <div className={styles.card3}>
            <h1>Marketing</h1>
            <p>16 posts</p>
          </div>
          <div className={styles.card4}>
            <h1>Sports</h1>
            <p>26 posts</p>
          </div>
          <div className={styles.card1}>
            <h1>Travel</h1>
            <p>12 psots</p>
          </div>
          <div className={styles.card2}>
            <h1>Business</h1>
            <p>26 posts</p>
          </div>
          <div className={styles.card3}>
            <h1>Marketing</h1>
            <p>16 posts</p>
          </div>
          <div className={styles.card4}>
            <h1>Sports</h1>
            <p>26 posts</p>
          </div>
        </Slider>
        <div className={styles.btn}>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <img src={left} alt="" />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default BlogTopics
