import React from "react";
import Gapriel from "./gabriel.svg";
import homeStyle from "./homeStyle.module.css";
function home() {
  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.text}>
        <p className={homeStyle.first}>Welcome</p>
      </div>
      <img src={Gapriel} alt="gapriel" />
    </div>
  );
}

export default home;
