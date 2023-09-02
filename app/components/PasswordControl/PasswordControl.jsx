"use client";

import styles from "./PasswordControl.module.scss";
import ShowIcon from "public/images/show.svg";
import { useState } from "react";
import clsx from "clsx";

export const PasswordControl = (props) => {
  const { color, name, label, placeholder, required, description } = props;
  const [visible, setVisible] = useState(false);
  return (
    <>
      <label className={styles.label}>{label}</label>
      <div className={styles.wrapper}>
        <input
          className={clsx(styles.input, {
          [styles.inputDark]: color === "dark",
          [styles.inputLight]: color === "light",
        })}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          name={name}
        />
        <button
          className={styles.show}
          type="button"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <ShowIcon />
        </button>
      </div>
      {description && (
        <label className={styles.description}>{description}</label>
      )}
    </>
  );
};
