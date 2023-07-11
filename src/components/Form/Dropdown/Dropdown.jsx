import React from "react";
import Select from "react-select";
import style from "./Dropdown.module.scss";

export const Dropdown = ({ options, label, name, value, onChange }) => {
  const handleChange = (selectedValue) => {
    const value = selectedValue?.value || "";
    onChange(name, value);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      padding: "0",
      marginBottom: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    }),
    menu: (provided) => ({
      ...provided,
      marginTop: 0,
    }),
  };

  return (
    <div className={style.container}>
      <div className={style.containerLabel}>
        <label htmlFor={name}>{label}</label>
      </div>
      <Select
        options={options}
        onChange={handleChange}
        isClearable
        value={options.find((option) => option.value === value)}
        styles={customStyles}
      />
    </div>
  );
};
