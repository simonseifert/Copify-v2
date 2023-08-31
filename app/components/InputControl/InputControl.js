import styles from "./InputControl.module.css";

export const InputControl = (props) => {
  return (
    <>
      <label className={styles.label}>{props.label}</label>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          name={props.name}
        />
      </div>
      {props.description && (
        <label className={styles.description}>{props.description}</label>
      )}
    </>
  );
};
