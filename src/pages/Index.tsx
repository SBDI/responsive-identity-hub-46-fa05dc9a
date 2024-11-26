import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="bg-gray-50">
        <About />
      </div>
      <Portfolio />
      <div className="bg-gray-50">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;