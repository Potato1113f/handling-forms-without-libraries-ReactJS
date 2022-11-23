import FormInput from "./components/FormInput";
import "./style.css";
import React, { Fragment, useEffect, useState } from "react";
import Button from "./components/Button";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter Username",
      label: "Username",
      // pattern: "^[A-za-z0-9]{5,16}$",
      // errorMessage:
      //   "Username be 5-16 characters and should not include special characters",
      // required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Email",
      label: "Email",
      // required: true,
      // errorMessage: "Please enter a valid email address",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
      // pattern:
      //   "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      // required: true,
      // errorMessage:
      //   "Password should be 8-20 characters and includes at least 1 letter, 1 number, and 1 special character",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      // pattern: values.password,
      // required: true,
      // errorMessage: "Passwords do not match",
    },
  ];
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <h2>Handling Forms without React Libraries</h2>
        </div>
        <div>
          {inputs.map((input) => (
            <Fragment key={input.id}>
              <FormInput
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
              <p className="form-errors">{formErrors[input.name]}</p>
            </Fragment>
          ))}
        </div>
        <div className="form-actions">
          <Button btnStyle="form-btn">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
