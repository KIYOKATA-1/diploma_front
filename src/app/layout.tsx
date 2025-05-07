import Header from "./Components/Header/Header";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "eAnimal",
  description: "eAnimal co",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
