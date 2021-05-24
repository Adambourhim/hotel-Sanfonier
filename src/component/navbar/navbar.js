import React from "react";
import navStyle from "./navStyle.module.css";
function navbar() {
  return (
    <div className={navStyle.container}>
      <div className={navStyle.box1}>
        <div>logo</div>
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
