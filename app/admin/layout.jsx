import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
