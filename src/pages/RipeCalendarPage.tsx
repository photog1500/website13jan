import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Harvest data structure
// 0 = Jan, 11 = Dec
// start/end are 0-indexed months, inclusive
interface HarvestPeriod {
  start: number;
  end: number;
  label?: string; // Optional label for specific variety within the block
}

interface FruitCategory {
  category: string;
  items: {
    name: string;
    periods: HarvestPeriod[];
    color: string; // Tailwind color class for the block
  }[];
}

const harvestData: FruitCategory[] = [
  {
    category: "Citrus",
    items: [
      { name: "Satsumas & Mandarins", periods: [{ start: 10, end: 11 }, { start: 0, end: 0 }], color: "bg-orange-500" }, // Nov-Jan
      { name: "Navel Oranges", periods: [{ start: 10, end: 1 }], color: "bg-orange-600" }, // Nov-Feb
      { name: "Kumquats", periods: [{ start: 10, end: 2 }], color: "bg-orange-400" }, // Nov-Mar
      { name: "Lemons & Limes", periods: [{ start: 8, end: 2 }], color: "bg-yellow-400" }, // Sep-Mar (some year round, but mostly winter)
      { name: "Grapefruit", periods: [{ start: 11, end: 3 }], color: "bg-red-400" }, // Dec-Apr
    ]
  },
  {
    category: "Stone Fruit",
    items: [
      { name: "Peaches (Early)", periods: [{ start: 3, end: 4 }], color: "bg-rose-400" }, // Apr-May
      { name: "Peaches (Mid/Late)", periods: [{ start: 5, end: 7 }], color: "bg-rose-500" }, // Jun-Aug
      { name: "Nectarines", periods: [{ start: 4, end: 6 }], color: "bg-red-500" }, // May-Jul
      { name: "Plums", periods: [{ start: 4, end: 6 }], color: "bg-purple-500" }, // May-Jul
    ]
  },
  {
    category: "Pome Fruit & Others",
    items: [
      { name: "Apples", periods: [{ start: 5, end: 9 }], color: "bg-red-600" }, // Jun-Oct
      { name: "Pears", periods: [{ start: 7, end: 9 }], color: "bg-green-500" }, // Aug-Oct
      { name: "Persimmons", periods: [{ start: 8, end: 10 }], color: "bg-orange-700" }, // Sep-Nov
      { name: "Loquats", periods: [{ start: 2, end: 3 }], color: "bg-yellow-500" }, // Mar-Apr
    ]
  },
  {
    category: "Berries",
    items: [
      { name: "Blueberries", periods: [{ start: 3, end: 5 }], color: "bg-blue-600" }, // Apr-Jun
      { name: "Blackberries", periods: [{ start: 4, end: 6 }], color: "bg-indigo-700" }, // May-Jul
      { name: "Mulberries", periods: [{ start: 3, end: 4 }], color: "bg-purple-700" }, // Apr-May
    ]
  }
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function RipeCalendarPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Ripe Calendar
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See what's in season at Latch Orchards. Our diverse collection ensures fresh fruit almost year-round. 
              Dates are approximate and depend on weather conditions each year.
            </p>
          </div>

          {/* Calendar Grid */}
          <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px] p-6">
                
                {/* Month Headers */}
                <div className="grid grid-cols-[200px_1fr] gap-4 mb-4 border-b border-border pb-4">
                  <div className="font-serif font-bold text-primary text-lg flex items-end">Variety</div>
                  <div className="grid grid-cols-12 gap-1">
                    {months.map((month) => (
                      <div key={month} className="text-center text-sm font-medium text-muted-foreground">
                        {month}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-8">
                  {harvestData.map((category, catIndex) => (
                    <div key={category.category} className="space-y-3">
                      <h3 className="font-serif text-xl font-bold text-primary border-b border-border/50 pb-2 mb-4">
                        {category.category}
                      </h3>
                      
                      {category.items.map((item, itemIndex) => (
                        <div key={item.name} className="grid grid-cols-[200px_1fr] gap-4 items-center group">
                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </div>
                          
                          <div className="relative h-8 bg-muted/20 rounded-md border border-border/30">
                            {/* Background grid lines */}
                            <div className="absolute inset-0 grid grid-cols-12 gap-1 pointer-events-none">
                              {months.map((_, i) => (
                                <div key={i} className="border-r border-border/30 last:border-0 h-full" />
                              ))}
                            </div>

                            {/* Harvest Blocks */}
                            {item.periods.map((period, pIndex) => {
                              const start = period.start;
                              const span = period.end - period.start + 1;
                              
                              return (
                                <motion.div
                                  key={pIndex}
                                  initial={{ opacity: 0, scaleX: 0 }}
                                  whileInView={{ opacity: 1, scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.5, delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                                  className={cn(
                                    "absolute h-6 top-1 rounded-sm shadow-sm",
                                    item.color
                                  )}
                                  style={{
                                    left: `calc(${(start / 12) * 100}% + 2px)`,
                                    width: `calc(${(span / 12) * 100}% - 4px)`
                                  }}
                                />
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

              </div>
            </div>
            
            {/* Legend / Footer of chart */}
            <div className="bg-muted/30 p-4 text-center text-sm text-muted-foreground border-t border-border">
              * Harvest times vary by variety and weather. Check our social media for daily picking updates.
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8 pb-8">
            <p className="text-lg mb-6">Ready to taste the difference?</p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="/#visit">Plan Your Visit</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <a href="/nursery">Shop Nursery</a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
