import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Feature {
  title: string;
  description: string;
  image: string;
  tag: string;
  link?: string;
}

interface FeatureGridProps {
  title: string;
  features: Feature[];
}

export function FeatureGrid({ title, features }: FeatureGridProps) {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover the seasonal delights and heirloom varieties currently available at our orchard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Content = (
              <Card className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-card h-full cursor-pointer">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-primary backdrop-blur-sm shadow-sm font-serif">
                      {feature.tag}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );

            return feature.link ? (
              <Link key={idx} to={feature.link} className="block h-full">
                {Content}
              </Link>
            ) : (
              <div key={idx} className="h-full">
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
