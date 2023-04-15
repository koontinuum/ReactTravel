import React from 'react'
import css from './Newsletter.module.scss'
import right from "../../assets/arrow.svg";

function Newsletter() {
  return (
    <div className={css.newSettler}>
        <div className={css.newSettlerInfo}>
          <h1>Newsletter</h1>
          <p>
            Sign up now to receive hot special offers <br />
            and information about the best tours!{" "}
          </p>
          <span className={css.newInp}>
            <input type="text" placeholder="Enter your email" />
            <button>
              <img src={right} alt="" />
            </button>
          </span>
        </div>
      </div>
  )
}

export default Newsletter