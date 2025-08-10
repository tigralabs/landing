"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Code, Laptop, Cog } from "lucide-react";

export const services = [
  {
    icon: Users,
    title: "IT recruitment",
    href: "/services/it-recruitment",
    description: "The Right People for Your Business Goals",
    content:
      "Need specialized experts or a ready-to-go team? TigraLabs has the agility, strength, and precision to tackle all your challenges.",
  },
  {
    icon: Code,
    title: "IT consulting",
    href: "/services/it-consulting",
    description: "From Idea to Implementation, We’ve Got You Covered",
    content:
      "At TigraLabs, we deliver end-to-end solutions, providing everything you need from concept to launch.",
  },
  {
    icon: Laptop,
    title: "Digitalization",
    description: "Driving Success Through Digital Transformation",
    content:
      "TigraLabs partners with you to analyze potential areas for improvement and implement solutions that enhance efficiency, reduce costs, and drive innovation.",
    href: "/services/digitalization",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Unlock Efficiency with Automation",
    content:
      "At TigraLabs, we streamline your processes, reduce manual tasks, and boost productivity through intelligent automation solutions.",
    href: "/services/automation",
  },
];

export function ServicesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-muted/50 flex justify-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.content}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
