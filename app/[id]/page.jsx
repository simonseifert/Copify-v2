import { prisma } from "@/lib/prisma";

export default async function Page({ id }) {
  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
  });
  return (
    <main style={{ padding: 50 }}>
      <h1>Todos {user.name}</h1>
    </main>
  );
}
