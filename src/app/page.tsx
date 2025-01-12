import Benefits from "@/components/benefits"; 
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Security from "@/components/security";
import Testimonials from "@/components/testimonials";

export default async function Home() { 
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <Benefits />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
