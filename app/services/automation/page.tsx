import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Automation Services - TigraLabs",
  description: "TigraLabs streamlines your processes, reduces manual tasks, and boosts productivity through intelligent automation solutions.",
};

export default function AutomationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Efficiency with Automation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Automation that Powers Your Business
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Business automation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Automate Your Business, Elevate Efficiency</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Want to take efficiency to the next level through automation? At TigraLabs, we streamline your processes, reduce manual tasks, and boost productivity.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our automated solutions help you cut costs, improve accuracy, and deliver faster results, allowing your team to focus on strategic goals. With Tigra, you can move forward with speed, precision, and seamless performance.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Workflow and business process automation",
                    "Robotic Process Automation (RPA)",
                    "Custom software automation solutions",
                    "Integration of AI and machine learning",
                    "Continuous monitoring and optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/contact">Discover automation solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Automation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Increased Productivity",
                  description: "Automate repetitive tasks to free up your team's time for more strategic, value-adding activities."
                },
                {
                  title: "Enhanced Accuracy",
                  description: "Eliminate human error and ensure consistent, high-quality results across all processes."
                },
                {
                  title: "Cost Reduction",
                  description: "Lower operational costs through improved efficiency, reduced manual labor, and optimized resource allocation."
                },
                {
                  title: "Faster Delivery",
                  description: "Accelerate processes and reduce cycle times to deliver products and services faster to market."
                },
                {
                  title: "Scalability",
                  description: "Easily scale your operations without proportionally increasing costs or resources."
                },
                {
                  title: "Data-Driven Insights",
                  description: "Gain valuable business intelligence through automated data collection and analysis."
                }
              ].map((item, index) => (
                <div key={index} className="bg-background rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="bg-primary/5 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Automate?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's discuss how automation can transform your business operations and drive growth. Our experts are ready to create a tailored solution for your specific needs.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get Started with Automation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}