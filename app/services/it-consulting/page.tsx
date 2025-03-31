import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextSlidesCarousel } from "@/components/TextSlidesCarousel";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Consulting Services - TigraLabs",
  description:
    "TigraLabs delivers end-to-end solutions, providing everything you need from concept to launch with expert guidance and ongoing support.",
};

const slides = [
  {
    title: "Complete Project Ownership from Start to Finish",
    description:
      "We manage the entire project lifecycle, from inception to delivery.",
  },
  {
    title: "Tailored Solutions Aligned with Your Business Objectives",
    description:
      "Our solutions are designed to meet your specific business goals.",
  },
  {
    title: "IT Process Analysis & Strategic Development Planning",
    description:
      "We conduct a comprehensive analysis of your existing systems and workflows to identify areas for improvement",
  },
];

export default function ITConsultingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Complete Solutions, Built for You
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From Idea to Implementation, We've Got You Covered
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
                  }}
                />
                <div className="relative bg-black/50 backdrop-blur-sm">
                  <TextSlidesCarousel slides={slides} />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">
                  From Idea to Implementation, We've Got You Covered
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Tigralabs, we deliver end-to-end solutions, providing
                  everything you need from concept to launch. Our team of tigras
                  creates tailored products that align with your business goals,
                  ensuring seamless execution every step of the way. With expert
                  guidance and ongoing support, we help your business thrive
                  through innovation and efficiency.
                </p>

                <Button asChild size="lg">
                  <Link href="/contact">Let's build your product together</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "We analyze your business needs, target audience, and market position to define project goals.",
                },
                {
                  step: "2",
                  title: "Design & Planning",
                  description:
                    "Our team creates detailed specifications, wireframes, and project roadmaps.",
                },
                {
                  step: "3",
                  title: "Development",
                  description:
                    "We build your solution using agile methodologies with regular demos and feedback cycles.",
                },
                {
                  step: "4",
                  title: "Delivery & Support",
                  description:
                    "After thorough testing, we launch your product and provide ongoing maintenance and support.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-md"
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
          title="Ready to Discover Custom Solutions for Your Business?"
          buttonText="Contact Us Today"
        />
      </div>
      <Footer />
    </main>
  );
}
