
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./AnimatedText";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn("py-16 sm:py-24 overflow-hidden", className)}
    >
      <div className="section-container">
        {title && (
          <div className="mb-10 text-center">
            <AnimatedText 
              text={title} 
              className="text-3xl sm:text-4xl font-semibold tracking-tight"
              delay={100} 
            />
            {subtitle && (
              <AnimatedText 
                text={subtitle} 
                className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance"
                delay={300} 
              />
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
