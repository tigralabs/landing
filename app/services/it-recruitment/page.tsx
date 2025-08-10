import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextSlidesCarousel } from "@/components/TextSlidesCarousel";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Recruitment Services - TigraLabs",
  description:
    "TigraLabs provides specialized experts and ready-to-go teams to help your business thrive with top-tier talent and scalable solutions.",
};

const slides = [
  {
    title: "Access to Top IT Talent & Scalable Development Teams",
    description:
      "We connect you with skilled professionals and provide flexible scaling for your development team, ensuring you get the right expertise at every stage",
  },
  {
    title: "Flexible Scaling of Your Development Team",
    description:
      "Effortlessly scale your development team up or down based on your project needs, ensuring optimal efficiency and cost-effectiveness",
  },
  {
    title: "Custom Software Solutions with Fast Delivery & Cost Efficiency",
    description:
      "We create tailored digital solutions with agile development, delivering high-quality results on time and within budget",
  },
];

export default function ITRecruitmentPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container mx-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Right People for Your Business Goals
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tigra brings you the right talent to drive your business forward
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Need specialized experts or a ready-to-go team?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  TigraLabs has the agility, strength, and precision to tackle
                  all your challenges. Just like a tiger, we're fast, focused,
                  and ready to empower your business with top-tier talent and
                  scalable solutions.
                </p>

                <Button asChild size="lg">
                  <Link href="/contact">
                    Contact us for a tailored solution
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
                  }}
                />
                <div className="relative bg-black/50 backdrop-blur-sm">
                  <TextSlidesCarousel slides={slides} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our IT Recruitment Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
              {[
                {
                  step: "1",
                  title: "Requirements Analysis",
                  description:
                    "We work closely with you to understand your project needs, technical requirements, and team dynamics.",
                },
                {
                  step: "2",
                  title: "Talent Matching",
                  description:
                    "Our experts select the perfect specialists from our talent pool who match your technical and cultural requirements.",
                },
                {
                  step: "3",
                  title: "Seamless Integration",
                  description:
                    "We ensure smooth onboarding and integration of our specialists into your team and processes.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-8 shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <span className="text-xl font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactUsSection
          title="Ready to Build Your Dream Team?"
          buttonText="Contact Us Today"
        />
      </div>
      <Footer />
    </main>
  );
}
