import Footer from "@/components/login/Footer";
import Navbar from "@/components/home/Navbar";

export default function homeLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
