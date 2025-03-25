import { ContactUsSection } from "@/components/ContactUsSection";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - TigraLabs",
  description:
    "Explore our portfolio of successful projects and learn how TigraLabs has helped businesses transform through technology.",
};

const caseStudies = [
  {
    title: "E-commerce Platform Transformation",
    // client: "RetailTech Inc.",
    description:
      "Modernized a legacy e-commerce platform, resulting in a 45% increase in conversion rates and 30% faster page load times.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React", "Node.js", "AWS", "Microservices"],
    service: "Digital Transformation",
  },
  {
    title: "Automated Inventory Management System",
    // client: "Global Logistics Co.",
    description:
      "Developed an AI-powered inventory management system that reduced manual processing time by 85% and improved accuracy by 40%.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Python", "TensorFlow", "Docker", "PostgreSQL"],
    service: "Automation",
  },
  {
    title: "Healthcare Patient Portal",
    // client: "MediCare Solutions",
    description:
      "Built a secure, HIPAA-compliant patient portal that streamlined appointment scheduling and improved patient engagement by 60%.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Angular", ".NET Core", "Azure", "SQL Server"],
    service: "IT consulting",
  },
  {
    title: "Financial Analytics Dashboard",
    // client: "Investment Partners Ltd.",
    description:
      "Delivered a real-time financial analytics dashboard that reduced reporting time from days to minutes and improved decision-making.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["Vue.js", "GraphQL", "Elasticsearch", "Kubernetes"],
    service: "IT recruitment",
  },
  {
    title: "Manufacturing Process Automation",
    // client: "Industrial Innovations",
    description:
      "Implemented IoT-based automation system that increased production efficiency by 35% and reduced operational costs by 25%.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["IoT", "C++", "MQTT", "AWS IoT"],
    service: "Automation",
  },
  {
    title: "Mobile Banking Application",
    // client: "NextGen Bank",
    description:
      "Developed a secure, feature-rich mobile banking application that increased customer engagement by 70% and transaction volume by 50%.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    technologies: ["React Native", "Node.js", "MongoDB", "Firebase"],
    service: "IT consulting",
  },
];

const testimonials = [
  {
    quote:
      "TigraLabs delivered beyond our expectations. Their team's technical expertise and business understanding helped us achieve our digital transformation goals faster than we thought possible.",
    author: "David Chen",
    role: "CTO, RetailTech Inc.",
    stars: 5,
  },
  {
    quote:
      "The automation solution provided by TigraLabs has revolutionized our operations. We've seen dramatic improvements in efficiency and accuracy, allowing us to focus on strategic growth.",
    author: "Maria Rodriguez",
    role: "Operations Director, Global Logistics Co.",
    stars: 5,
  },
  {
    quote:
      "Working with TigraLabs has been a game-changer for our healthcare platform. Their attention to security and compliance, while still delivering an intuitive user experience, was impressive.",
    author: "Dr. James Wilson",
    role: "CEO, MediCare Solutions",
    stars: 5,
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Case Studies
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore how we've helped businesses transform and grow through
                technology
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 flex justify-center">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col h-full"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary">{caseStudy.service}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{caseStudy.title}</CardTitle>
                    {/* <CardDescription>
                      Client: {caseStudy.client}
                    </CardDescription> */}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4">
                      {caseStudy.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50 flex justify-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Client Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <div className="mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <span key={i} className="text-yellow-500">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                    {/* <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <ContactUsSection
          title="Ready to Create Your Success Story?"
          description="Let's discuss how TigraLabs can help you achieve your business goals through our IT services, outsourcing, digital transformation, and automation solutions."
          buttonText="Contact Us Today"
        />
      </div>
      <Footer />
    </main>
  );
}
