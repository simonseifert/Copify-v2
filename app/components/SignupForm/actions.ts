"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const errorResponse = { status: "error", message: "There was an error." };

export async function signup(data) {
  try {
    // 1. Extract the email and password from the form data.
    // 2. Check db for user with that email.
    // 3. If no user, return error.
    // 4. If user, check password.
    // 5. If password good redirect

    const email = data.get("email")?.valueOf();
    const password = data.get("password")?.valueOf();
    const name = data.get("name")?.valueOf();

    if (!email || !password) {
      return;
    }

    const result = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (result) {
      return errorResponse;
    } else {
      await prisma.user.create({
        data: {
          email: email,
          password: password,
          name: name,
        },
      });

      const user = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      const successResponse = {
        status: "success",
        message: "Success!",
        user: user,
      };

      revalidatePath("/");

      return successResponse;
    }
  } catch (e) {
    console.log("error", e);
    return errorResponse;
  }
}
