import React, { useEffect, useState } from "react";

import styles from "./Input.module.css";

const Input = ({ id, label, setInputStateOnParent }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
    setIsTouched(true);

    setInputStateOnParent(id, {
      value: e.target.value,
      isValid,
      isTouched: true,
    });
  };

  useEffect(() => {
    const isNotValid = value.length > 15;
    setIsValid(!isNotValid);
  });

  const classNameString = `${styles.input} ${
    isTouched && !isValid && value ? styles.error : ""
  }`;

  return (
    <label className={styles.label} for={id}>
      {label}
      <input
        id={id}
        className={classNameString}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
