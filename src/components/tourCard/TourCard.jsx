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

const TourCard = () => {
   const { t } = useTranslation();
 const { isDark } = useTheme();
  const render = CardTourLIst.map((item) => (
    <div
      className={cn(css.card, {
        card_tour: isDark,
      })}
      key={item.id}
    >
      <img src={item.img} alt="" />
      <div>
        <img className={css.card_like} src={liked} alt="" />
        <p>{item.loc}</p>
        <h1>{item.title}</h1>
        <div>
          <p>
            <img src={clock} alt="" />
            {item.time}
          </p>

          <span className={css.card_price}>{item.price}</span>
          <p>
            {" "}
            <img src={star} alt="" /> {item.point}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={css.wrapper}>
      <div className={css.tourInputs}>
        <input
          className={css.inp_loc}
          type="text"
          placeholder={t("tourInp1")}
        />
        <input
          className={css.inpBorders}
          type="text"
          placeholder={t("tourInp2")}
        />
        <input
          className={css.inp_guest}
          type="text"
          placeholder={t("tourInp3")}
        />
        <button>
          <img src={searchIcon} alt="" />
        </button>
      </div>
      <div className={css.content}>{render}</div>
    </div>
  );
};

export default TourCard;
