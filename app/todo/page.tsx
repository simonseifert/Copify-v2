import Link from "next/link"
import { prisma } from "@/lib/prisma";

export default async function Page() {

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
