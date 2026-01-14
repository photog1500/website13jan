import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function PersimmonsPage() {
  // Setup 2 varieties
  const items = Array.from({ length: 2 }, (_, i) => `Persimmon ${i + 1}`);

  const HERO_IMAGE = "https://images.unsplash.com/photo-1765861067975-9156551e16ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwZXJzaW1tb24lMjBmcnVpdCUyMHRyZWV8ZW58MHwwfHx8MTc2NjQ2MTU5N3ww&ixlib=rb-4.1.0&q=85";

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/#fruit"><ArrowLeft size={16} /> Back to Seasonal Highlights</Link>
          </Button>
        </div>
      </div>
      
      <HeroSection 
        title="Persimmons"
        subtitle="Beautiful orange fruit ripening in late autumn."
        imageUrl={HERO_IMAGE}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <Button key={index} variant="outline" className="h-auto py-8 text-lg font-serif hover:bg-primary hover:text-white transition-colors">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
