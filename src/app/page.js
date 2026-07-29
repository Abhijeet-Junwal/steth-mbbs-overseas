import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CountryGrid from "@/components/CountryGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import AdmissionJourney from "@/components/Admission";
import WhyChooseUs from "@/components/WhyChooseUs";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import Popup from "@/components/Popup";
import LeadCaptureSection from "@/components/LeadCaptureSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* <Navbar /> */}
      <Popup />
      
      <Hero />
      <LeadCaptureSection />
      <Stats />
      <Services />
      <AdmissionJourney /> 
      <WhyChooseUs />
      <CountryGrid />
      <Testimonials />
      <Contact />
    </main>
  );
}


