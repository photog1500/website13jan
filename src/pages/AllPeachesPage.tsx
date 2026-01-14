import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const HERO_IMAGE = "\LHPeaches.jpg";

interface AppleVariety {
  id: string;
  name: string;
  latinName: string;
  description: string;
  image1: string;
  image2: string;
  harvestTime: string;
  characteristics: string[];
}

const appleVarieties: AppleVariety[] = [
  {
    id: "Alabama Shell",
    name: "Alabama Shell",
    latinName: "Malus domestica 'Shell of Alabama'",
    description: "A complex and delicious medium sized apple.  Originally developed by Mr. Greenberry Shell, in Escambia County, near present day Appleton in the 1850s.  Because it was adapted for this location, it is one of the hardiest of all the heirlooms.  It is both sweet, tart, and astrigent. It starts to ripen in June into late July. Mostly green with more red as it ripens.  Although it is self fertile, pollination with another apple always gets a better crop.  Also, it will fertilize the Anna apple. ",
    image1: "/public/shell1.webp",
    image2: "/public/shell1.jpg",
    harvestTime: "July and August",
    characteristics: ["Excellent keeper", "Rich complex flavor", "All-purpose", "Historic variety"]
  },
  {
    id: "Rev. Morgan",
    name: "Rev. Morgan",
    latinName: "Malus domestica 'Reverend Morgan'",
    description: "Heirloom originating around Houston, Texas in the 60's.. It was a seedling of Granny Smith. This remarkable heritage apple features a distinctive red-pink skin that becomes more muted as it matures, with the sun exposed faces getting deep red. Medium to large fruit, yellowish flesh.  Crisp and juicy, pleasantly tart. Good for fresh eating and cooking, the trees are vigorous, hardy, and disease-resistant, making them ideal for organic growing. This variety is excellent for fresh eating after storage, and baking. HARVEST: Late CHILL: Low to none BLOOM:Late  POLLINATION: self fertile.  ",
    image1: "/public/remorgan.jpg",
    image2: "/revmorgan.webp",
    harvestTime: "Mid to Late October",
    characteristics: ["Oldest American variety", "Exceptional keeper", "Great for cider", "Disease-resistant"]
  },
  {
    id: "Sebren",
    name: "Sebren",
    latinName: "Malus domestica 'Sebren'",
    description: "From Southern Mississippi, this variety is a great all purpose apple.  Russeted green when mature, it is a larger to medium apple that ripens in late July and into August  Unusual in that while it is sweet, it has more tart notes.  Flesh is firm. A kids favorite.",
    image1: "/sebren2.webp",
    image2: "/sebren1.jpg",
    harvestTime: "Early to Mid October",
    characteristics: ["Exceptional flavor", "Aromatic", "Excellent for cider", "Connoisseur's choice"]
  },
  {
    id: "Cox Winter",
    name: "Cox Winter",
    latinName: "Malus domestica 'Cox Winter'",
    description: "A large heirloom crabapple. Very tasty as an eating apply, and also great as a cider apple.  This one is a limb breaker and one of the most versatile we have. This apple doesn't store well and should be used within a few weeks of harvest. The trees are vigorous, spreading, and productive.",
    image1: "/coxw1.jpg",
    image2: "/cox2.jpg",
    harvestTime: "Late August to Early September",
    characteristics: ["Early season", "Excellent for sauce", "Juicy and aromatic", "Short storage"]
  },
  {
    id: "Anna",
    name: "Anna",
    latinName: "Malus domestica 'Anna'",
    description: " An Isreali import, introduced in the US in the 50s. One of the very first viable low chill apples.  .  Very early ripening apple with a green skin that blushes on the side facing the sun.  Its not a spectacular apple, but it is a good apple that pollinates alot of other apples.  It doesnt keep well so eat if fresh. However, ensure it is ripe.  Eat one before and you will know why I said that. It is precocious, so it bears fruit within a few years of planting.",
    image1: "/AppleAnna2.webp",
    image2: "/appleAnna.webp",
    harvestTime: "Late September",
    characteristics: ["World-renowned flavor", "Aromatic", "Dessert apple", "Requires careful growing"]
  },
  {
    id: "Ein Shemer",
    name: "Ein Shemer",
    latinName: "Malus domestica 'Ein Shemer'",
    description: "Another Isreali apple, this one developed by Mr. Abba Shemer, import the year I was born 1967.  Named afer a kibbutz, or gathering. Medium to large apple, A tradiional apple shape, with some brown russet.  Starts green and sun facing skin develops red orange patches.  Flesh is white and firm and juicy.  Early bloomer and helps pollinate both Anna and Dorsett, plus some other apples if they bloom early.  Good for eating off the tree and baking. But doesnt keep well after it is picked..",
    image1: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw5fHxncmVlbiUyMGFwcGxlfGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMHxncmVlbiUyMGFwcGxlfGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    harvestTime: "Late October",
    characteristics: ["Historic American variety", "Improves with storage", "All-purpose", "Long season required"]
  },
  {
    id: "Dorsett Golden",
    name: "Dorsett Golden",
    latinName: "Malus domestica 'Dorsett Golden'",
    description: "This apple was introduced by Mrs Dorsett in the Bahamas in the 1950s. As it doesnt require almost any chill hours, it can randomly bloom thruout the year here.  Flowers very early, typically late February so have to protect from frost. Since it also ripens early, it doesnt keep well, but are the most precoucious tree I have ever seen, fruiting in its second year. It is one of the best flavor balanced apples that make delicious baked goods and sauces.  ",
    image1: "/AppleDorsettGolden2.webp",
    image2: "/AppleDorsettGolden3.jpg",
    harvestTime: "Late October",
    characteristics: ["All-purpose excellence", "Long-lived trees", "Excellent keeper", "Slow to bear"]
  },
  {
    id: "TBA",
    name: "TBA",
    latinName: "Malus domestica 'TBA'",
    description: "A classic American apple.",
    image1: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxM3xhcHBsZSUyMGRlZXAlMjByZWR8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxNHxhcHBsZSUyMGRlZXAlMjByZWR8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    harvestTime: "Late October to Early November",
    characteristics: ["Wine-like flavor", "Excellent for cider", "Long storage", "Very productive"]
  }
];

