import css from "./LandDestinations.module.scss";
import mad from "../../assets/landDestinations/madag.png";
import viet from "../../assets/landDestinations/viet.png";
import ireland from "../../assets/landDestinations/ireland.png";
import hung from "../../assets/landDestinations/hung.png";
import loc from "../../assets/landDestinations/loc.svg";

const LandDestinations = () => {
  return (
    <section className={css.wrapper}>
      <main className={css.wrap_info}>
        <h2>Our Favorite Destinations </h2>
        <p>
          Since wire-frame renderings are relatively simple and fast to
          calculate, they are often used in cases
        </p>
        <ul>
          <li>First Class Flights</li>
          <li>5 Star Accommodations</li>
          <li>Inclusive Packages</li>
          <li>Latest Model Vechicles </li>
          <li>Handpicked Hotels</li>
          <li>Accesibility managment</li>
        </ul>
      </main>
      <main className={css.wrap_card}>
        <div className={css.card}>
          <img src={hung} alt="" />
          <h4>Hongkong</h4>
          <div>
            <img src={loc} alt="" />
            <span>Asia</span>
          </div>
        </div>
        <div className={css.card3}>
          <img src={ireland} alt="" />
          <h4>Ireland</h4>
          <div>
            <img src={loc} alt="" />
            <span>Asia</span>
          </div>
        </div>
        <div className={css.card1}>
          <img src={mad} alt="" />
          <h4>Madagascar</h4>
          <div>
            <img src={loc} alt="" />
            <span>Asia</span>
          </div>
        </div>
        <div className={css.card}>
          <img src={viet} alt="" />
          <h4>Vietnam</h4>
          <div>
            <img src={loc} alt="" />
            <span>Asia</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandDestinations;
