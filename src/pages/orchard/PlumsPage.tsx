import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { fruitVarieties } from "@/lib/varietyData";

export function PlumsPage() {
  const category = fruitVarieties.plums;
  
  const getVarietyUrl = (varietyName: string) => 
    `/varieties/${category.id}/${varietyName.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/varieties/fruit"><ArrowLeft size={16} /> Back to Fruit Trees</Link>
          </Button>
        </div>
      </div>
      
      <HeroSection 
        title={category.title}
        subtitle={category.subtitle}
        imageUrl={category.imageUrl}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.varieties.map((variety) => (
            <Button key={variety.name} asChild variant="outline" className="h-auto py-8 text-lg font-serif hover:bg-primary hover:text-white transition-colors">
              <Link to={getVarietyUrl(variety.name)}>
                {variety.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}
