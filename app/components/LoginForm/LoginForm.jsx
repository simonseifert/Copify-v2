"use client";

import styles from "./LoginForm.module.scss";
import { login } from "./actions";
import { useState } from "react";
import { InputControl } from "@/components/InputControl";
import { PasswordControl } from "@/components/PasswordControl";
import { Button } from "@/components/Button";
import Link from "next/link";
import { redirect } from "next/navigation";

export const LoginForm = () => {
  const [message, setMessage] = useState("");

  async function onCreate(formData) {
    const res = await login(formData);
    setMessage(res.message);

    if (res.status === "success") {
      redirect(res.user.id);
    }
  }

  return (
    <form action={onCreate}>
      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}

      <InputControl
        name="email"
        label="Email or username"
        placeholder="Email or username"
        required
      />

      <PasswordControl
        name="password"
        label="Password"
        placeholder="Password"
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
        <Link className={styles.account} href="https://accounts.spotify.com/#">
          Forgot your password?
        </Link>
      </div>
    </form>
  );
};
