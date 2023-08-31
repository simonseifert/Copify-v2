import Link from "next/link"
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function Page() {

  revalidatePath("/todo")
  const users = await prisma.user.findMany()
  return (
    <main style={{ padding: 50 }}>
      <h1>Todos</h1>
      <Link href="/new">New</Link>
      <br /><br />
      <ul>
        {users.map(user => (
          <li>{user.email}</li>
        ))}
      </ul>
    </main>
  );
}
