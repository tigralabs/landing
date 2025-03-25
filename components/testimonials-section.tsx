"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "TigraLabs transformed our business operations with their automation solutions. We've seen a 40% increase in productivity since implementation.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
    avatar: "SJ",
  },
  {
    quote:
      "The IT recruitment team from TigraLabs integrated seamlessly with our existing developers. Their expertise helped us deliver our project ahead of schedule.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    avatar: "MC",
  },
  {
    quote:
      "Our digital transformation journey with TigraLabs has been exceptional. They understood our needs and delivered solutions that exceeded our expectations.",
    author: "Emily Rodriguez",
    role: "CEO, FutureTech Solutions",
    avatar: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 flex justify-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with TigraLabs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-lg">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
