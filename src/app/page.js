import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Works from "@/components/sections/Works";
import Clients from "@/components/sections/Clients";
import FAQs from "@/components/sections/FAQs";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Works />
        <Clients />
        <FAQs />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
