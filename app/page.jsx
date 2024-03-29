import Link from "next/link";
import s from "@/styles/Home.module.scss";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className={s.main}>
      <Link href="/login">Login</Link>
      <br />
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
