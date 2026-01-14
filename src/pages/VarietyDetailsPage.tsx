import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { HeroSection } from '@/components/home/HeroSection';
import { citrusVarieties, fruitVarieties, VarietyInfo } from '@/lib/varietyData';

export function VarietyDetailsPage() {
  const { categoryId, varietyId } = useParams<{ categoryId: string; varietyId: string }>();

  // Find the category and variety
  let category: any = null;
  let variety: VarietyInfo | null = null;
  let backLink = '/citrus';
  let categoryTitle = '';
  let backLinkText = 'Citrus';

  if (categoryId) {
    // Check citrus categories
    const citrusCat = Object.values(citrusVarieties).find(cat => cat.id === categoryId);
    if (citrusCat) {
      category = citrusCat;
      backLink = '/citrus';
      categoryTitle = citrusCat.title;
      backLinkText = 'Citrus';
    }

    // Check fruit categories
    if (!category) {
      const fruitCat = Object.values(fruitVarieties).find(cat => cat.id === categoryId);
      if (fruitCat) {
        category = fruitCat;
        backLink = categoryId === 'apples' ? '/varieties/apples' : '/varieties/fruit';
        categoryTitle = fruitCat.title;
        backLinkText = fruitCat.title;
      }
    }

    if (category && varietyId) {
      variety = category.varieties.find((v: VarietyInfo) => 
        v.name.toLowerCase().replace(/\s+/g, '-') === varietyId.toLowerCase()
      );
    }
  }

  if (!variety || !category) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Variety not found</h1>
          <Button asChild>
            <Link to={backLink}>Go back</Link>
          </Button>
        </div>
      </main>
    );
  }

  // Get all varieties for navigation
  const allVarieties = category.varieties;
  const currentIndex = allVarieties.findIndex(v => v === variety);
  const previousVariety = currentIndex > 0 ? allVarieties[currentIndex - 1] : null;
  const nextVariety = currentIndex < allVarieties.length - 1 ? allVarieties[currentIndex + 1] : null;

  const getVarietyUrl = (v: VarietyInfo) => 
    `/varieties/${categoryId}/${v.name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="gap-2">
            <Link to={backLink}><ArrowLeft size={16} /> Back to {backLinkText}</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Variety Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{variety.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{variety.description}</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {variety.season && (
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold text-lg mb-2">Season</h3>
              <p className="text-foreground">{variety.season}</p>
            </div>
          )}

          {variety.ripenDate && (
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-bold text-lg mb-2">Ripens</h3>
              <p className="text-foreground">{variety.ripenDate}</p>
            </div>
          )}

          {variety.characteristics && variety.characteristics.length > 0 && (
            <div className="border-l-4 border-primary pl-6 md:col-span-2">
              <h3 className="font-bold text-lg mb-2">Characteristics</h3>
              <ul className="space-y-1">
                {variety.characteristics.map((char, i) => (
                  <li key={i} className="text-foreground">• {char}</li>
                ))}
              </ul>
            </div>
          )}

          {variety.uses && variety.uses.length > 0 && (
            <div className="border-l-4 border-primary pl-6 md:col-span-2">
              <h3 className="font-bold text-lg mb-2">Uses</h3>
              <ul className="space-y-1">
                {variety.uses.map((use, i) => (
                  <li key={i} className="text-foreground">• {use}</li>
                ))}
              </ul>
            </div>
          )}

          {variety.storage && (
            <div className="border-l-4 border-primary pl-6 md:col-span-2">
              <h3 className="font-bold text-lg mb-2">Storage</h3>
              <p className="text-foreground">{variety.storage}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="border-t pt-8">
          <div className="flex items-center justify-between">
            {previousVariety ? (
              <Button asChild variant="outline">
                <Link to={getVarietyUrl(previousVariety)}>
                  ← {previousVariety.name}
                </Link>
              </Button>
            ) : (
              <div />
            )}

            <Button asChild variant="outline">
              <Link to={backLink}>View All Varieties</Link>
            </Button>

            {nextVariety ? (
              <Button asChild variant="outline">
                <Link to={getVarietyUrl(nextVariety)}>
                  {nextVariety.name} →
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
