import "../../App.css";
import { CardTourLIst } from "../../constants/CardTourLIst";
import css from "./TourCard.module.scss";
import clock from "../../assets/icon/clock.png";
import star from "../../assets/icon/star.svg";
import liked from "../../assets/icon/liked.svg";
import cn from 'classnames'
import useTheme from "../../hooks/useTheme";
import { useTranslation } from "react-i18next";
import searchIcon from "../../assets/searchIcon.svg";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import loc from '../../assets/icon/inpLoc.png'
import day from '../../assets/icon/inpDay.png'
import guests from '../../assets/icon/inpGuests.png'

const TourCard = () => {
//Paginate
const [currentItems, setCurrentItems] = useState([]);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 12;

useEffect(() => {
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(CardTourLIst.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(CardTourLIst.length / itemsPerPage));
}, [itemOffset, itemsPerPage]);
const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % CardTourLIst.length;

  setItemOffset(newOffset);
};



   const { t } = useTranslation();
 const { isDark } = useTheme();
  const render = currentItems.map((item) => (
    <div
      className={cn(css.card, {
        card_tour: isDark,
      })}
      key={item.id}
    >
      <img src={item.img} alt="" />
      <div>
        <img className={css.card_like} src={liked} alt="" />
        <p>{t(item.loc)}</p>
        <h1>{t(item.title)}</h1>
        <div>
          <p>
            <img src={clock} alt="" />
            {t(item.time)}
          </p>

          <span className={css.card_price}>{t(item.price)}</span>
          <p>
      
            <img src={star} alt="" /> {item.point}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={css.wrapper}>
      <div
        className={cn(css.tourInputs, {
          card_tour: isDark,
        })}
      >
        <div className={css.inp_icon}>
          <img src={loc} alt="" />
          <input
            className={css.inp_loc}
            type="text"
            placeholder={t("tourInp1")}
          />
        </div>
        <div className={css.inp_icon}>
          <img src={day} alt="" />
          <input
            className={css.inpBorders}
            type="text"
            placeholder={t("tourInp2")}
          />
        </div>
        <div className={css.inp_icon}>
          <img src={guests} alt="" />
          <input
            className={css.inp_guest}
            type="text"
            placeholder={t("tourInp3")}
          />
        </div>
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </div>
      <div className={css.content}>{render}</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName={css.pagination}
        pageLinkClassName={css.page_num}
        previousLinkClassName={css.page_num}
        nextLinkClassName={css.page_num}
        activeClassName={css.active}
      />
    </div>
  );
};

export default TourCard;
