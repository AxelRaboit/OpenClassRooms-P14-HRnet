import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const dateFormat = (date) => date.toLocaleDateString("us-US");

/* Styled Component is used because sass module doesn't work for the datepicker style */
const ContainerStyled = styled.div`
  text-align: left;

  .react-datepicker__input-container {
  }
  .react-datepicker-wrapper {
    display: flex;
    flex-direction: column;
  }
  .react-datepicker {
  }
  .react-datepicker__triangle {
    &:before {
      border-bottom-color: #97ba16 !important;
    }
  }
  .react-datepicker__input-container {
    margin-top: 0.5rem;
  }
  .react-datepicker__input-container input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .react-datepicker__month-select,
  .react-datepicker__year-select {
    padding: 0.5rem;
  }
  .react-datepicker__day-name {
    color: white;
  }
  .react-datepicker__day {
    border: 1px solid #ccc;
  }
  .react-datepicker__month-container {
    background-color: white;
  }
  .react-datepicker__header {
    background-color: #97ba16;
  }
  .react-datepicker__current-month {
    color: white;
    margin: 1rem;
  }
  .react-datepicker__navigation {
    background-color: #566d1b;
    margin: 1rem;
  }
  .react-datepicker__day--selected {
    background-color: #97ba16;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: #97ba16;
  }
  .react-datepicker__day--in-selecting-range {
    background-color: #97ba16;
  }
  .react-datepicker__day--in-range {
    background-color: #97ba16;
  }
  .react-datepicker__day--range-start {
    background-color: #97ba16;
  }
  .react-datepicker__day--range-end {
    background-color: #97ba16;
  }
  .react-datepicker__day--disabled {
    background-color: lightgrey;
    color: #566d1b;
  }
  .react-datepicker__day--today {
    background-color: #566d1b;
    color: white;
  }
  .react-datepicker__day--outside-month {
    background-color: #97ba16;
  }
  .react-datepicker__day--outside-month:hover {
    background-color: #97ba16;
  }
  .react-datepicker__today-button {
    background-color: #97ba16;
    color: white;
  }
`;

export const DatePick = ({ label, name, selected, onChange, filterDate }) => {
  const handleChange = (date) => {
    onChange(name, dateFormat(date));
  };

  const selectedDate = selected ? new Date(selected) : null;

  return (
    <ContainerStyled>
      <label>{label}</label>
      <DatePicker
        selected={selectedDate}
        dateFormat="dd/MM/yyyy"
        onChange={handleChange}
        closeOnScroll={true}
        todayButton="Today"
        filterDate={filterDate}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </ContainerStyled>
  );
};
