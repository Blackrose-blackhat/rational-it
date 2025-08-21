
import AboutUs from "@/components/common/about-us";
import { WhyChooseUs } from "@/components/common/choose-us";
import ContactUs from "@/components/common/contact-us";
import Footer from "@/components/common/footer";
import Hero from "@/components/common/Hero";
import IndustriesWeServe from "@/components/common/industries-serve";
import Navbar from "@/components/common/Navbar";
import Services from "@/components/common/services";
import { UseCasesSection } from "@/components/common/use-cases";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      <AboutUs />
      <Services />
      <IndustriesWeServe />
      <UseCasesSection />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
