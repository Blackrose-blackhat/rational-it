
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
  <div className="pt-16 md:pt-20 lg:pt-24 space-y-12 md:space-y-16">
    <Hero />
    <AboutUs />
    <Services />
    <IndustriesWeServe />
    <UseCasesSection />
    <WhyChooseUs />
    <ContactUs />
    <Footer />
  </div>
</main>

  );
}
