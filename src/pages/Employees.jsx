import React from "react";
import { useSelector } from "react-redux";
import { Topbar, BasicTable } from "../components";
import style from "./Employees.module.scss";

export const Employees = () => {
  const employeeList = useSelector((state) => state.employees);

  return (
    <>
      <Topbar page="Return to home" link={"/"} />
      <div className={style.container}>
        <h1>Employees List</h1>
        <BasicTable dataTable={employeeList.employees.value} />
      </div>
    </>
  );
};
