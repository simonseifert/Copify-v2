import Link from "next/link"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function createUser(data) {
  "use server"
  const email = data.get("email")?.valueOf()
  const password = "testpass"

  await prisma.user.create({data: {email, password}})

  revalidatePath("/")
  redirect("/todo")
}

export default function Page() {

  return (
    <main style={{ padding: 50 }}>
      <h1>New</h1>
      <Link href="/todo">Back</Link>
      <br /><br />

      <form action={createUser}>
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
