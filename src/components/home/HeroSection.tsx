import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  variant?: "centered" | "split";
}

export function HeroSection({ title, subtitle, imageUrl, variant = "centered" }: HeroSectionProps) {
  if (variant === "split") {
    return (
      <section className="relative min-h-screen w-full flex flex-col lg:flex-row">
        {/* Left: Image */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-auto overflow-hidden">
          <img 
            src={imageUrl} 
            alt="Orchard Landscape" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for navbar visibility */}
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center p-8 lg:p-24 relative">
          <div className="relative z-10 space-y-8 animate-fade-in text-left text-white max-w-xl">
            <div className="space-y-6">

<img src="/logo.png"
alt="Latch logo"
classname="w-[80%] object-contain"
/>

              <p className="text-accent font-medium tracking-widest uppercase text-sm md:text-base">
                Est. 2024
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm text-white">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white border-none font-serif text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                asChild
              >
                <a href="/ripe-calendar">See What's Ripe</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-serif text-lg px-8 py-6 rounded-full transition-all"
              >
                Plan Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt="Orchard Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="text-accent font-medium tracking-widest uppercase text-sm md:text-base">
            Est. 2024
          </p>
          {/* Logo */}
          <div className="flex justify-center my-4">
            <img 
              src="/logo.png" 
              alt="Latch Orchards Logo" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white border-none font-serif text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <a href="ripe-calendar">See What's Ripe</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-serif text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <ArrowDown size={32} />
      </div>
    </section>
  );
}
