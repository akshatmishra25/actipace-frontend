import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PreNavbar from "@/components/PreNavbar";
import Image from "next/image";

export default function Home() {
  return (
    
    <>
      <header>
        <PreNavbar />
        <Navbar />
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
