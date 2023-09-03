import { prisma } from "@/lib/prisma";
import { InputControl } from "@/components/InputControl";

export default async function Page() {
  const user = await prisma.user.findFirst({
    where: {
    email: email
    },
  });
  return (
    <main style={{ padding: 50 }}>
      <h1>Password reset</h1>
      <InputControl
        name="email"
        label="Email"
        placeholder="Email"
        required
      />
    </main>
  );
}
