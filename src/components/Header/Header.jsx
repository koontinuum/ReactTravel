import React from "react";
import css from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import languageIcon from "../../assets/languageIcon.svg";

function Header() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <img src={logo} alt="" />
          <a href="">Home</a>
          <a href="">Components</a>
          <a href="">Pages</a>
          <a href="">Documentation</a>
        </div>
        <div className={css.right}>
          <div className={css.leftContent}>
            <img src={searchIcon} alt="" />
            <img src={languageIcon} alt="" />
          </div>
          <button className={css.login}>Login</button>
          <button className={css.joinUs}>Join Us</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
