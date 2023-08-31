"use client"

import Link from "next/link";
import { Button } from "@/components/Button";
import styles from "@/styles/login.module.css";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";
import { InputControl } from "@/components/InputControl";
import { PasswordControl } from "@/components/PasswordControl";
import LogoSvg from "public/images/logo.svg";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function Login()


// u page pozvat comp createuser i proslijediti props email i pass
{

  async function createUser(data) {
    "use server"
    const email = data.get("email")?.valueOf()
    const password = data.get("password")?.valueOf()
  
    await prisma.user.create({data: {email, password}})
  
    revalidatePath("/")
    redirect("/")
  }
  
  // const [login, setLogin] = useState({
  //   email: "",
  //   password: "",
  // });
  // const router = useRouter();

  // useEffect(() => {
  //   console.log("useEffect", login);
  //   const value = localStorage.getItem("login");
  //   if (value) {
  //     const parsedLogin = JSON.parse(value);
  //     setLogin(parsedLogin);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect login", login);
  // }, [login]);

  // const saveToLocalStorage = (e) => {
  //   e.preventDefault();
  //   const loginJSON = JSON.stringify(login);
  //   console.log(loginJSON);
  //   localStorage.setItem("login", loginJSON);
  // };

  // const handleFormSubmit = (e) => {
  //   saveToLocalStorage(e);
  //   router.push("/");
  // };

  // const setAuth = (field, value) => {
  //   setLogin({
  //     ...login,
  //     [field]: value,
  //   });
  // };

  // const handleChange = (e) => {
  //   setAuth(e.target.name, e.target.value);
  // };

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <div
          className={styles.logo}
          onClick={() => {
            window.open("https://www.spotify.com");
          }}
        >
          {/* <LogoSvg /> */}
        </div>
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
          <form className={styles.form}
          // onSubmit={handleFormSubmit}
          action={createUser}>
            <InputControl
              name="email"
              label="Email or username"
              placeholder="Email or username"
              // value={login.email}
              // onChange={handleChange}
              required
            />
            <PasswordControl
            name="password"
              label="Password"
              placeholder="Password"
              // value={login.password}
              // onChange={handleChange}
              required
            />

            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>

            <label className={styles.rememberMe}>Remember me</label>

            <Button variant="primary" type="submit">
              <span>Log In</span>
            </Button>
            <div className={styles.centerBlock}>
              <Link
                className={styles.account}
                href="https://accounts.spotify.com/#"
              >
                Forgot your password?
              </Link>
            </div>
          </form>
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
