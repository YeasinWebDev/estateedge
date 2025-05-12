import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-[#f5f2ed] min-h-screen">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
