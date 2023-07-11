export const ValidationConstraintsForm = (values) => {
  const errors = {};
  const {
    firstName,
    lastName,
    street,
    city,
    zip,
    birthDate,
    startDate,
    state,
    department,
  } = values;

    const firstnameRegex = /^[a-zA-Z]{2,15}$/;
    const lastNameRegex = /^[a-zA-Z]{2,15}$/;
    const streetRegex = /^\d+\s[a-zA-Z\s,'-]+$/;
    const cityRegex = /^[a-zA-Z\s,'-]+$/;
    const zipRegex = /^[A-Za-z\d]{1,10}$/;

  /* FIRSTNAME */
  if (firstName === "") {
    errors.firstName = "First name should be 2-15 characters";
  } else if (!firstnameRegex.test(firstName)) {
    errors.firstName = "This is not a valid firstname format";
  }

  /* LASTNAME */
  if (lastName === "") {
    errors.lastName = "Lastname should be 2-15 characters";
  } else if (!lastNameRegex.test(lastName)) {
    errors.lastName = "This is not a valid lastname format";
  }

  /* STREET */
  if (street === "") {
    errors.street = "Street name is required";
  } else if (!streetRegex.test(street)) {
    errors.street = "This is not a valid street format";
  }

  /* CITY */
  if (city === "") {
    errors.city = "City name is required";
  } else if (!cityRegex.test(city)) {
    errors.city = "This is not a valid city format";
  }

  /* ZIP */
  if (zip === "") {
    errors.zip = "Zipcode is required";
  } else if (!zipRegex.test(zip)) {
    errors.zip = "This is not a valid zipcode format";
  }

  /* BIRTH DATE */
  if (birthDate === "") {
    errors.birthDate = "Please select a date";
  }

  /* START DATE */
  if (startDate === "") {
    errors.startDate = "Please select a date";
  }

  /* STATE */
  if (state === "") {
    errors.state = "Please select a state";
  }

  /* DEPARTMENT */
  if (department === "") {
    errors.department = "Please select a departement";
  }

  return errors;
};
