import React from "react";
import css from "./Header.module.scss";

function Header() {
  return (
    <div className="container">
      <div className={css.wrapper}>
        <div className={css.left}>
          <a href="">Home</a>
          <a href="">Components</a>
          <a href="">Pages</a>
          <a href="">Components</a>
        </div>
        <div className={css.right}>31231</div>
      </div>
    </div>
  );
}

export default Header;
