import css from "./LandDestinations.module.scss";
import mad from "../../assets/landDestinations/madag.png";
import viet from "../../assets/landDestinations/viet.png";
import ireland from "../../assets/landDestinations/ireland.png";
import hung from "../../assets/landDestinations/hung.png";
import loc from "../../assets/landDestinations/loc.svg";
import { useTranslation } from "react-i18next";


const LandDestinations = () => {
  const {t} = useTranslation();
  return (
    <section className={css.wrapper}>
      <main className={css.wrap_info}>
        <h2>{t("landDestTitle")} </h2>
        <p>{t("landDestInfo")}</p>
        <ul>
          <li>{t("landDestUl1")}</li>
          <li>{t("landDestUl2")}</li>
          <li>{t("landDestUl3")}</li>
          <li>{t("landDestUl4")}</li>
          <li>{t("landDestUl5")}</li>
          <li>{t("landDestUl6")}</li>
        </ul>
      </main>
      <main className={css.wrap_card}>
        <div className={css.card}>
          <img src={hung} alt="" />
          <h4>{t("hongkong")}</h4>
          <div>
            <img src={loc} alt="" />
            <span>{t("landDestAsia")}</span>
          </div>
        </div>
        <div className={css.card3}>
          <img src={ireland} alt="" />
          <h4>{t("ireland")}</h4>
          <div>
            <img src={loc} alt="" />
            <span>{t("landDestAsia")}</span>
          </div>
        </div>
        <div className={css.card1}>
          <img src={mad} alt="" />
          <h4>{t("madagascar")}</h4>
          <div>
            <img src={loc} alt="" />
            <span>{t("landDestAsia")}</span>
          </div>
        </div>
        <div className={css.card}>
          <img src={viet} alt="" />
          <h4>{t("vietnam")}</h4>
          <div>
            <img src={loc} alt="" />
            <span>{t("landDestAsia")}</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandDestinations;
