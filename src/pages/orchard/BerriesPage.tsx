import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function BerriesPage() {
  // Setup 6 varieties
  const items = Array.from({ length: 6 }, (_, i) => `Berry Variety ${i + 1}`);

  const HERO_IMAGE = "\public\LHBerryMain";

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
        title="Berries"
        subtitle="Blueberries, blackberries, huckleberries, and raspberries."
        imageUrl={HERO_IMAGE}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
