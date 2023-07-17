import { useState } from "react";
import {
  DatePick,
  Dropdown,
  Modal,
  Error,
  Topbar,
  ValidationConstraintsForm,
} from "../components";
import stateOptions from "../data/countries/usa/states";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../slices/DataSlice";
import mockData from "../data/mockData";
import { Input } from "../components";

import style from "./Home.module.scss";

export const Home = () => {
  const employeeList = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    department: "",
    startDate: "",
    birthDate: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleGenerateEmployees = () => {
    mockData.forEach((employee) => {

      dispatch(
        addEmployee({
          id:
            employeeList.employees.value.length > 0
              ? employeeList.employees.value.length + 1
              : employee.id,
          firstname: employee.firstName,
          lastname: employee.lastName,
          street: employee.street,
          city: employee.city,
          state: employee.state,
          zip: employee.zip,
          department: employee.department,
          startDate: employee.startDate,
          birthDate: employee.birthDate,
        })
      );
    });

    setModalText("Employees generated successfully");
    setModal(true);
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();

    const validationConstraints = ValidationConstraintsForm(values);
    setFormErrors(validationConstraints);

    if (Object.keys(validationConstraints).length === 0) {
      dispatch(
        addEmployee({
          id:
            employeeList.employees.value.length > 0
              ? employeeList.employees.value.length + 1
              : 1,
          firstname: values.firstName,
          lastname: values.lastName,
          street: values.street,
          city: values.city,
          state: values.state,
          zip: values.zip,
          department: values.department,
          startDate: values.startDate,
          birthDate: values.birthDate,
        })
      );

      setFormErrors({});

      setValues({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        department: "",
        startDate: "",
        birthDate: "",
      });

      setModalText("Employee added successfully");
      setModal(true);
    }
  };

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <Topbar page="View Employees" link="/employees" />

      {modal &&
        <Modal
          modalBackgroundColor={'#97ba16'}
          modalTextColor={'#fff'}
          modalMaxWidth={'600px'}
          children={
            <div>
              <h3>{modalText}</h3>
            </div>
          }
        />
      }

      <div className={style.container}>
        <h1>Create Employee</h1>

        {employeeList.employees.value.length === 0 && (
          <div className={style.containerGenerateEmployees} >
            <button onClick={handleGenerateEmployees}>
              Generate Employees for testing
            </button>
          </div>
        )}

        <div className={style.formContainer}>
          <form className={style.Form} action="">
            <h2>Personal Information</h2>

            <Input
              name="firstName"
              label="First Name"
              type="text"
              placeholder="Steve"
              value={values.firstName}
              onChange={onChange}
            />

            {formErrors.firstName && <Error errorMsg={formErrors.firstName} />}

            <Input
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Jobs"
              value={values.lastName}
              onChange={onChange}
            />

            {formErrors.lastName && <Error errorMsg={formErrors.lastName} />}

            <DatePick
              label="Date of Birth"
              onChange={onChange}
              selected={values.birthDate}
              name="birthDate"
              filterDate={(d) => {
                return new Date() > d;
              }}
            />

            {formErrors.birthDate && <Error errorMsg={formErrors.birthDate} />}

            <DatePick
              label="Start Date"
              onChange={onChange}
              selected={values.startDate}
              name="startDate"
            />

            {formErrors.startDate && <Error errorMsg={formErrors.startDate} />}

            <h2>Address</h2>

            <Input
              name="street"
              label="Street"
              type="text"
              placeholder="10500 N De Anza Blvd"
              value={values.street}
              onChange={onChange}
            />

            {formErrors.street && <Error errorMsg={formErrors.street} />}

            <Input
              name="city"
              label="City"
              type="text"
              placeholder="Cupertino"
              value={values.city}
              onChange={onChange}
            />

            {formErrors.city && <Error errorMsg={formErrors.city} />}

            <Dropdown
              options={stateOptions}
              label="State"
              name="state"
              value={values.state}
              onChange={onChange}
            />

            {formErrors.state && <Error errorMsg={formErrors.state} />}

            <Input
              name="zip"
              label="Zip Code"
              type="text"
              placeholder="92160"
              value={values.zip}
              onChange={onChange}
            />

            {formErrors.zip && <Error errorMsg={formErrors.zip} />}

            <h2>Others</h2>

            <Dropdown
              options={[
                { value: "sales", label: "Sales" },
                { value: "marketing", label: "Marketing" },
                { value: "engineering", label: "Engineering" },
                { value: "human resources", label: "Human Resources" },
                { value: "legal", label: "Legal" },
              ]}
              onChange={onChange}
              label="Department"
              name="department"
              value={values.department}
            />

            {formErrors.department && (
              <Error errorMsg={formErrors.department} />
            )}

            <button
              className={style.formSubmit}
              type="submit"
              onClick={handleAddEmployee}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
