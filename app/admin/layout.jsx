import Footer from "@/components/admin/Footer";
import Header from "@/components/admin/Header";
import SideBar from "@/components/admin/SideBar";

export default function RootLayout({ children }) {
  return (
    <div lang="en">
      <Header />
      <SideBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
}
