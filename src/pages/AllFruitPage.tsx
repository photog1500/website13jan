import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { fruitVarieties, VarietyCategory, VarietyInfo } from "@/lib/varietyData";

// Helper to create URL slug from variety name
const getVarietySlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export function AllFruitPage() {
  // Get fruit categories from the varietyData
  const fruitCategories = Object.values(fruitVarieties);

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
        title="All Orchard Fruits"
        subtitle="Explore our complete collection of heirloom orchard fruits, from classic apples to tropical specialties."
        imageUrl="https://images.unsplash.com/photo-1626353103074-fa702ce6fc1b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxoZWlybG9vbSUyMGFwcGxlcyUyMHBlYWNoZXMlMjBjaGVycmllcyUyMG9yY2hhcmR8ZW58MHwwfHx8MTc2NjQ1ODAxNHww&ixlib=rb-4.1.0&q=80"
      />

      <div className="container mx-auto px-4 py-12">
        {fruitCategories.map((category, categoryIndex) => (
          <section key={category.id} className="mb-16 last:mb-0">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold mb-2 text-primary">{category.title}</h2>
              <p className="text-lg text-muted-foreground">{category.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.varieties.map((variety: VarietyInfo, index: number) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="h-auto py-8 text-lg font-serif hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <Link to={`/varieties/${category.id}/${getVarietySlug(variety.name)}`}>
                    {variety.name}
                  </Link>
                </Button>
              ))}
            </div>

            {categoryIndex < fruitCategories.length - 1 && (
              <div className="mt-12 mb-8 border-t border-border" />
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
