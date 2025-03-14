import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <div className="section-container">
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">About Thanush</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Background, expertise, and passion for technology
            </p>
          </div>
        </div>
        
        <Section id="profile" className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5 lg:col-span-4 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/assets/profile/profile.jpg"
                  alt="Thanush's Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="h-full w-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <div class="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
                          <span class="text-6xl font-bold text-primary/50">T</span>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
              
              <div className="mt-6 flex flex-col gap-4">
                <Button asChild variant="outline" className="w-full justify-start">
                  <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="md:col-span-7 lg:col-span-8">
              <div className="space-y-8">
                <div className="glass-card rounded-2xl p-8 opacity-0 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
                  <h2 className="text-2xl font-semibold mb-4">My Background</h2>
                  <p className="text-muted-foreground mb-4">
                    I'm Thanush, a technology enthusiast with a passion for creating innovative solutions across multiple domains. My journey in tech began with a curiosity about how systems work, which evolved into a professional path exploring the intersections of AI, cybersecurity, and IoT.
                  </p>
                  <p className="text-muted-foreground">
                    With experience working on diverse projects from machine learning models to embedded systems, I bring a unique perspective that bridges theoretical knowledge with practical implementation. I'm constantly exploring new technologies and methodologies to solve complex problems efficiently.
                  </p>
                </div>
                
                <div className="glass-card rounded-2xl p-8 opacity-0 animate-fade-up" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
                  <h2 className="text-2xl font-semibold mb-4">Technical Interests</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span>Developing AI systems that augment human capabilities and automate repetitive tasks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span>Exploring the potential of IoT to create smarter, more connected environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span>Building secure systems and identifying vulnerabilities through ethical hacking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span>Creating automated data collection systems using web scraping technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span>Designing efficient backend systems with Python and Django</span>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card rounded-2xl p-8 opacity-0 animate-fade-up" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
                  <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
                  <p className="text-muted-foreground mb-4">
                    I believe in creating technology that solves real problems while maintaining a focus on security, efficiency, and user experience. My cross-disciplinary background allows me to see connections between different fields and apply solutions from one domain to challenges in another.
                  </p>
                  <p className="text-muted-foreground">
                    Whether I'm developing an AI system, designing an IoT solution, or conducting security audits, I bring a methodical approach combined with creative problem-solving to deliver results that exceed expectations.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Button asChild>
                  <Link to="/projects">View My Projects</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
