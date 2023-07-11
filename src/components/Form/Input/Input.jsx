import React from "react";
import style from "./Input.module.scss";

export const Input = ({ type, name, value, label, placeholder, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };


  return (
    <>
      <label className={style.label} htmlFor={name}>{label}</label>
      <input className={style.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};
