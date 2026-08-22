import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentWork from "@/components/RecentWork";
import Blog from "@/components/Blog"; // <--- Import here
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <RecentWork />
      <Blog /> {/* <--- Place it here */}
      <Testimonials />
      <Footer />
      <FloatingContact />
    </main>
  );
}