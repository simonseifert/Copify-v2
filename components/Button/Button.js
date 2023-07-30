import styles from "./Button.module.css";
import clsx from "clsx";

export const Button = (props) => {
  const { variant, type, children } = props;
  return (
    <button
      className={clsx(styles.button, {
        [styles.buttonOutline]: variant === "outline",
        [styles.buttonPrimary]: variant === "primary",
      })}
      type={type}
    >
      {children}
    </button>
  );
};
