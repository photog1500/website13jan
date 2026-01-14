import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';

const RECIPES_HERO = "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBpZSUyMGJha2luZ3xlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85";
const APPLE_PIE = "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHBpZXxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85";
const PEACH_COBBLER = "https://images.unsplash.com/photo-1612182062313-564d552c5c9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwZWFjaCUyMGNvYmJsZXJ8ZW58MHwwfHx8MTczNTEzOTIwMHww&ixlib=rb-4.1.0&q=85";
const PEAR_TART = "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwZWFyJTIwdGFydHxlbnwwfDB8fHwxNzM1MTM5MjAwfDA&ixlib=rb-4.1.0&q=85";
const PLUM_JAM = "https://images.unsplash.com/photo-1599822018620-ce5b87efd8a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxwbHVtJTIwamFtJTIwcHJlc2VydmVzfGVufDB8MHx8fDE3MzUxMzkyMDB8MA&ixlib=rb-4.1.0&q=85";

interface Recipe {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  image: string;
  category: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    title: "Classic Heirloom Apple Pie",
    description: "A timeless dessert featuring our heirloom apples with a buttery, flaky crust and warm spices.",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "8",
    difficulty: "Medium",
    image: APPLE_PIE,
    category: "Desserts",
    ingredients: [
      "6-7 cups heirloom apples, peeled and sliced",
      "¾ cup granulated sugar",
      "2 tablespoons all-purpose flour",
      "1 teaspoon ground cinnamon",
      "¼ teaspoon ground nutmeg",
      "1 tablespoon lemon juice",
      "Double pie crust (homemade or store-bought)",
      "2 tablespoons butter, cut into small pieces",
      "1 egg white for brushing"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C).",
      "In a large bowl, combine sliced apples, sugar, flour, cinnamon, nutmeg, and lemon juice. Toss to coat evenly.",
      "Roll out bottom pie crust and place in a 9-inch pie dish.",
      "Pour apple mixture into crust and dot with butter pieces.",
      "Cover with top crust, seal edges, and cut vents in the top.",
      "Brush with egg white and sprinkle with coarse sugar if desired.",
      "Bake for 45-50 minutes until crust is golden and filling is bubbly.",
      "Cool for at least 2 hours before slicing."
    ]
  },
  {
    title: "Summer Peach Cobbler",
    description: "Sweet, juicy peaches topped with a golden biscuit crust make this the perfect summer dessert.",
    prepTime: "20 min",
    cookTime: "45 min",
    servings: "8",
    difficulty: "Easy",
    image: PEACH_COBBLER,
    category: "Desserts",
    ingredients: [
      "8 cups fresh peaches, peeled and sliced",
      "1 cup granulated sugar",
      "¼ cup all-purpose flour",
      "1 teaspoon vanilla extract",
      "½ teaspoon cinnamon",
      "1½ cups all-purpose flour (for topping)",
      "½ cup sugar (for topping)",
      "2 teaspoons baking powder",
      "½ teaspoon salt",
      "6 tablespoons cold butter, cubed",
      "¾ cup buttermilk"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a large bowl, combine peaches, 1 cup sugar, ¼ cup flour, vanilla, and cinnamon. Transfer to a greased 9x13-inch baking dish.",
      "For topping: whisk together flour, sugar, baking powder, and salt.",
      "Cut in cold butter until mixture resembles coarse crumbs.",
      "Stir in buttermilk just until combined.",
      "Drop spoonfuls of batter over peach mixture.",
      "Bake 40-45 minutes until topping is golden and filling bubbles.",
      "Serve warm with vanilla ice cream."
    ]
  },
  {
    title: "Pear & Almond Tart",
    description: "Elegant tart featuring our heirloom pears nestled in a rich almond cream filling.",
    prepTime: "25 min",
    cookTime: "50 min",
    servings: "8",
    difficulty: "Medium",
    image: PEAR_TART,
    category: "Desserts",
    ingredients: [
      "1 prepared tart shell (9-inch)",
      "3-4 firm pears, peeled and halved",
      "½ cup unsalted butter, softened",
      "½ cup granulated sugar",
      "2 large eggs",
      "1 cup almond flour",
      "2 tablespoons all-purpose flour",
      "1 teaspoon vanilla extract",
      "¼ teaspoon almond extract",
      "2 tablespoons apricot jam for glazing"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "In a bowl, cream butter and sugar until fluffy.",
      "Beat in eggs one at a time.",
      "Fold in almond flour, all-purpose flour, vanilla, and almond extract.",
      "Spread almond cream evenly in tart shell.",
      "Arrange pear halves on top, cut side down, in a fan pattern.",
      "Bake 45-50 minutes until golden and set.",
      "Warm apricot jam and brush over tart while still warm.",
      "Cool completely before slicing."
    ]
  },
  {
    title: "Plum Preserves",
    description: "Capture the essence of summer with homemade plum preserves perfect for toast, pastries, or gifts.",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: "Makes 4-5 jars",
    difficulty: "Easy",
    image: PLUM_JAM,
    category: "Preserves",
    ingredients: [
      "3 pounds fresh plums, pitted and chopped",
      "3 cups granulated sugar",
      "¼ cup fresh lemon juice",
      "1 teaspoon vanilla extract (optional)",
      "½ teaspoon ground cinnamon (optional)"
    ],
    instructions: [
      "Combine plums, sugar, and lemon juice in a large, heavy-bottomed pot.",
      "Let stand for 15 minutes to allow sugar to draw out juices.",
      "Bring to a boil over medium-high heat, stirring frequently.",
      "Reduce heat to medium and simmer 30-40 minutes, stirring often, until thickened.",
      "To test doneness, place a small amount on a chilled plate - it should wrinkle when pushed.",
      "Stir in vanilla and cinnamon if using.",
      "Ladle into sterilized jars, leaving ¼ inch headspace.",
      "Process in a water bath for 10 minutes, or refrigerate and use within 3 weeks."
    ]
  }
];

