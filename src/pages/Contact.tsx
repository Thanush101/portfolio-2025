import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";

const ContactCard = ({ icon: Icon, title, description, actionText, link, animationDelay = 0 }) => (
  <div 
    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center opacity-0 animate-fade-up"
    style={{ animationDelay: `${animationDelay}ms`, animationFillMode: "forwards" }}
  >
    <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm mb-4">{description}</p>
    <Button asChild variant="outline" size="sm" className="mt-auto">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {actionText}
      </a>
    </Button>
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20 flex-1">
        <div className="section-container">
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 animate-fade-in">Contact Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
              Reach out for collaborations, questions, or just to say hello
            </p>
          </div>
        </div>
        
        <Section id="contact-options" className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ContactCard 
              icon={Mail}
              title="Email"
              description="Drop me an email for inquiries or detailed discussions"
              actionText="Send Email"
              link="mailto:thanushthan124@gmail.com"
              animationDelay={200}
            />
            
            <ContactCard 
              icon={Github}
              title="GitHub"
              description="Check out my code repositories and open source contributions"
              actionText="View GitHub"
              link="https://github.com/Thanush101"
              animationDelay={300}
            />
            
            <ContactCard 
              icon={Linkedin}
              title="LinkedIn"
              description="Connect with me professionally for job opportunities"
              actionText="Connect"
              link="https://www.linkedin.com/in/thanush-thankachan-255b31148/"
              animationDelay={400}
            />
          </div>
          
          <div 
            className="glass-card rounded-2xl p-8 max-w-3xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <MessageSquare className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </Section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
