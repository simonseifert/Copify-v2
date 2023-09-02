import styles from "@/styles/login.module.scss";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";
// import LogoSvg from "@/public/images/logo.svg";
import clsx from "clsx";
import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div className={styles.logo}>{/* <LogoSvg /> */}</div>
      </div>
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Log in to Spotify</h1>
        <div className={styles.wrapper}>
          <SocialAuthButtons
            buttons={[
              {
                name: "Continue with Google",
                variant: "outline",
                icon: "icons/google.svg",
              },
              {
                name: "Continue with Facebook",
                variant: "outline",
                icon: "icons/facebook.svg",
              },
              {
                name: "Continue with Apple",
                variant: "outline",
                icon: "icons/apple.svg",
              },
            ]}
          />
        </div>

        <div className={clsx(styles.wrapper, styles.wrapperLast)}>
          <LoginForm />
        </div>

        <div className={styles.centerBlockBotom}>
          <label className={styles.noAccount}>Don't have an account? </label>
          <Link
            className={styles.account}
            href="https://accounts.spotify.com/#"
          >
            Sign up for Spotify
          </Link>
        </div>
      </div>
    </div>
  );
}
