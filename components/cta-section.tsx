"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground flex justify-center">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss how TigraLabs can help you achieve your business goals through our IT services, outsourcing, digital transformation, and automation solutions.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}