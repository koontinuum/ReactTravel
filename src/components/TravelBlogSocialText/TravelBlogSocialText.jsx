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

function TravelBlogSocialText() {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <p>
          Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
          venenatis condimentum, sem libero volutpat nibh, nec pellentesque
          velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet.
          Praesent egestas tristique nibh.
        </p>
        <div className={css.pContent}>
          <h1>P</h1>
          <p>
            ellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac
            venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <div className={css.secondp}>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <p>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
        </div>
        <img src={mainImg1} alt="" />
        <div className={css.secondTexts}>
          <div>
            <h1>Curabitur suscipit suscipit tellus</h1>
            <p>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
              mauris at ligula.
            </p>
          </div>
          <div>
            <h1>Nullam accumsan lorem in</h1>
            <p>
              Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
              aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
              mauris at ligula.
            </p>
          </div>
        </div>
        <div className={css.secondTextss}>
          <img src={Vector} alt="" />
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo.
          </p>
        </div>
        <img src={mainImg2} alt="" />
        <div className={css.secondTextsss}>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
          <p>
            Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue
            ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
            velit pede quis nunc. Phasellus viverra nulla ut metus varius
            laoreet. Praesent egestas tristique nibh.
          </p>
          <p>
            Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum
            aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper
            mauris at ligula.
          </p>
        </div>
        <div className={css.tags}>
          tags: <button>Marketing</button>
          <button>Development</button>
          <button>HR & Recruting</button>
          <button>Design</button>
          <button>Management</button>
        </div>
        <div className={css.shares}>
          share:
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
                Courtney Henry <b>Curator of Marketing Course</b>
              </p>
              <div className={css.socials}>
                <img src={soc1} alt="" />
                <img src={soc2} alt="" />
                <img src={soc3} alt="" />
                <img src={soc4} alt="" />
              </div>
            </div>
            <div className={css.bottom}>
              <p>
                Integer tincidunt. Nullam dictum felis eu pede mollis pretium.
                Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
                nisi, condimentum viverra felis nunc et lorem..
              </p>
              <b>Member since Mar 15, 2021</b>
            </div>
          </div>
        </div>
      </div>
      <div className={css.rightCourtney}>
        <div className={css.top}>
          <img src={avatar} alt="" />
          <h1>
            Courtney Henry <p>Curator of Marketing Course</p>
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
            <input type="text" placeholder="Search..." />
          </div>

          <div className={css.categories}>
            <h4>Categories</h4>
            <ul>
              <li>Marketing</li>
              <li>Community</li>
              <li>Tutorials</li>
              <li>Business</li>
              <li>Management</li>
            </ul>
          </div>

          <div className={css.recent}>
            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block1} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block2} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block3} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>

            <div className={css.posts}>
              <div className={css.postsImg}>
                <img src={block4} alt="" />
              </div>
              <div className={css.postsDesc}>
                <h5>
                  Understanding color theory: the color wheel and finding...
                </h5>
                <p>
                  November 7, 2017 <img src={ellips16} alt="" /> 8 min read
                </p>
              </div>
            </div>
          </div>
          <div className={css.tagss}>
            <h4>Popular Tags</h4>
            <div className={css.popular}>
              <div>Marketing</div>
              <div>Development</div>
              <div>Banking</div>
              <div>HR & Recruting</div>
              <div>Design</div>
              <div>Management</div>
              <div>Business</div>
              <div>Community</div>
              <div>Tutorials</div>
            </div>
          </div>
          <div className={css.advertisement}>
            <div>
              <h4>Advertisement</h4>
              <p>Duis leo. Donec orci lectus, aliquam ut, faucibus non</p>
              <div className={css.advertisementBtn}>Go Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelBlogSocialText;
