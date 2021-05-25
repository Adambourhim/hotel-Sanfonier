import React from "react";
import navStyle from "./navStyle.module.css";
import Logo from "../../Rectangle.svg";
function navbar() {
  return (
    <div className={navStyle.container}>
      <div className={navStyle.box1}>
        <div>
          <img src={Logo} alt="logo" />
          <div className={navStyle.title}> SAFRAINER DU MGOUN</div>
        </div>
      </div>
      <div className={navStyle.box2}>
        <div>Home</div>
        <div>Facilties</div>
        <div>Rooms</div>
        <div>Contact-us</div>
      </div>
    </div>
  );
}

export default navbar;
