import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digitalization Services - TigraLabs",
  description: "TigraLabs helps businesses streamline operations and unlock new growth opportunities through digital transformation.",
};

export default function DigitalizationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Success Through Digital Transformation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Powering Your Business with Digitalisation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Transforming Your Business, One Digital Step at a Time</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  In today's fast-paced world, digitalization is key to staying ahead. TigraLabs partners with you to analyze potential areas for improvement and implement solutions that enhance efficiency, reduce costs, and drive innovation.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Let us help you streamline operations and unlock new growth opportunities.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Comprehensive digital strategy development",
                    "Business process optimization and automation",
                    "Legacy system modernization",
                    "Cloud migration and infrastructure optimization",
                    "Data analytics and business intelligence solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/contact">Start your digital transformation journey</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Digital transformation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Digital Transformation Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Assessment & Strategy",
                  description: "We evaluate your current digital maturity and develop a tailored transformation roadmap aligned with your business objectives."
                },
                {
                  title: "Implementation & Integration",
                  description: "Our experts implement digital solutions and seamlessly integrate them with your existing systems and processes."
                },
                {
                  title: "Optimization & Growth",
                  description: "We continuously monitor, optimize, and enhance your digital ecosystem to drive ongoing improvement and business growth."
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
                <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Take the first step towards digital excellence. Our team of experts is ready to help you navigate the digital landscape and unlock new opportunities for growth.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Schedule a Consultation</Link>
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