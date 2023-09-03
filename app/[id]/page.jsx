import { prisma } from "@/lib/prisma";

export default async function Page({ params }) {
  const user = await prisma.user.findFirst({
    where: {
      id: params.id,
    },
  });
  return (
    <main style={{ padding: 50 }}>
      <h1>Hello {user.name}</h1>
    </main>
  );
}
