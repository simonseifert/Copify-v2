"use server";
async function createUser(data) {
  const email = data.get("email")?.valueOf();
  const password = data.get("password")?.valueOf();

  await prisma.user.create({ data: { email, password } });

  revalidatePath("/");
  redirect("/");
}
