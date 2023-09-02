import styles from "./Button.module.scss";
import clsx from "clsx";

export const Button = (props) => {
  const { variant, type, children } = props;
  return (
    <button
      className={clsx(styles.button, {
        [styles.buttonOutline]: variant === "outline",
        [styles.buttonPrimary]: variant === "primary",
        [styles.buttonFacebook]: variant === "facebook",
        [styles.buttonSignup]: variant === "signup",
      })}
      type={type}
    >
      {children}
    </button>
  );
};
