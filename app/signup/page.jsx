import styles from "@/styles/signup.module.scss";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";
import clsx from "clsx";
import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            className={styles.logosvg}
            src="/images/logo.svg"
            fill={true}
          />
        </div>
      </div>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Sign up for free to start listening.</h1>
        <div className={styles.wrapper}>
          <SocialAuthButtons
            buttons={[
              {
                name: "Sign up with Facebook",
                variant: "facebook",
                icon: "icons/facebook_white.svg",
              },
              {
                name: "Sign up with Google",
                variant: "signup",
                icon: "icons/google.svg",
              },
            ]}
          />
          <div className={styles.or}>or</div>
        </div>

        <div className={clsx(styles.wrapper, styles.wrapperLast)}>
          <h2 className={styles.subtitle}>Sign up with your email address</h2>
          <LoginForm />
        </div>

        <div className={styles.centerBlockBotom}>
          <label className={styles.noAccount}>Have an account? </label>
          <Link className={styles.account} href="/login">
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
