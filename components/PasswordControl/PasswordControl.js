import styles from "./PasswordControl.module.css";
import ShowIcon from "public/images/show.svg";
import { useState } from "react";

export const PasswordControl = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <label className={styles.label}>{props.label}</label>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type={visible ? "text" : "password"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          name={props.name}
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
      {props.description && (
        <label className={styles.description}>{props.description}</label>
      )}
    </>
  );
};
