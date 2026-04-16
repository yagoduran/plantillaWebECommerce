import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Comparison } from "@/components/sections/Comparison";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { LearnGrid } from "@/components/sections/LearnGrid";
import { OfferBenefits } from "@/components/sections/OfferBenefits";
import { Pricing } from "@/components/sections/Pricing";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustSection } from "@/components/sections/TrustSection";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";

export default function Page() {
  return (
    <main className="pb-4">
      <Navbar />
      <Hero />
      <VideoShowcase />
      <LearnGrid />
      <ResultsShowcase />
      <WhoIsItFor />
      <Testimonials />
      <Comparison />
      <OfferBenefits />
      <Pricing />
      <TrustSection />
      <Faq />
      <Footer />
    </main>
  );
}
