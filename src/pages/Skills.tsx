
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Progress } from "@/components/ui/progress";

const skillsData = {
  aiAndMl: [
    { name: "Machine Learning Algorithms", proficiency: 85 },
    { name: "Natural Language Processing", proficiency: 80 },
    { name: "Computer Vision", proficiency: 75 },
    { name: "Model Deployment", proficiency: 90 },
    { name: "AI Frameworks (TensorFlow, PyTorch)", proficiency: 85 }
  ],
  webScraping: [
    { name: "Playwright", proficiency: 95 },
    { name: "Firecrawl", proficiency: 90 },
    { name: "Data Extraction", proficiency: 95 },
    { name: "Automated Workflows", proficiency: 85 },
    { name: "API Development", proficiency: 80 }
  ],
  cybersecurity: [
    { name: "Penetration Testing", proficiency: 85 },
    { name: "Vulnerability Assessment", proficiency: 90 },
    { name: "Security Auditing", proficiency: 85 },
    { name: "Network Security", proficiency: 80 },
    { name: "Security Best Practices", proficiency: 95 }
  ],
  iot: [
    { name: "Embedded Systems", proficiency: 80 },
    { name: "Sensor Integration", proficiency: 85 },
    { name: "Microcontroller Programming", proficiency: 90 },
    { name: "IoT Protocols", proficiency: 75 },
    { name: "Edge Computing", proficiency: 70 }
  ],
  programming: [
    { name: "Python", proficiency: 95 },
    { name: "JavaScript", proficiency: 85 },
    { name: "Django", proficiency: 90 },
    { name: "SQL", proficiency: 80 },
    { name: "C/C++ (Embedded)", proficiency: 75 }
  ]
};

const SkillCategory = ({ title, skills, animationDelay = 0 }) => (
  <div
    className="glass-card rounded-2xl p-8 opacity-0 animate-fade-up"
    style={{ animationDelay: `${animationDelay}ms`, animationFillMode: "forwards" }}
  >
    <h2 className="text-2xl font-semibold mb-6">{title}</h2>
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
          </div>
          <Progress value={skill.proficiency} className="h-2" />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <div className="section-container">
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">Skills</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Technical expertise across multiple domains
            </p>
          </div>
        </div>
        
        <Section id="technical-skills" className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCategory 
              title="AI & Machine Learning" 
              skills={skillsData.aiAndMl}
              animationDelay={200}
            />
            
            <SkillCategory 
              title="Web Scraping & Automation" 
              skills={skillsData.webScraping}
              animationDelay={300}
            />
            
            <SkillCategory 
              title="Cybersecurity" 
              skills={skillsData.cybersecurity}
              animationDelay={400}
            />
            
            <SkillCategory 
              title="IoT & Embedded Systems" 
              skills={skillsData.iot}
              animationDelay={500}
            />
            
            <div className="md:col-span-2">
              <SkillCategory 
                title="Programming Languages & Frameworks" 
                skills={skillsData.programming}
                animationDelay={600}
              />
            </div>
          </div>
        </Section>
        
        <Section id="approach" className="bg-secondary/50">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
            <h2 className="text-2xl font-semibold mb-4 text-center">My Learning Approach</h2>
            <p className="text-muted-foreground mb-4">
              I believe in continuous improvement and hands-on learning. My technical skills have been developed through a combination of formal education, self-directed learning, and practical project experience.
            </p>
            <p className="text-muted-foreground">
              I'm always exploring new technologies and methodologies, with a focus on how they can be applied to solve real-world problems. This curiosity-driven approach ensures I stay current with the latest developments in the rapidly evolving tech landscape.
            </p>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
