import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HERO_IMAGE = "https://images.unsplash.com/photo-1557800636-894a64c1696f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxjaXRydXMlMjBncm92ZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85";

interface CitrusVariety {
  id: string;
  name: string;
  latinName: string;
  description: string;
  image1: string;
  image2: string;
  harvestTime: string;
  characteristics: string[];
}

const citrusVarieties: CitrusVariety[] = [
  {
    id: "satsuma-owari",
    name: "Owari Satsuma",
    latinName: "Citrus unshiu 'Owari'",
    description: "The Owari Satsuma is one of the most cold-hardy citrus varieties available, capable of withstanding temperatures down to 15°F (-9°C) with minimal damage. Originating in Japan, this seedless mandarin produces sweet, easy-to-peel fruit with tender flesh and minimal acidity. The tree is naturally compact and self-fruitful, making it ideal for container growing and small spaces. Fruit ripens in early winter, typically from October through December, and the trees are highly productive even when young. The flavor is mild and sweet with low acid content, making it perfect for fresh eating. The Owari Satsuma was one of the first citrus varieties successfully grown in the United States Gulf Coast region and remains popular for its exceptional cold tolerance and reliable production.",
    image1: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxzYXRzdW1hJTIwbWFuZGFyaW58ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxzYXRzdW1hJTIwbWFuZGFyaW58ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    harvestTime: "October through December",
    characteristics: ["Very cold-hardy", "Seedless", "Easy to peel", "Compact tree"]
  },
  {
    id: "meyer-lemon",
    name: "Meyer Lemon",
    latinName: "Citrus × meyeri",
    description: "Introduced to the United States from China in 1908 by Frank Meyer, this hybrid between a lemon and either an orange or mandarin has become one of the most beloved citrus varieties for home growing. Meyer lemons are less acidic and sweeter than standard lemons, with aromatic, thin skin and abundant, fragrant juice. The fruit has a distinctive floral fragrance and golden-yellow color when ripe. Trees are naturally compact, everbearing, and remarkably productive, often producing fruit year-round in ideal conditions. They're also more cold-hardy than true lemons, tolerating brief periods down to 20°F (-7°C). The Improved Meyer Lemon, released in the 1950s, is virus-free and even more productive than the original. This variety is exceptional for cooking, baking, and fresh use, with a unique sweet-tart flavor profile that has made it a favorite among chefs.",
    image1: "https://images.unsplash.com/photo-1590502160462-3b2b5a1a10c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxtZXllciUyMGxlbW9ufGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxtZXllciUyMGxlbW9ufGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    harvestTime: "Year-round (peak winter)",
    characteristics: ["Sweet and aromatic", "Everbearing", "Compact growth", "Chef's favorite"]
  },
  {
    id: "cara-cara-orange",
    name: "Cara Cara Navel Orange",
    latinName: "Citrus sinensis 'Cara Cara'",
    description: "Discovered in Venezuela in 1976, the Cara Cara is a natural mutation of the Washington Navel orange with stunning pink to red flesh. This remarkable variety combines the sweet, seedless characteristics of navel oranges with a unique flavor profile featuring notes of cherry, rose, and blackberry. The flesh is exceptionally juicy and less acidic than standard navels, with higher levels of vitamin C and lycopene. Trees are vigorous and productive, bearing fruit in winter months. The Cara Cara requires slightly more heat than standard navels to develop its characteristic pink color, but it's equally cold-hardy, tolerating brief freezes to the mid-20s°F (-4°C). The fruit stores well on the tree and continues to sweeten over time. This variety has become increasingly popular in home orchards for its beautiful appearance, unique flavor, and nutritional benefits.",
    image1: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxuYXZlbCUyMG9yYW5nZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxuYXZlbCUyMG9yYW5nZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85",
    harvestTime: "December through April",
    characteristics: ["Pink flesh", "Low acid", "Seedless", "High vitamin C"]
  },
  {
    id: "bearss-lime",
    name: "Bearss Lime (Persian Lime)",
    latinName: "Citrus × latifolia 'Bearss'",
    description: "The Bearss Lime is the thornless variety of the Persian or Tahiti lime, making it ideal for home gardens and easy harvesting. This seedless lime produces larger fruit than Key limes, with bright green skin that turns yellow when fully ripe. The juice is abundant, aromatic, and perfectly tart without bitterness, making it the standard for cooking and cocktails. Trees are everbearing in warm climates, producing fruit year-round with a main crop in summer and fall. The Bearss variety is more cold-tolerant than Key limes, surviving brief periods down to 28°F (-2°C). Trees are vigorous, self-fruitful, and highly productive, often bearing within the first year after planting. The fruit holds well on the tree for extended periods, allowing for harvesting as needed. This variety is essential for any citrus collection, providing fresh limes for cooking, beverages, and preserving throughout the year.",
    image1: "https://images.unsplash.com/photo-1590502160462-3b2b5a1a10c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxsaW1lJTIwZnJ1aXR8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxsaW1lJTIwZnJ1aXR8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    harvestTime: "Year-round (peak summer-fall)",
    characteristics: ["Thornless", "Seedless", "Everbearing", "Abundant juice"]
  },
  {
    id: "oro-blanco",
    name: "Oro Blanco Grapefruit",
    latinName: "Citrus grandis × Citrus paradisi 'Oro Blanco'",
    description: "Developed at the University of California in 1958, Oro Blanco (meaning 'white gold' in Spanish) is a cross between a pomelo and a white grapefruit. This hybrid was specifically bred to create a sweeter, less acidic grapefruit that doesn't require hot summer temperatures to develop sweetness. The fruit is large with thick, easy-to-peel rind and sweet, juicy, nearly seedless flesh with minimal bitterness. Unlike standard grapefruits, Oro Blanco is at its best when the rind is still green to pale yellow – full yellowing often indicates over-maturity. Trees are moderately vigorous, fairly cold-hardy (to about 26°F / -3°C), and produce abundantly in winter and early spring. The thick rind protects the fruit from cold and allows for excellent storage on the tree. This variety is perfect for those who find traditional grapefruits too tart or bitter.",
    image1: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwzfHxncmFwZWZydWl0fGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw0fHxncmFwZWZydWl0fGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    harvestTime: "November through March",
    characteristics: ["Sweet and mild", "Low acid", "Easy to peel", "Cold-hardy"]
  },
  {
    id: "kumquat-nagami",
    name: "Nagami Kumquat",
    latinName: "Fortunella margarita 'Nagami'",
    description: "The Nagami kumquat is the most widely cultivated kumquat variety, prized for its unique characteristic of being eaten whole – sweet rind and tart flesh together. Native to southern China, this small citrus produces oval, bright orange fruit about 1-2 inches long with a distinctive sweet-tart flavor when consumed entirely. The trees are remarkably cold-hardy for citrus, tolerating temperatures down to 10°F (-12°C), making them suitable for growing in areas where other citrus struggle. Nagami kumquats are naturally compact and ornamental, with dense foliage, fragrant white flowers, and abundant fruit production. They make excellent container plants and are highly decorative throughout the year. The fruit ripens in winter and holds well on the tree for months. Kumquats are excellent for eating fresh, making marmalade, candying, or adding whole to salads and preserves. The trees are self-fruitful, disease-resistant, and remarkably productive.",
    image1: "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxrdW1xdWF0fGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxrdW1xdWF0fGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85",
    harvestTime: "November through March",
    characteristics: ["Eat rind and all", "Very cold-hardy", "Ornamental", "Compact size"]
  },
  {
    id: "blood-orange-moro",
    name: "Moro Blood Orange",
    latinName: "Citrus sinensis 'Moro'",
    description: "The Moro is the most colorful of the blood orange varieties, featuring deep red, almost purple flesh and burgundy-tinted rind when fully mature. Originating in Sicily in the 19th century, this variety develops its characteristic color through exposure to cool night temperatures during ripening. The flavor is intense and complex – sweeter than standard oranges with distinctive berry and raspberry notes and minimal acidity. The juice is spectacularly colored and makes stunning beverages and reductions. Trees are moderately vigorous and productive, requiring some chill hours for optimal fruit development and coloration. Moro blood oranges are less cold-hardy than navels, tolerating temperatures down to about 28°F (-2°C). The fruit ripens mid-winter through early spring and should be harvested promptly for best color and flavor. This variety has gained popularity among chefs and home gardeners for its dramatic appearance and unique flavor profile.",
    image1: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxibG9vZCUyMG9yYW5nZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw2fHxibG9vZCUyMG9yYW5nZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85",
    harvestTime: "December through March",
    characteristics: ["Deep red flesh", "Berry flavor notes", "Intense color", "Chef's favorite"]
  },
  {
    id: "lisbon-lemon",
    name: "Lisbon Lemon",
    latinName: "Citrus limon 'Lisbon'",
    description: "The Lisbon lemon is one of the two main commercial lemon varieties (along with Eureka) and is particularly well-suited to hot summer climates. Originating from Portugal, this variety produces classic lemon-shaped fruit with bright yellow, slightly textured skin and very acidic, aromatic juice. Lisbon lemons are extremely vigorous and thorny, with dense foliage that helps protect fruit from sun damage in hot climates. The trees are more cold-hardy than Eureka lemons, tolerating brief periods to 22°F (-6°C), and they're also more heat-tolerant. Fruit production occurs year-round but peaks in winter and early spring. The lemons have few to no seeds, abundant juice, and strong, traditional lemon flavor perfect for all culinary uses. Trees are highly productive and somewhat more disease-resistant than other lemon varieties. The vigorous growth habit makes them ideal for hedges or espalier training in addition to standard tree form.",
    image1: "https://images.unsplash.com/photo-1590502160462-3b2b5a1a10c0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxsZW1vbiUyMHRyZWV8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    image2: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxsZW1vbiUyMHRyZWV8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85",
    harvestTime: "Year-round (peak winter-spring)",
    characteristics: ["Very productive", "Heat-tolerant", "True lemon flavor", "Vigorous grower"]
  }
];

