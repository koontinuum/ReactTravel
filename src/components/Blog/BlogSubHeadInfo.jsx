import React from 'react'
import styles from './BlogSubHeadInfo.module.scss'
import ant from '../../assets/blog/antoi.png'
import ant1 from '../../assets/blog/hus.png'
import ant2 from '../../assets/blog/kam.png'
import ant3 from '../../assets/blog/rai.png'

const BlogSubHeadInfo = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <main className={styles.left}>
          <div className={styles.left_card}>
            <p>February 28,2018 &#183; 8 min read</p>
            <h1>Don't Waste Time! 7 Facts Until You Reach Your Event</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <span>
              <img src={ant} alt="" /> Antoine Findlay
            </span>
          </div>
        </main>
        <main className={styles.right}>
          <div className={styles.right_bot}>
            {" "}
            <p>24 May 2019 &#183; 8 min read</p>
            <h1>The Next 7 Things You Should Do For Event Success</h1>
            <span>
              {" "}
              <img src={ant3} alt="" /> Antoine Findlay
            </span>
          </div>
          <div className={styles.right_top}>
            <div className={styles.top_l}>
              <p> 24 May 2019 &#183; 8 min read</p>
              <h1>Think Your Event Is Safe? 7 Ways You Can Lose It Today</h1>

              <span>
                <img src={ant1} alt="" />
                Husna Navarro
              </span>
            </div>
            <div className={styles.top_r}>
              <p>24 May 2019 &#183; 8 min read</p>
              <h1>7 Places To Get Deals On Event</h1>

              <span>
                <img src={ant2} alt="" />
                Kamile Burke
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BlogSubHeadInfo
