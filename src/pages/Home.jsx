import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { DotBackground } from "../Components/DotBackground";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060010] text-white">
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] px-4">
        <Header />
      </div>
      <DotBackground />
      <Footer />
    </div>
  );
}
