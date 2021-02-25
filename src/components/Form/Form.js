import React, { useState } from "react";

import Input from "../Input/Input";

import styles from "./Form.module.css";

const Form = () => {
  const [inputsState, setInputsState] = useState({
    name: {
      value: "",
      isValid: false,
      isTouched: false,
    },
    surname: {
      value: "",
      isValid: false,
      isTouched: false,
    },
    job: {
      value: "",
      isValid: false,
      isTouched: false,
    },
  });

  const isTouched = Object.values(inputsState).some((i) => i.isTouched);
  const isValid = Object.values(inputsState).every((i) => i.isValid);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const submitForm = () => {
    if (!isValid) {
      return;
    } else {
      alert("Your form has been submitted");
    }
  };

  const setInputStateOnParent = (id, inputState) => {
    setInputsState({ ...inputsState, [id]: inputState });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input
        setInputStateOnParent={setInputStateOnParent}
        id="name"
        label="Name: "
      />
      <Input
        setInputStateOnParent={setInputStateOnParent}
        id="surname"
        label="Surname: "
      />
      <Input
        setInputStateOnParent={setInputStateOnParent}
        id="job"
        label="Job: "
      />

      <button onClick={submitForm} className={styles.submit}>
        Submit Form
      </button>

      {isTouched && !isValid && <span>Form is not valid !</span>}
    </form>
  );
};

export default Form;
