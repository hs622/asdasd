import Benefits from "@/components/benefits"; 
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/layouts/footer";
import Hero from "@/components/hero";
import Security from "@/components/security";
import Testimonials from "@/components/testimonials";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";

export default async function Home() { 
  const session = await getServerSession(authOptions);
  const user = session?.user

  return (
    <div className="flex flex-col items-center min-h-screen">
      <SiteHeader user={user} />
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
