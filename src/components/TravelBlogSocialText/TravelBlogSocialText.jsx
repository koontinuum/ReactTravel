import React from "react";
import css from "./TravelBlogSocialText.module.scss";
import mainImg1 from "../../assets/TravelBlogDetailsPageImages/TextMainImg.svg";
import Vector from "../../assets/TravelBlogDetailsPageImages/Vector.svg";
import mainImg2 from "../../assets/TravelBlogDetailsPageImages/TextMainImg2.svg";
import soc1 from "../../assets/TravelBlogDetailsPageImages/facebookIcon.svg";
import soc2 from "../../assets/TravelBlogDetailsPageImages/instagramIcon.svg";
import soc3 from "../../assets/TravelBlogDetailsPageImages/linkedInIcon.svg";
import soc4 from "../../assets/TravelBlogDetailsPageImages/twitterIcon.svg";
import avatar from "../../assets/CardTourImg/avatar2.svg";
import search from "../../assets/SlidersList/search.svg";
import ellips16 from "../../assets/SlidersList/ellipse16.svg";
import block1 from "../../assets/SlidersList/block1.svg";
import block2 from "../../assets/SlidersList/block2.svg";
import block3 from "../../assets/SlidersList/block3.svg";
import block4 from "../../assets/SlidersList/block4.svg";
import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

function TravelBlogSocialText() {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <p
          className={cn({
            dark_text: isDark,
          })}
        >
          {t("TBStext1")}
        </p>
        <div className={css.pContent}>
          <h1
            className={cn({
              dark_text: isDark,
            })}
          >
            P
          </h1>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {" "}
            {t("TBStext2")}
          </p>
        </div>
        <div className={css.secondp}>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext3")}
          </p>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext4")}
          </p>
        </div>
        <img src={mainImg1} alt="" />
        <div className={css.secondTexts}>
          <div>
            <h1
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBStext5")}
            </h1>
            <p
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBStext6")}
            </p>
          </div>
          <div>
            <h1
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBStext7")}
            </h1>
            <p
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBStext8")}
            </p>
          </div>
        </div>
        <div className={css.secondTextss}>
          <img src={Vector} alt="" />
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext9")}
          </p>
        </div>
        <img src={mainImg2} alt="" />
        <div className={css.secondTextsss}>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext9")}
          </p>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext10")}
          </p>
          <p
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBStext11")}
          </p>
        </div>
        <div className={css.tags}>
          {t("TBSTtbtn1")} <button>{t("TBSTtbtn2")}</button>
          <button>{t("TBSTtbtn3")}</button>
          <button>{t("TBSTtbtn4")}</button>
          <button>{t("TBSTtbtn5")}</button>
          <button>{t("TBSTtbtn6")}</button>
        </div>
        <div className={css.shares}>
          {t("TBSTshares")}
          <button className={css.firstShare}>
            <img src={soc1} alt="" />
            Facebook
          </button>
          <button className={css.secondShare}>
            <img src={soc2} alt="" />
            Instagram
          </button>
          <button className={css.thirdShare}>
            <img src={soc3} alt="" />
            LinkedIn
          </button>
          <button className={css.fourthShare}>
            <img src={soc4} alt="" />
            Twitter
          </button>
        </div>
        <div className={css.CourtneyContent}>
          <div className={css.left}>
            <img src={avatar} alt="" />
          </div>
          <div className={css.right}>
            <div className={css.top}>
              <p>
                {t("TBSTcourtney")} <b>{t("TBSTcourtneyb")}</b>
              </p>
              <div className={css.socials}>
                <img src={soc1} alt="" />
                <img src={soc2} alt="" />
                <img src={soc3} alt="" />
                <img src={soc4} alt="" />
              </div>
            </div>
            <div className={css.bottom}>
              <p>{t("TBSTcourtneybp")}</p>
              <b>{t("TBSTcourtneybb")}</b>
            </div>
          </div>
        </div>
      </div>
      <div className={css.rightCourtney}>
        <div className={css.top}>
          <img src={avatar} alt="" />
          <h1
            className={cn({
              dark_text: isDark,
            })}
          >
            {t("TBSTcourtney")}{" "}
            <b
              className={cn({
                grey_text: isDark,
              })}
            >
              {t("TBSTcourtneyb")}
            </b>
          </h1>
        </div>
        <div className={css.bottom}>
          <img src={soc1} alt="" />
          <img src={soc2} alt="" />
          <img src={soc3} alt="" />
          <img src={soc4} alt="" />
        </div>
        <div className={css.listRight}>
          <div className={css.search}>
            <img src={search} alt="" />
            <input type="text" placeholder={t("TBSTlsi")} />
          </div>
          <div className={css.side_head}>
            <h4
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBSTch4")}
            </h4>
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
          <div className={css.recent}>
            <h2 className={css.recent_title}>Recent Posts</h2>
            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block1} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>{t("TBSTph5")}</h5>
                <p>
                  {t("TBSTpp1")} <img src={ellips16} alt="" /> {t("TBSTpp2")}
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block2} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>{t("TBSTph5")}</h5>
                <p>
                  {t("TBSTpp1")} <img src={ellips16} alt="" /> {t("TBSTpp2")}
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block3} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>{t("TBSTph5")}</h5>
                <p>
                  {t("TBSTpp1")} <img src={ellips16} alt="" /> {t("TBSTpp2")}
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block4} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>{t("TBSTph5")}</h5>
                <p>
                  {t("TBSTpp1")} <img src={ellips16} alt="" /> {t("TBSTpp2")}
                </p>
              </div>
            </div>
          </div>
          <div className={css.tagss}>
            <h4>{t("TBSTtssh4")}</h4>
            <div className={css.popular}>
              <div>{t("TBSTtssdiv1")}</div>
              <div>{t("TBSTtssdiv2")}</div>
              <div>{t("TBSTtssdiv3")}</div>
              <div>{t("TBSTtssdiv4")}</div>
              <div>{t("TBSTtssdiv5")}</div>
              <div>{t("TBSTtssdiv6")}</div>
              <div>{t("TBSTtssdiv7")}</div>
              <div>{t("TBSTtssdiv8")}</div>
              <div>{t("TBSTtssdiv9")}</div>
            </div>
          </div>
          <div className={css.advertisement}>
            <div>
              <h4>{t("TBSTadivh4")}</h4>
              <p>{t("TBSTadivp")}</p>
              <div className={css.advertisementBtn}>Go Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogSocialText;
