import styles from "./InputControl.module.scss";
import clsx from "clsx";

export const InputControl = (props) => {
  const { color, name, label, placeholder, required, description } = props;
  return (
    <>
      <label className={styles.label}>{label}</label>
      <div className={styles.wrapper}>
        <input
          className={clsx(styles.input, {
          [styles.inputDark]: color === "dark",
          [styles.inputLight]: color === "light",
        })}
          type="text"
          placeholder={placeholder}
          required={required}
          name={name}
        />
      </div>
      {description && (
        <label className={styles.description}>{description}</label>
      )}
    </>
  );
};
