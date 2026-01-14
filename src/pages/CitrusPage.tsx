import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { ContentSection } from "@/components/home/ContentSection";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Image URLs
const CITRUS_HERO = "https://images.unsplash.com/photo-1582042784795-a4f65c024d35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxjaXRydXMlMjB0cmVlfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85";

export function CitrusPage() {
  const citrusTypes = [
    { name: "Satsumas/Mandarins", description: "Owari, Brown Select, and more seedless favorites.", link: "/citrus/satsumas-mandarins" },
    { name: "The Kuats", description: "Kumquats and unique hybrids.", link: "/citrus/the-kuats" },
    { name: "Oranges/Tangerines", description: "Sweet, juicy eating and juice oranges.", link: "/citrus/oranges-tangerines" },
    { name: "Lemons/Limes", description: "Zesty kitchen essentials.", link: "/citrus/lemons-limes" },
    { name: "The Big Stuff", description: "Pomelos, Grapefruits, and giants.", link: "/citrus/the-big-stuff" },
    { name: "Variegated Varieties", description: "Beautiful ornamental and edible citrus.", link: "/citrus/variegated-varieties" },
    { name: "Owner's Faves", description: "Our top picks for your orchard.", link: "/citrus/owners-faves" },
    { name: "Rootstocks", description: "The foundation for healthy trees.", link: "/citrus/rootstocks" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection 
        title="Citrus Collection"
        subtitle="Hardy citrus varieties thriving in our Southern climate."
        imageUrl={CITRUS_HERO}
      />

      <div className="container mx-auto px-4 py-12">
        <ContentSection 
          title="Our Citrus Varieties" 
          subtitle="Grown for Flavor & Resilience"
        >
          <p className="mb-8 text-center max-w-2xl mx-auto">
            We specialize in citrus varieties that perform exceptionally well in our climate. 
            Select a category below to explore our specific varieties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {citrusTypes.map((item, index) => (
              <Link key={index} to={item.link} className="block group">
                <Card className="h-full border-border/50 group-hover:shadow-lg group-hover:border-primary/50 transition-all cursor-pointer bg-card">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold font-serif text-primary mb-2 group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="mt-auto pt-4 text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                      View Varieties →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
