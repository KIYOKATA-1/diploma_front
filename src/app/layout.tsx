import "./globals.css";

export const metadata = {
  title: "eAnimal",
  description: "eAnimal co",
  icons:{
    icon: "/favicon-32x32.png"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
