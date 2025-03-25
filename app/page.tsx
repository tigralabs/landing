import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactUsSection } from "@/components/ContactUsSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactUsSection
          title="Ready to Transform Your Business?"
          description="Let's discuss how TigraLabs can help you achieve your business goals through our comprehensive IT services."
          buttonText="Contact Us Today"
        />
      </div>
      <Footer />
    </main>
  );
}
