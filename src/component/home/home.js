import React from "react";
import Gapriel from "./gabriel.svg";
import homeStyle from "./homeStyle.module.css";
function home() {
  return (
    <div className={homeStyle.container}>
      <img src={Gapriel} alt="gapriel" />
      <p>Welcome</p>
    </div>
  );
}

export default home;
