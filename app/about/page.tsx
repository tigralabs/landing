import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - TigraLabs",
  description: "Learn about TigraLabs, our mission, values, and the team behind our IT services and digital transformation solutions.",
};

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in IT and business transformation, Alex founded TigraLabs with a vision to help businesses thrive in the digital age.",
    avatar: "AJ",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Sarah leads our technical strategy and innovation, bringing extensive experience in software architecture and emerging technologies.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Digital Transformation",
    bio: "Michael specializes in helping businesses navigate their digital transformation journey with strategic insights and practical solutions.",
    avatar: "MR",
  },
  {
    name: "Emily Patel",
    role: "Head of Automation",
    bio: "Emily is passionate about creating automation solutions that drive efficiency and allow businesses to focus on what matters most.",
    avatar: "EP",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About TigraLabs</h1>
              <p className="text-xl text-muted-foreground">
                We're on a mission to transform businesses through technology
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2020, TigraLabs was born from a simple yet powerful idea: to help businesses harness the full potential of technology in an increasingly digital world.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our name, inspired by the tiger's strength, agility, and precision, reflects our approach to solving complex business challenges. Like a tiger, we move with purpose, adapt quickly to changing environments, and deliver results with precision.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to partner with businesses across industries, providing IT services, outsourcing solutions, digital transformation strategies, and automation tools that drive growth and success.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from the solutions we develop to the service we provide our clients."
                },
                {
                  title: "Innovation",
                  description: "We embrace innovation and continuously explore new technologies and approaches to solve complex business challenges."
                },
                {
                  title: "Partnership",
                  description: "We believe in building strong, collaborative partnerships with our clients, working together to achieve shared goals."
                },
              ].map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-6">
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Choose TigraLabs?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results. Our approach is collaborative, transparent, and focused on your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  {
                    title: "Expertise",
                    description: "Our team brings deep expertise across multiple technologies and industries."
                  },
                  {
                    title: "Results-Driven",
                    description: "We focus on delivering measurable business outcomes, not just technical solutions."
                  },
                  {
                    title: "Client-Centric",
                    description: "Your success is our success. We're committed to understanding and meeting your unique needs."
                  },
                ].map((point, index) => (
                  <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}