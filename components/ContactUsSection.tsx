"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContactUsSectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink?: string;
  className?: string;
}

export function ContactUsSection({
  title,
  description,
  buttonText,
  buttonLink = "/contact",
  className = "",
}: ContactUsSectionProps) {
  return (
    <section className={`py-10 flex justify-center ${className}`}>
      <div className="container">
        <div className="bg-primary/5 rounded-lg p-8 md:p-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-left">
            <div className="md:flex-1 md:mr-8 my-4">
              <h2 className="text-3xl font-bold">{title}</h2>
              {description && (
                <p className="text-lg text-muted-foreground">{description}</p>
              )}
            </div>
            <div className="md:flex-shrink-0">
              <Button asChild size="lg">
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
