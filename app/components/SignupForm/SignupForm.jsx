"use client";

import styles from "./SignupForm.module.scss";
import { signup } from "./actions";
import { useState } from "react";
import { InputControl } from "@/components/InputControl";
import { PasswordControl } from "@/components/PasswordControl";
import { Button } from "@/components/Button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const SignupForm = () => {
  const [message, setMessage] = useState("");

  async function onCreate(formData) {
    const res = await signup(formData);
    setMessage(res.message);

    if (res.status === "success") {
      revalidatePath("/");
      redirect("/");
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
        label="What’s your email address?"
        placeholder="Enter your email."
        required
        color="light"
      />

      <PasswordControl
        name="password"
        label="Create a password"
        placeholder="Create a password."
        required
        color="light"
      />

      <InputControl
        name="name"
        label="What should we call you?"
        placeholder="Enter a profile name."
        required
        color="light"
      />

      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>

      <label className={styles.rememberMe}>Remember me</label>

      <Button variant="primary" type="submit">
        <span>Sign up</span>
      </Button>

      <div className={styles.centerBlock}>
        <Link className={styles.account} href="https://accounts.spotify.com/#">
          Forgot your password?
        </Link>
      </div>
    </form>
  );
};
