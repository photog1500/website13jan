import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function VariegatedVarietiesPage() {
  // Setup 4 buttons
  const items = Array.from({ length: 4 }, (_, i) => `Variegated Variety ${i + 1}`);

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/citrus"><ArrowLeft size={16} /> Back to Citrus</Link>
          </Button>
        </div>
      </div>
      
      <HeroSection 
        title="Variegated Varieties"
        subtitle="Beautiful foliage and fruit for ornamental and edible use."
        imageUrl="https://images.unsplash.com/photo-1582042784795-a4f65c024d35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxjaXRydXMlMjB0cmVlfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85"
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