export function AllApplesPage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for direct links to varieties
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Heirloom Apple Varieties
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            A Living Collection of the South's Most Historic Apples
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our orchard seeks and attempts to preserve rare and historic apple varieties that have been cherished 
              for generations. Each variety tells a story of agricultural heritage, and cultural significance.  And we want to share those with you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the Alabama Shell to the Reverend Morgan, these apples represent over two hundred years of careful cultivation and selection.
            </p>
          </div>
        </div>
      </section>

      {/* Varieties Grid */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {appleVarieties.map((variety, index) => (
              <VarietySection 
                key={variety.id} 
                variety={variety} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Visit During Harvest Season
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Experience these historic varieties firsthand. Our apple season runs from mid summer 
            through fall, with different varieties ripening throughout the season.
          </p>
          <a 
            href="/#visit"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Plan Your Visit
          </a>
        </div>
      </section>
    </main>
  );
}

function VarietySection({ variety, index }: { variety: AppleVariety; index: number }) {
  const isEven = index % 2 === 0;
  const varietyUrl = `/varieties/apples/${variety.id}`;

  return (
    <div 
      id={variety.id}
      className="scroll-mt-24"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Images Column */}
        <div className={`space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
          <Link to={varietyUrl} className="block group">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img 
                src={variety.image1} 
                alt={`${variety.name} - view 1`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <Link to={varietyUrl} className="block group">
            <div className="relative h-72 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
              <img 
                src={variety.image2} 
                alt={`${variety.name} - view 2`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>

        {/* Content Column */}
        <div className={`space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
          <div>
            <Link to={varietyUrl} className="hover:opacity-80 transition-opacity">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {variety.name}
              </h2>
            </Link>
            <p className="text-sm italic text-muted-foreground mb-4">
              {variety.latinName}
            </p>
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Harvest: {variety.harvestTime}
            </div>
          </div>

          <p className="text-base leading-relaxed text-foreground">
            {variety.description}
          </p>

          <div className="pt-4 border-t border-border/50 flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Key Characteristics</h3>
              <div className="flex flex-wrap gap-2">
                {variety.characteristics.map((char, i) => (
                  <span 
                    key={i}
                    className="inline-block bg-secondary/20 px-3 py-1.5 rounded-md text-sm text-foreground border border-border/30"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Link 
            to={varietyUrl}
            className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
