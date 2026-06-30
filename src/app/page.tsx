import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { AboutHome } from "@/components/site/about-home";
import { Solutions } from "@/components/site/solutions";
import { HowItWorks } from "@/components/site/how-it-works";
import { WhyChoose } from "@/components/site/why-choose";
import { Sustainability } from "@/components/site/sustainability";
import { Industries } from "@/components/site/industries";
import { MobileApp } from "@/components/site/mobile-app";
import { Testimonials } from "@/components/site/testimonials";
import { Partners } from "@/components/site/partners";
import { Achievements } from "@/components/site/achievements";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutHome />
        <Solutions />
        <HowItWorks />
        <WhyChoose />
        <Sustainability />
        <Industries />
        <MobileApp />
        <Testimonials />
        <Achievements />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
