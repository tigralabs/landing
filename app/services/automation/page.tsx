import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TextSlidesCarousel } from "@/components/TextSlidesCarousel";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automation Services - TigraLabs",
  description:
    "TigraLabs streamlines your processes, reduces manual tasks, and boosts productivity through intelligent automation solutions.",
};

const slides = [
  {
    title: "Automation Strategy for Operational Efficiency",
    description:
      "Replacing manual tasks with tailored automation solutions to boost productivity and reduce errors.",
  },
  {
    title: "Process Automation to Eliminate Manual Work",
    description:
      "Streamlining workflows by automating repetitive tasks, allowing teams to focus on high-value activities.",
  },
  {
    title: "DevOps Automation",
    description:
      "Implementing automation in the development and deployment pipeline to increase speed, reliability, and scalability.",
  },
  {
    title: "Automated Testing Solutions",
    description:
      "Replacing manual testing with automated testing frameworks for faster, more accurate results.",
  },
];

export default function AutomationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container mx-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock Efficiency with Automation
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Automation that Powers Your Business
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)",
                  }}
                />
                <div className="relative bg-black/50 backdrop-blur-sm">
                  <TextSlidesCarousel slides={slides} />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Automate Your Business, Elevate Efficiency
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At TigraLabs, we streamline your processes, reduce manual
                  tasks, and boost productivity.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our automated solutions help you cut costs, improve accuracy,
                  and deliver faster results, allowing your team to focus on
                  strategic goals. With Tigra, you can move forward with speed,
                  precision, and seamless performance.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Discover automation solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container mx-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Benefits of Automation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Productivity",
                  description:
                    "Automate repetitive tasks to free up your team's time for more strategic, value-adding activities.",
                },
                {
                  title: "Enhanced Accuracy",
                  description:
                    "Eliminate human error and ensure consistent, high-quality results across all processes.",
                },
                {
                  title: "Cost Reduction",
                  description:
                    "Lower operational costs through improved efficiency, reduced manual labor, and optimized resource allocation.",
                },
                {
                  title: "Faster Delivery",
                  description:
                    "Accelerate processes and reduce cycle times to deliver products and services faster to market.",
                },
                {
                  title: "Scalability",
                  description:
                    "Easily scale your operations without proportionally increasing costs or resources.",
                },
                {
                  title: "Data-Driven Insights",
                  description:
                    "Gain valuable business intelligence through automated data collection and analysis.",
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
          title="Ready to Automate?"
          buttonText="Get Started with Automation"
        />
      </div>
      <Footer />
    </main>
  );
}
