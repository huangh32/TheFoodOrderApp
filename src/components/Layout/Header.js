import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

//forwarded onShowCart from App.js
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          alt="A table of food"
          src="https://cdn.vox-cdn.com/thumbor/OO-xRgZvA_msWWvniol6AcoaV4s=/0x0:6000x4000/1075x1075/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71262429/Le_Fantome.0.jpg"
        />
      </div>
    </Fragment>
  );
};
export default Header;
