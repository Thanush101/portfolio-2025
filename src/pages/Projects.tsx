import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: ProjectImage;
  links: {
    demo: string;
    github: string;
  };
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Smart Pet Feeder",
    description: "An automated pet feeding system built with Python Django and ESP32 microcontrollers. The system includes real-time monitoring, feeding schedules, and mobile notifications.",
    tags: ["IoT", "Python", "Django", "ESP32"],
    image: {
      src: "/assets/projects/project1.png",
      alt: "Smart Pet Feeder Project"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 2,
    title: "AI Model Finetuning",
    description: "Custom AI models trained for specific business needs with automated deployment pipelines. Includes data preprocessing, model training, and deployment workflows.",
    tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
    image: {
      src: "/assets/projects/project2.png",
      alt: "AI Model Finetuning Project"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 3,
    title: "Web Scraping Automation",
    description: "Advanced Playwright-based job scrapers that collect and process data from various sources. Features include scheduled runs, data normalization, and integration with databases.",
    tags: ["Web Scraping", "Playwright", "JavaScript", "Automation"],
    image: {
      src: "/assets/projects/project3.png",
      alt: "Web Scraping Automation Project"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 4,
    title: "Security Audits & Pentesting",
    description: "Comprehensive security audit toolkit for vulnerability assessment and penetration testing. Includes automated scanning, reporting, and remediation recommendations.",
    tags: ["Cybersecurity", "Pentesting", "Python", "Security"],
    image: {
      src: "/assets/projects/project4.png",
      alt: "Security Audits & Pentesting Project"
    },
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    id: 5,
    title: "AI Smart Pill Box Tracker",
    description: "IoT solution for medication adherence with computer vision for pill identification, scheduling, and push notifications to ensure patients take medications on time.",
    tags: ["IoT", "Computer Vision", "Notifications", "Healthcare"],
    image: {
      src: "/assets/projects/project5.jpg",
      alt: "AI Smart Pill Box Tracker Project"
    },
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <div className="section-container">
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              A showcase of my work across AI/ML, cybersecurity, and IoT
            </p>
          </div>
        </div>
        
        <Section id="projects-showcase" className="pt-0">
          <div className="grid grid-cols-1 gap-10">
            {projectData.map((project, index) => (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden opacity-0 animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
                  <div className="lg:col-span-2 aspect-video lg:aspect-auto relative">
                    {project.image.src ? (
                      <img
                        src={project.image.src}
                        alt={project.image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.className = `lg:col-span-2 aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8`;
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full max-w-[200px] aspect-square rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center';
                          fallback.innerHTML = `<span class="text-4xl font-bold text-white/80">${project.title.charAt(0)}</span>`;
                          target.parentElement!.appendChild(fallback);
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
                        <div className="w-full max-w-[200px] aspect-square rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/80">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="lg:col-span-3 p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="default">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
