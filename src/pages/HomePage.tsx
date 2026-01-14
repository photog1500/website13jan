import React from 'react';
import { HeroSection } from "@/components/home/HeroSection";
import { ContentSection } from "@/components/home/ContentSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";

// Image URLs (Unsplash)
const HERO_IMAGE = "/HappyLittlePollinator.jpg";
const APPLES_IMAGE = "/AppleMountainRose.jpg";
const SPRING_ORCHARD = "/varigatedmineola1.jpg";
const PEACHES_IMAGE = "https://images.unsplash.com/photo-1715069087312-88b9b0ccee00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxoZWlybG9vbSUyMGFwcGxlcyUyMHBlYWNoZXMlMjBjaGVycmllcyUyMG9yY2hhcmR8ZW58MHwwfHx8MTc2NjQ1ODAxNHww&ixlib=rb-4.1.0&q=80";
const CHERRIES_IMAGE = "https://images.unsplash.com/photo-1761558679575-68d10673ecdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxoZWlybG9vbSUyMGFwcGxlcyUyMHBlYWNoZXMlMjBjaGVycmllcyUyMG9yY2hhcmR8ZW58MHwwfHx8MTc2NjQ1ODAxNHww&ixlib=rb-4.1.0&q=80";
const PLUMS_IMAGE = "/pluerryCandyHeart.jpg";
const NECTARINES_IMAGE = "/nectarinered1.jpg";
const PEARS_IMAGE = "https://images.unsplash.com/photo-1743872322753-dbaa93f00f51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwZWFycyUyMGZydWl0JTIwdHJlZXxlbnwwfDB8fHwxNzY2NDYxNTk3fDA&ixlib=rb-4.1.0&q=85";
const PERSIMMONS_IMAGE = "/persimminJiro.jpg";
const LOQUAT_IMAGE = "https://images.unsplash.com/photo-1756670969561-3784e3a467f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxsb3F1YXQlMjBmcnVpdCUyMHRyZWV8ZW58MHwwfHx8MTc2NjQ2MTU5OHww&ixlib=rb-4.1.0&q=85";
const BERRIES_IMAGE = "\LHBerryMain.jpg"

export function HomePage() {
  const features = [
    {
      title: "Heirloom Apples",
      description: "Discover rare and historic apple varieties grown with care. From the amazing Alabama Shell to the Reverend Morgan Apple, taste history in every bite.",
      image: APPLES_IMAGE,
      tag: "Fall Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Sweet Peaches",
      description: "Tree-ripened peaches bursting with flavor. Our freestone varieties are perfect for fresh eating, canning, or baking.",
      image: PEACHES_IMAGE,
      tag: "Summer Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Plums & Hybrids",
      description: "Juicy, sweet plums and unique hybrids like pluots. Selected for flavor and resilience.",
      image: PLUMS_IMAGE,
      tag: "Summer Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Nectarines",
      description: "Smooth-skinned and intensely flavorful. Our white and yellow flesh nectarines are a summer delight.",
      image: NECTARINES_IMAGE,
      tag: "Summer Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Heirloom Pears",
      description: "Heirloom Southern, Classic European and crisp Asian pears. Buttery texture and complex sweetness.",
      image: PEARS_IMAGE,
      tag: "Autumn Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Persimmons",
      description: "Beautiful orange fruit ripening in late autumn. Sweet Fuyu and rich Hachiya varieties.",
      image: PERSIMMONS_IMAGE,
      tag: "Late Autumn",
      link: "/varieties/fruit"
    },
    {
      title: "Loquats",
      description: "The first fruit of spring. Sweet, tangy, and tropical flavor from this beautiful evergreen tree.",
      image: LOQUAT_IMAGE,
      tag: "Spring Harvest",
      link: "/varieties/fruit"
    },
    {
      title: "Berries",
      description: "A bounty of antioxidants. We grow blueberries, blackberries, huckleberries, and raspberries.",
      image: BERRIES_IMAGE,
      tag: "Summer Harvest",
      link: "/varieties/fruit"
    }
  ];

  return (
    <main>
      <HeroSection 
        title="Latch Orchards"
        subtitle="Heirloom Orchard & Nursery. Cultivating History, Flavor, and Tradition since 2024."
        imageUrl={HERO_IMAGE}
        variant="split"
      />

      <div id="orchard">
        <ContentSection 
          title="A Legacy of Flavor" 
          subtitle="Our Story"
          imageUrl={SPRING_ORCHARD}
          imageAlt="Spring blossoms at Latch Orchards"
        >
          <p className="mb-4">
            Latch Orchards began its journey over 50 years ago, with a farm kid who had a passion for preserving the flavors of the past. Founded by the Lloyd Heard, our orchard is special as it is a Micro Orchard for fruit and citrus enthusiasts. The trees are planted closer to maximize both space and allow more trees. We arent big on size, but we are big on heritage, flavor, and family.
          </p>
          <p className="mb-4">
            Nestled in Northern Baldwin County, on land ideal for fruit and citrus production, our trees benefit from the warm winter sun and gentle breezes that moderate the climate year-round. This unique microclimate allows us to grow varieties that are often difficult to find elsewhere, and some that are ONLY grown here.
          </p>
          <p>
            Today, we continue to add new heirloom varieties of apples, pears, stone fruits, and citrus varieties each year.  Including one that was created here. We want to ensure that these historic treasures remain available for future generations to enjoy.
          </p>
        </ContentSection>
      </div>

      <div id="fruit">
        <FeatureGrid 
          title="Seasonal Highlights" 
          features={features} 
        />
      </div>

      <div id="visit">
        <ContentSection 
          title="Plan Your Visit"
          subtitle="The Orchard Rhythm"
          centered={true}
        >
          <p className="mb-6">
            The orchard is a place of seasonal rhythm. We open to visitors starting in spring for berries, continuing through the rich harvest of peaches and plums in summer, and culminating with our spectacular apple and citrus season in the fall.  Your Pets are welcome.
          </p>
          <p>
            We invite you to walk the rows, breathe the fresh air, and experience the simple joy of picking your own fruit or selecting from our hand-harvested bounty on request.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h4 className="font-serif text-xl font-bold mb-2 text-primary">Summer</h4>
              <p className="text-sm text-muted-foreground">Loquats,Blackberries, Blueberries, Early Peaches</p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h4 className="font-serif text-xl font-bold mb-2 text-primary">Late Summer</h4>
              <p className="text-sm text-muted-foreground">Freestone Peaches, Nectarines, Summer Apples, Pears</p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h4 className="font-serif text-xl font-bold mb-2 text-primary">Autumn</h4>
              <p className="text-sm text-muted-foreground">Heirloom Apples, Late Pears, and our wide variety of Citrus.</p>
            </div>
          </div>
        </ContentSection>
      </div>
    </main>
  );
}
