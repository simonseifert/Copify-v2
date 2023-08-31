import "@/styles/globals.scss";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: "%s | Copyify",
    default: "Copyify",
  },
  description: "",
};
