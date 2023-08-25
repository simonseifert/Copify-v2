import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { PrismaClient, Contact, Prisma } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });
const prisma = new PrismaClient();

// export async function getServerSideProps() {
//   const contacts = await prisma.contact.findMany();
//   return {
//     props: {
//       initialContacts: contacts,
//     },
//   };
// }

export default function Home({ initialContacts }) {
  // const [contacts, setContacts] = useState(initialContacts);
  return (
    <>
      <Link href="/login">Login</Link>
    </>
  );
}