export function AllCitrusPage() {
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
            Citrus Varieties
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Premium Citrus for Home Gardens and Small Orchards
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our citrus collection features carefully selected varieties chosen for their 
              exceptional flavor, cold-hardiness, and suitability for home growing. From sweet 
              mandarins to aromatic lemons, each variety brings unique qualities to your garden.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many of these varieties are everbearing or have extended harvest seasons, providing 
              fresh citrus for months. We focus on varieties that combine outstanding flavor with 
              ornamental beauty and manageable size.
            </p>
          </div>
        </div>
      </section>

      {/* Varieties Grid */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {citrusVarieties.map((variety, index) => (
              <VarietySection 
                key={variety.id} 
                variety={variety} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Growing Tips */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary">
            Growing Citrus Successfully
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Climate Requirements</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most citrus varieties need protection when temperatures drop below 28°F. In colder 
                climates, grow in containers and bring indoors for winter, or plant in protected 
                locations with southern exposure.
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Soil & Water</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Citrus prefer well-draining soil with pH 6.0-7.0. Water deeply but infrequently, 
                allowing the top few inches of soil to dry between waterings. Poor drainage is the 
                most common cause of citrus failure.
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Fertilization</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Use citrus-specific fertilizer with micronutrients. Feed regularly during the 
                growing season (March-September), reducing or eliminating winter feeding. Yellow 
                leaves often indicate nutrient deficiencies.
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Harvest Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlike other fruit, citrus does not ripen off the tree. Fruit can often remain on 
                the tree for weeks or months after reaching maturity, gradually sweetening. Taste-test 
                to determine optimal harvest time for your preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Visit Our Nursery
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Explore our citrus collection and find the perfect varieties for your garden. 
            Our staff can help you select varieties suited to your climate and growing conditions.
          </p>
          <a 
            href="/nursery"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Browse Nursery Stock
          </a>
        </div>
      </section>
    </main>
  );
}

function VarietySection({ variety, index }: { variety: CitrusVariety; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div 
      id={variety.id}
      className="scroll-mt-24"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Images Column */}
        <div className={`space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="relative h-72 rounded-lg overflow-hidden shadow-md">
            <img 
              src={variety.image1} 
              alt={`${variety.name} - view 1`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-72 rounded-lg overflow-hidden shadow-md">
            <img 
              src={variety.image2} 
              alt={`${variety.name} - view 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className={`space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
              {variety.name}
            </h2>
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

          <div className="pt-4 border-t border-border/50">
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
      </div>
    </div>
  );
}
