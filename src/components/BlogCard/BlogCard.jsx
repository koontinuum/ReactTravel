import { useTranslation } from "react-i18next";
import { BlogCardItem } from "../../constants/BlogCardItem";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./BlogCard.module.scss";
import side2 from "../../assets/blog/card1.png";
import side3 from "../../assets/blog/card2.png";
import side4 from "../../assets/blog/card3.png";
import side1 from "../../assets/blog/card4.png";
import useTheme from "../../hooks/useTheme";
import cn from 'classnames'

const BlogCard = () => {
    const { isDark } = useTheme();
  const { t } = useTranslation();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(BlogCardItem.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(BlogCardItem.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % BlogCardItem.length;

    setItemOffset(newOffset);
  };
  return (
    <div className={styles.main}>
      <div className={styles.blog_slider}>
        {currentItems.map((item) => (
          <div
            className={cn(styles.card, {
              card_tour: isDark,
            })}
            key={item.id}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div>
              <span className={styles.subTitle}>
                24 {t("postMay")} 2022
                <span className={styles.dot}>&#183;</span>8 {t("minread")}
              </span>
              <h2
                className={cn(styles.comment, {
                  dark_text: isDark,
                })}
              >
                {t(item.title)}
              </h2>
            </div>
            <div className={styles.proff}>
              <img src={item.ava} alt="" />
              <span
                className={cn({
                  dark_text: isDark,
                })}
              >
                {item.name}
              </span>
            </div>
          </div>
        ))}
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName={styles.pagination}
          pageLinkClassName={styles.page_num}
          previousLinkClassName={styles.page_num}
          nextLinkClassName={styles.page_num}
          activeClassName={styles.active}
        />
      </div>
      <aside className={styles.side_bar}>
        <div className={styles.side_head}>
          <input
            className={cn(styles.inp, {
              dark_inp: isDark,
            })}
            type="text"
            placeholder="search..."
          />

          <h2>Categories</h2>
          <ul
            className={cn({
              dark_text: isDark,
            })}
          >
            <li>{t("TBSTcli1")}</li>
            <li>{t("TBSTcli2")}</li>
            <li>{t("TBSTcli3")}</li>
            <li>{t("TBSTcli4")}</li>
            <li>{t("TBSTcli5")}</li>
          </ul>
        </div>

        <div className={styles.side_recent}>
          <h2>Recent Posts</h2>
          <div className={styles.side_card}>
            <img src={side1} alt="" />
            <div className={styles.card_post}>
              <p
                className={cn(styles.card_title, {
                  dark_text: isDark,
                })}
              >
                {t("blog1")}
              </p>
              <p className={styles.subTitle}>
                November 7,2017 <span className={styles.dot}>&#183;</span> 8 min
                read
              </p>
            </div>
          </div>
          <div className={styles.side_card}>
            <img src={side2} alt="" />
            <div className={styles.card_post}>
              <p
                className={cn(styles.card_title, {
                  dark_text: isDark,
                })}
              >
                {t("blog2")}
              </p>
              <p className={styles.subTitle}>
                October 7,2017 <span className={styles.dot}>&#183;</span> 8 min
                read
              </p>
            </div>
          </div>
          <div className={styles.side_card}>
            <img src={side3} alt="" />
            <div className={styles.card_post}>
              <p
                className={cn(styles.card_title, {
                  dark_text: isDark,
                })}
              >
                {" "}
                {t("blog3")}
              </p>
              <p className={styles.subTitle}>
                November 7,2017 <span className={styles.dot}>&#183;</span> 8 min
                read
              </p>
            </div>
          </div>
          <div className={styles.side_card}>
            <img src={side4} alt="" />
            <div className={styles.card_post}>
              <p
                className={cn(styles.card_title, {
                  dark_text: isDark,
                })}
              >
                {t("blog4")}
              </p>
              <p className={styles.subTitle}>
                May 7,2017 <span className={styles.dot}>&#183;</span> 8 min read
              </p>
            </div>
          </div>
        </div>
        <div className={styles.side_tags}>
          <h2>Pouplar Tags</h2>
          <div className={styles.tag_btn}>
            <button>{t("blogul1")}</button>
            <button>{t("blogul2")}</button>
            <button>{t("blogul3")}</button>
            <button>{t("blogul4")}</button>
            <button>{t("blogul5")}</button>
            <button>{t("blogul6")}</button>
            <button>{t("blogul7")}</button>
            <button>{t("blogul8")}</button>
            <button>{t("blogul8")}</button>
          </div>
          <div className={styles.side_info}>
            <h3>{t("adv")}</h3>
            <p>{t("quotes")}</p>
            <button>{t("gonow")}</button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogCard;
