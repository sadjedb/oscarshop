import Footer from "@/components/admin/Footer";
import Header from "@/components/admin/Header";

export default function RootLayout({ children }) {
  return (
    <div lang="en">
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
