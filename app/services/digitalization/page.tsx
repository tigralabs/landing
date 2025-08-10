import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextSlidesCarousel } from "@/components/TextSlidesCarousel";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digitalization Services - TigraLabs",
  description:
    "TigraLabs helps businesses streamline operations and unlock new growth opportunities through digital transformation.",
};

const slides = [
  {
    title: "Comprehensive Digital Strategy Development",
    description:
      "Designing end-to-end digital strategies to accelerate your transformation and drive long-term growth.",
  },
  {
    title: "Legacy System Digitalization",
    description:
      "Modernizing outdated systems with advanced digital solutions for improved functionality and scalability.",
  },
  {
    title: "Data-Driven Digital Insights",
    description:
      "Utilizing data analytics and business intelligence to make informed, real-time decisions that power digital success.",
  },
];

export default function DigitalizationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container mx-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Driving Success Through Digital Transformation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Boost efficiency and reduce costs with smart automation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Transforming Your Business, One Digital Step at a Time
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In today's fast-paced world, digitalization is key to staying
                  ahead. At TigraLabs, we collaborate with you to identify
                  improvement areas and implement solutions that boost
                  efficiency, reduce costs, and drive innovation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Let us streamline your operations and unlock new growth
                  opportunities.
                </p>

                <Button asChild size="lg">
                  <Link href="/contact">
                    Start your digital transformation journey
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
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
          <div className="container mx-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Digital Transformation Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Assessment & Strategy",
                  description:
                    "We evaluate your current digital maturity and develop a tailored transformation roadmap aligned with your business objectives.",
                },
                {
                  title: "Implementation & Integration",
                  description:
                    "Our experts implement digital solutions and seamlessly integrate them with your existing systems and processes.",
                },
                {
                  title: "Optimization & Growth",
                  description:
                    "We continuously monitor, optimize, and enhance your digital ecosystem to drive ongoing improvement and business growth.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-8 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactUsSection
          title="Ready to Transform Your Business?"
          buttonText="Schedule a Consultation"
        />
      </div>
      <Footer />
    </main>
  );
}
