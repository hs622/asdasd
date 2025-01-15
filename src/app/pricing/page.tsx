import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { PricingFAQ } from "@/components/pricing/pricing-faq";
import { PricingHeader } from "@/components/pricing/pricing-header";
import { PricingTiers } from "@/components/pricing/pricing-tiers";
import { PricingCTA } from '../../components/pricing/pricing-cta';
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const user = session?.user

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader user={user} />
      <main>
        <PricingHeader />
        <PricingTiers />
        {/* <LogoCloud /> */}
        <PricingCTA />
        <PricingFAQ /> 
      </main>
      <SiteFooter />
    </div>
  )
}

