import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Section } from "@/components/ui/Section";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center hero-text-container">
              <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 mb-6 text-sm font-medium text-primary">
                <AnimatedText text="Hi, I'm Thanush" delay={200} />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <AnimatedText
                  text="Bringing Technology & Innovation Together"
                  delay={400}
                  className="text-balance"
                />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                <AnimatedText
                  text="Specializing in AI/ML development, cybersecurity, and IoT solutions that solve real-world problems."
                  delay={600}
                  className="text-balance"
                />
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
                >
                  <Link to="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
                >
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
        </section>

        {/* Featured Projects Section */}
        <Section
          id="featured-projects"
          title="Featured Projects"
          subtitle="Explore some of my recent work across AI, IoT, and cybersecurity"
          className="bg-secondary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <div className="mb-4 text-primary font-medium">IoT</div>
              <h3 className="text-xl font-semibold mb-2">Smart Pet Feeder</h3>
              <p className="text-muted-foreground mb-4">
                A Python Django and ESP32-based solution for automated pet feeding with remote monitoring capabilities.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/projects">Learn More</Link>
              </Button>
            </div>
            
            <div className="glass-card rounded-2xl p-6 opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="mb-4 text-primary font-medium">AI</div>
              <h3 className="text-xl font-semibold mb-2">AI Model Finetuning</h3>
              <p className="text-muted-foreground mb-4">
                Custom AI models trained for specific business needs with automated deployment pipelines.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/projects">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="default">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </Section>

        {/* Skills Overview Section */}
        <Section
          id="skills-overview"
          title="Technical Expertise"
          subtitle="Areas where I can deliver exceptional results"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">AI/ML Development</h3>
              <p className="text-muted-foreground text-sm">
                Creating and fine-tuning AI models for business applications
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground text-sm">
                Security audits, penetration testing, and secure system design
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">IoT Development</h3>
              <p className="text-muted-foreground text-sm">
                Building connected devices and systems with embedded technology
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Web Automation</h3>
              <p className="text-muted-foreground text-sm">
                Creating advanced web scrapers and automation systems
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/skills">See All Skills</Link>
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
