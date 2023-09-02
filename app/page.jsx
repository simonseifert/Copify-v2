import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: { email: "test@test.com" },
  });

  const users = await prisma.user.findMany();

  return (
    <main style={{ padding: 50 }}>
      <Link href="/login">Login</Link>
      <br />
      Hello {user?.email}
      <br />
      <br />
      Users list:
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </main>
  );
}
