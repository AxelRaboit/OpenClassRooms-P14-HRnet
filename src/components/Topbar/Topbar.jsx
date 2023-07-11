import React from "react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import style from "./Topbar.module.scss";

export const Topbar = ({ page, link }) => {
  return (
    <div className={style.container}>
      <NavLink to={"/"}>
        <div className={style.containerImage}>
          <img src={Logo} alt="logo" />
        </div>
      </NavLink>
      <div className={style.containerBrand}>HRnet</div>
      <NavLink to={link}>{page}</NavLink>
    </div>
  );
};