export function RecipesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${RECIPES_HERO})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Orchard Recipes
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
            From Tree to Table: Delicious Ways to Enjoy Our Heirloom Fruit
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our heirloom fruits deserve recipes that honor their unique flavors and textures. 
              Whether you're baking a classic pie with heritage apples, preserving the season's 
              bounty, or creating something new, these recipes celebrate the connection between 
              orchard and kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-12 text-primary">
            Orchard Kitchen Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Selecting Apples</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For baking pies and crisps, choose firm varieties like Granny Smith or our heirloom 
                Spitzenburg. For applesauce, softer varieties that break down easily work best. 
                Mix varieties for complex flavor!
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Peak Ripeness</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fruit continues to ripen after picking. For immediate use, choose fully ripe fruit. 
                For preserving or baking, slightly underripe fruit holds its shape better and has 
                more natural pectin.
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Preserving</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Freezing is the easiest way to preserve fresh fruit. Wash, dry, and freeze on 
                baking sheets before transferring to bags. For stone fruits, blanch briefly to 
                remove skins easily.
              </p>
            </div>
            <div className="bg-secondary/5 p-6 rounded-lg border border-border/50">
              <h3 className="font-serif text-xl font-bold mb-3 text-primary">Storage</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Store apples and pears in a cool, dark place or refrigerator. Stone fruits and 
                berries are best used within a few days. Keep fruit separate from vegetables, 
                as some release ethylene gas that speeds ripening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <ChefHat className="mx-auto mb-6" size={48} />
          <h2 className="font-serif text-3xl font-bold mb-4">
            Share Your Creations
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            We'd love to see what you make with our fruit! Tag us on social media or 
            share your favorite family recipes with our orchard community.
          </p>
          <a 
            href="mailto:info@latchorchards.com"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [expanded, setExpanded] = React.useState(false);

  const getDifficultyColor = (difficulty: Recipe['difficulty']) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Medium': return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-700 border-red-500/20';
    }
  };

  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-all">
      {/* Recipe Image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {recipe.category}
          </span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">
          {recipe.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {recipe.description}
        </p>

        {/* Recipe Meta */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground border-t border-b border-border/50 py-3">
          <div className="flex items-center gap-1.5">
            <Clock size={16} />
            <span>{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat size={16} />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={16} />
            <span>{recipe.servings}</span>
          </div>
        </div>

        {/* Expandable Section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left font-semibold text-primary hover:text-primary/80 transition-colors mb-3"
        >
          {expanded ? '− Hide Details' : '+ Show Full Recipe'}
        </button>

        {expanded && (
          <div className="space-y-4 pt-4 border-t border-border/50">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Ingredients:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Instructions:</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                {recipe.instructions.map((instruction, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-semibold text-primary shrink-0">{i + 1}.</span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
