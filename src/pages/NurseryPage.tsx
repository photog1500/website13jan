import React from 'react';
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Citrus, Apple, Sprout, TreeDeciduous, ArrowLeft } from "lucide-react";
import { useParams, Link } from 'react-router-dom';

// Image URLs
const NURSERY_HERO = "images.unsplash.com";
const CITRUS_IMAGE = "/CitrusOrchardPicked.jpg";
const FRUIT_IMAGE = "/appleblossom1.jpg";
const OTHER_IMAGE = "/otherfruit1.jpg";
const SCIONS_IMAGE = "/scion1.jpg";
// Path to your new PNG in the public folder
const QUARANTINE_IMAGE = "/citrus quarantine.png";

export function NurseryPage() {
  const { category } = useParams();

  const categories = [
    {
      id: "citrus",
      title: "Citrus Trees",
      description: "Our citrus is literally bred to thrive here. With targeted rootstock and the best growing mediums, We offer 3 types of mandarin/satsuma, lemons, all the kumquats you could imagine, and other rare citrus varieties grafted for optimal performance.",
      icon: Citrus,
      image: CITRUS_IMAGE,
      link: "/nursery/citrus"
    },
    {
      id: "fruit",
      title: "Fruit Trees",
      description: "Heirloom apples, pears, and stone fruits. The same varieties we grow in our orchard.",
      icon: Apple,
      image: FRUIT_IMAGE,
      link: "/nursery/fruit"
    },
    {
      id: "other",
      title: "Other Plants",
      description: "Humphrey approved Berries, companion plants, and native pollinators to complete your garden ecosystem.",
      icon: Sprout,
      image: OTHER_IMAGE,
      link: "/nursery/other"
    },
    {
      id: "scions",
      title: "Scion Wood",
      description: "Premium grafting wood from our historic trees for the dedicated home orchardist.",
      icon: TreeDeciduous,
      image: SCIONS_IMAGE,
      link: "/nursery/scions"
    }
  ];

  // Category Detail View
  if (category) {
    const activeCategory = categories.find(c => c.id === category);
    
    if (!activeCategory) {
      return (
        <div className="container mx-auto px-4 py-32 text-center">
            <h2 className="text-2xl font-bold">Category not found</h2>
            <Button asChild className="mt-4"><Link to="/nursery">Back to Nursery</Link></Button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-background pt-24 pb-20">
        <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6 pl-0 hover:bg-transparent hover:text-primary">
                <Link to="/nursery" className="flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Nursery
                </Link>
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
                    <img src={activeCategory.image} alt={activeCategory.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-primary mb-4">
                        <activeCategory.icon className="w-8 h-8" />
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">{activeCategory.title}</h1>
                    </div>
                    <p className="text-xl text-muted-foreground mb-8">
                        {activeCategory.description}
                    </p>
                    <div className="p-6 bg-secondary/5 border border-border rounded-lg">
                        <h3 className="font-bold mb-2">Inventory Updating</h3>
                        <p className="text-muted-foreground mb-4">
                            Our {activeCategory.title.toLowerCase()} inventory is currently being updated for the season. 
                            Please check back soon for a full list of available varieties.
                        </p>
                        
                        {/* Option 1: Quarantine Image added specifically for Citrus */}
                        {activeCategory.id === "citrus" && (
                          <div className="space-y-4">
                            <p className="text-sm font-semibold text-destructive uppercase tracking-wide">
                              Important: Citrus Quarantine
                            </p>
                            <p className="text-muted-foreground text-sm">
                              It is VITAL that we protect not only our trees, but those you purchase as well! 
                                                       </p>
                            <div className="mt-4 rounded-lg overflow-hidden border border-border bg-white p-2">
                                <img 
                                    src={QUARANTINE_IMAGE} 
                                    alt="Citrus Quarantine Information" 
                                    className="w-full h-auto object-contain" 
                                />
                            </div>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // Main Nursery Landing
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={NURSERY_HERO} alt="Latch Orchards Nursery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">The Nursery</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Bring the orchard home. We propagate the finest heirloom varieties for your own garden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary mb-6">Grow Your Legacy</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          At Latch Orchards, we believe that preserving heirloom fruit means growing it. 
          Our nursery offers healthy, vigorous trees propagated directly from our orchard's historic stock.
        </p>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Card key={category.id} className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                  <category.icon className="w-6 h-6" />
                  <span className="font-serif text-lg font-bold">{category.title}</span>
                </div>
              </div>
              <CardContent className="pt-6">
                <CardDescription className="text-base text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                  <Link to={category.link}>
                    Browse {category.title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
