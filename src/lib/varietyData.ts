// Variety data structures for all citrus and fruit varieties

export interface VarietyInfo {
  name: string;
  description: string;
  season?: string;
  characteristics?: string[];
  uses?: string[];
  storage?: string;
  ripenDate?: string;
}

export interface VarietyCategory {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  varieties: VarietyInfo[];
}

// CITRUS VARIETIES
export const citrusVarieties = {
  satsumas: {
    id: "satsumas",
    title: "Satsumas & Mandarins",
    subtitle: "Easy peeling, seedless, and cold hardy varieties.",
    imageUrl: "https://images.unsplash.com/photo-1582042784795-a4f65c024d35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxjaXRydXMlMjB0cmVlfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Owari",
        description: "The most popular cold-hardy mandarin variety. Excellent flavor, easy to peel, seedless. One of the originals grown here.  Many thousands of trees used to supply the entire US with the fruit. Late ripening, medium to large size.  Super easy peeling.  Rich flavor with subacid (more sweet than tart but a good balance.  Must be picked promptly but keeps well  ",
        season: "Early to mid-season",
        characteristics: ["Easy peel", "Seedless", "Sweet", "Cold hardy to Zone 8"],
        uses: ["Fresh eating", "Market sales"],
        ripenDate: "October to November"
      },
      {
        name: "Brown Select",
        description: "A seedless satsuma with exceptional cold hardiness and superior flavor profile.",
        season: "Mid-season",
        characteristics: ["Seedless", "Sweet-tart balance", "Very cold hardy"],
        uses: ["Fresh eating", "Commercial"],
        ripenDate: "November to December"
      },
      {
        name: "Miho Wase",
        description: "Early ripening satsuma with excellent peel quality and good flavor. Developed from seed and similar to Okitsu.  These can get really big and are one of the most cold hardy satsumas I have.",
        season: "Early",
        characteristics: ["Early ripening", "Good peel", "Sweet"],
        uses: ["Fresh eating"],
        ripenDate: "September to October"
      },
      {
        name: "LA Early",
        description: "One of the earliest ripening satsumas, ripening from September into October. As with all satsuma, easy peel and is nearly seedless.  A very hardy producer but tends to be alternate bearing.",
        season: "Very early",
        characteristics: ["Very early", "Good flavor", "Easy peel"],
        uses: ["Fresh eating", "Early market"],
        ripenDate: "September"
      },
      {
        name: "Xie Shan",
        description: "Chinese mandarin variety with excellent sweetness and complex flavor. Also very early ripening in September.  Unique flavor.  Fruit needs to be picked when ripe as it doesnt hold on tree well, but the taste will make you eat most of what you pick before you take it inside.",
        season: "Mid-season",
        characteristics: ["Sweet", "Complex flavor", "Good size"],
        uses: ["Fresh eating", "Premium market"],
        ripenDate: "October to November"
      },
      {
        name: "Okitsu Wase",
        description: "Early to mid season Japanese satsuma with consistent quality and good cold hardiness. Always very sweet.  Very vigorous grower.  Becoming one of the most popular early varieties worldwide.",
        season: "Early",
        characteristics: ["Early ripening", "Cold hardy", "Consistent quality"],
        uses: ["Fresh eating"],
        ripenDate: "October"
      },
      {
        name: "Shiranui",
        description: "Owner favorite, hence so many in the grove.  One of the most consistent and heavy producers of the largest and sweetest satsumas I have ever had.  The TM version you may know as Sumo.  Very expensive in store due to its popularity AND taste.  If you only get one tree, the shiranui is a good one to get.  Not as hardy as Owari but by far the best of all satsumas I have.",
        season: "Mid-season",
        characteristics: ["Necked", "Very large, like bigger than naval orange large", "Sweet"],
        uses: ["Fresh eating", "Specialty market"],
        ripenDate: "November"
      },
      {
        name: "Browns Select",
        description: "Another stunning tree. Matures before Owari, and is on the larger side for satsumas. Good flavor and cold hardiness. One of the sweetest on average.",
        season: "Late",
        characteristics: ["Late ripening", "Cold hardy", "Good flavor"],
        uses: ["Fresh eating", "Extended season"],
        ripenDate: "November to December"
      }
    ]
  },
  kuats: {
    id: "Quats",
    title: "The Quats",
    subtitle: "Exceptional cold-hardy Asian varieties.",
    imageUrl: "https://images.unsplash.com/photo-1582042784795-a4f65c024d35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw3fHxjaXRydXMlMjB0cmVlfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Nagami",
        description: "The GrandMother of kumquats.  An oval shaped package where the skin is sweet and the pulp is a tart.  When you eat the whole thing, It is a magical experience. Trees are heavy producers and very hardy.",
        characteristics: ["Cold hardy", "Premium flavor", "Good peel"],
        ripenDate: "October to November"
      },
      {
        name: "Meiwa",
        description: "The sweeter of the originals.  Round, and big for a kumquat. The tree is very hardy and precoucious, it will load up, set fruit, then bloom again thruout fall and winter.  .",
        characteristics: ["Unique flavor", "Easy peel", "Small-medium size"],
        ripenDate: "November"
      },
      {
        name: "Fukushu Kumquat",
        description: "A marraige of the negami and meiwa of sorts.  One of the owners faves.  Always a crowd pleaser and kids love them.  Still very hardy.",
        characteristics: ["Good storage", "Sweet", "Cold hardy"],
        ripenDate: "November to December"
      },
      {
        name: "Variagated Centennial Kumquat",
        description: "The show stopper.  A beautful variagated leaf that makes a wonderful statement in your landscape, with a very special surpise.  The plant produces variagated fruit!  The immature kumquats will have very distinct striping on them that moderates as the kumquat turns orange in the fall.  But the stripes remain and turn red.  The fruits arent as sweet as meiwa but more than make up for it in show factor alone.  Vey hardy as well, a rarity for variagated plants.",
        characteristics: ["Striped Fruit", "Large, egg sized", "Premium"],
        ripenDate: "November"
      },
      {
        name: "Longfruit kumquat",
        description: "A newer variety out of Florida. Elongated like Negami but sweeter.  This one is hard to find and produces heavily.",
        characteristics: ["Early ripening", "Sweet-tart", "Large fruit"],
        ripenDate: "October"
      },
      {
        name: "Marumi",
        description: "Traditional Asian variety with cultural significance. Seldom seen in commercial settings. Fruit are more rounded like meiwa but a distinct lineage.  This one is sweet tart and delicious.",
        characteristics: ["Traditional", "Good flavor", "Cold hardy"],
        ripenDate: "November"
      },
      {
        name: "Nordmann Seedless",
        description: "Although most eat the seeds in kumquats, this variety had them bred out.  Similiar size and taste to Negami.  Lighter skin, almost yellow, and very juicy.  Perfect for fresh eating.",
        characteristics: ["Sweet", "Dense flesh", "Long storage"],
        ripenDate: "November to December"
      },
      {
        name: "Calamondin",
        description: "AKA calamansi, is one of the most popular varieties we offer.  It is everbearing, and has a unique sour mandarin lime flavor.  Also available variagated when I dont sell out.  This one makes interesting drinks, soups, and even great dressings.",
        characteristics: ["Large fruit", "Good color", "Premium flavor"],
        ripenDate: "November"
      },
      {
        name: "HYBRID Eustis Limequat",
        description: "Hybid of marumi and West Indian Lime.  Oval and has a sweet tart flavor, very good in drinks and as a substitute for key limes in pies. Tree is very cold hardy which is rare for any lime, thanks to its Kumquat parentage.",
        characteristics: ["Balanced flavor", "Good peel", "Medium size"],
        ripenDate: "October to November"
      },
      {
        name: "IndioMandarinQuat",
        description: "One of the owners favorites.  This is what good breeding brings.  A cross between a Dancy mandarin and Nagami.  This is a stunning tree and the fruit is delicious, but tart.  Best served in beverages.  The mandarin parentage makes the rind a striking orange color.",
        characteristics: ["Late ripening", "Tart", "Good storage"],
        ripenDate: "December"
      },
      {
        name: "Sunquat",
        description: "Owners third favorite and always a crowd pleaser.  The fruit looks like a lemon but is sweet.  Very lemon flavor so best way I can describe it is like eating lemon pie... rind and all.  Plant is not as hardy as others but the looks you'll get when eating it are well worth the effort.",
        characteristics: ["Heritage", "Complex flavor", "Cold hardy"],
        ripenDate: "November"
      },
      {
        name: "Citrangequat",
        description: "Cross betwen Negami and citrange.  Seedy but delicious!  Tree is very thorny so also makes are great hedge with edible fruit!  Very juicy and very resistant to almost any disease.",
        characteristics: ["Premium", "Mixer", "Thorny Plant"],
        ripenDate: "November to December"
      },
      {
        name: "Malayan Kumquat",
        description: "AKA Limau pagar from Malaysia. Seems to be its own genus.  Thin skinned rounder fruit. Also makes a great hedge, the ripened fruit is yellow vs the expected orange colors.",
        characteristics: ["Early", "Good flavor", "Uniform size"],
        ripenDate: "October"
      },
      {
        name: "Faustrime",
        description: "A true heirloom cross between a Australian Fingerlime and Limquat.The fruit is very unique in appears and taste.  Much larger than a finger lime.  Looks kinda like a sweet potato.  Very juicy and typical lime flavor, great anywhere you use a lime.",
        characteristics: ["Unique texture", "Sweet", "Very Large"],
        ripenDate: "November"
      },
      {
        name: "Heard Honey",
        description: "Our own private cultivar.  Trees not yet for sale but the fruit is, we think, the best you'll ever have for a kumquat.  14 years of breeding went into this fruit.  Large, Egg size fruit, with very high brix (sweetness).  Very little pulp but when eaten together we think is the best kumquat you will ever find.",
        characteristics: ["Very late", "Excellent flavor", "Long storage"],
        ripenDate: "November to December"
      }
    ]
  },
  oranges: {
    id: "oranges",
    title: "Oranges & Tangerines",
    subtitle: "Full-flavored varieties for eating and juice.",
    imageUrl: "https://images.unsplash.com/photo-1567359781514-3b963ff8f78e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw4fHxvcmFuZ2V8ZW58MHwwfHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Washington Naval",
        description: "The classic juice orange. Seedless, sweet, and aromatic.",
        season: "Mid-season",
        characteristics: ["Seedless", "Excellent juice", "Sweet", "Aromatic"],
        uses: ["Juice", "Fresh eating"],
        ripenDate: "February to May"
      },
      {
        name: "CaraCara",
        description: "AKA Red Naval. Premium sweet orange with excellent color and flavor. Subacid and distinct flavor.",
        season: "Mid-season",
        characteristics: ["Sweet", "Beautiful color", "Excellent flavor"],
        uses: ["Fresh eating", "Premium market"],
        ripenDate: "December to March"
      },
      {
        name: "Hamlin",
        description: "Early season orange with good juice quality and flavor.",
        season: "Early",
        characteristics: ["Early ripening", "Good juice", "Sweet"],
        uses: ["Juice", "Fresh eating"],
        ripenDate: "September to October"
      }

    ]
  },
  lemons: {
    id: "lemons",
    title: "Lemons & Limes",
    subtitle: "Essential citrus for culinary and fresh market.",
    imageUrl: "https://images.unsplash.com/photo-1580080169212-a7bf72c4d8d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw5fHxsZW1vbnN8ZW58MHwwfHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Lisbon",
        description: "Standard commercial lemon. Very acidic, excellent juice content.",
        season: "Year-round",
        characteristics: ["Acidic", "High juice", "Vigorous tree", "Cold hardy"],
        uses: ["Juice", "Culinary", "Commercial"],
        storage: "Excellent, up to 3 months"
      },
      {
        name: "Meyers Improved",
        description: "A perfect lemon for pies, or anything else as the fruit is not as sour as other lemons.  Typically very large and smooth.  Will produce and bloom again to produce more. Tastes like your childhood.",
        season: "Year-round",
        characteristics: ["Seedless", "Sweet-tart", "Productive"],
        uses: ["Fresh eating", "Culinary", "Juice"],
        storage: "Good, up to 2 months"
      },
      {
        name: "Mexican Lime",
        description: "AKA Key Lime.  Small, tropical lime with intense flavor.",
        season: "Year-round",
        characteristics: ["Tropical", "Intense flavor", "Small fruit"],
        uses: ["Culinary", "Beverages", "Fresh market"],
        ripenDate: "Year-round production"
      }
    ]
  }
};

// FRUIT TREE VARIETIES
export const fruitVarieties = {
  apples: {
    id: "apples",
    title: "Heirloom & Modern Apples",
    subtitle: "Crisp, juicy varieties from classic heirlooms to contemporary favorites.",
    imageUrl: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxMHx8YXBwbGVzfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Heirloom Apples",
        description: "Our collection of heirloom apple varieties represents generations of orchard tradition. These exceptional apples were selected for their superior flavor, distinctive character, and ability to thrive in diverse growing conditions. From tart cooking apples to sweet dessert varieties, our heirloom selection honors apple-growing heritage while delivering exceptional quality to modern tables.",
        season: "Late Summer to Fall",
    
      },
     
    ]
  },
  pears: {
    id: "pears",
    title: "Pears",
    subtitle: "Sweet, juicy varieties for fresh eating and storage.",
    imageUrl: "https://images.unsplash.com/photo-1599599810694-b3fa5c9b7a0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHw1fHxwZWFyc3xlbnwwfDB8fHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Bartlett",
        description: "Classic pear with sweet, juicy flavor. Colors yellow when ripe.",
        season: "Mid-season",
        characteristics: ["Yellow", "Sweet", "Juicy", "Classic"],
        uses: ["Fresh eating", "Canning"],
        storage: "Good, 1-2 weeks",
        ripenDate: "August to September"
      },

      {
        name: "Bosc",
        description: "Russet-colored pear with rich, spicy flavor. Excellent storage.",
        season: "Mid-late",
        characteristics: ["Russet", "Spicy", "Dense", "Good storage"],
        uses: ["Fresh eating", "Cooking"],
        storage: "Good, 2-3 weeks",
        ripenDate: "September to October"
      }

    ]
  },
  peaches: {
    id: "peaches",
    title: "Heirloom & Modern Peaches",
    subtitle: "Sweet, fragrant summer favorites with exceptional flavor and versatility.",
    imageUrl: "https://images.unsplash.com/photo-1586985289688-cacb595b04a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwZWFjaGVzfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Heirloom Peaches",
        description: "Our heirloom peach collection represents the finest traditions of peach cultivation. Selected over generations for their superior flavor, fragrance, and texture, these peaches embody the essence of summer fruit. Each variety brings distinctive character—from deeply aromatic yellow-fleshed varieties to delicate white-fleshed cultivars—offering complexity and depth that modern commercial peaches often lack. Perfect for fresh eating, preserving, and all culinary applications.",
        season: "Early Summer to Mid-Summer",
              },
      {
        name: "Peach 1 - Sam Houston",
        description: "The Sam Houston Peach Tree was fittingly developed in the 'Lone Star' state by Texas A&M. The tree requires only 500 chill hours to fruit. If the stunning pink flowers of this variety do not catch your attention, their fragrance surely will. The sweet smell of spring gives way to the sweet, yellow flesh of this peach come late June. The Sam Houston Peach Tree is large, self-fertile and freestone with a small pit. Sam Houston is exceptionally versatile—equally fine for fresh eating, canning, preserving, cobbler baking, or freezing. The flavor is rich, complex, and aromatic, deepening if allowed to fully ripen on the tree. A great canning variety.",
        season: "Mid-season",
        characteristics: ["Large", "Yellow flesh", "Red blush", "Aromatic", "Freestone"],
        uses: ["Fresh eating", "Canning", "Preserving", "Baking", "Freezing"],
        storage: "Best eaten within days of ripening; excellent for canning and freezing",
        ripenDate: "July to August"
      },
      {
        name: "Peach 2 - June Gold",
        description: "Bred by the New Hampshire Agricultural Station to survive harsh winters, Reliance represents peach hardiness combined with good flavor. This variety can survive temperatures to -25°F, making it valuable for northern orchards. The fruit is medium-sized with golden-yellow skin and red mottling. The flesh is yellow, firm, juicy, and sweet with pleasant aromatic qualities. While not quite matching the flavor complexity of southern-grown peaches, Reliance delivers solid flavor and the unique value of reliability in challenging climates. Excellent for fresh eating and suitable for processing. Trees are vigorous and productive.",
        season: "Early to mid-season",
        characteristics: ["Cold hardy to -25°F", "Medium size", "Yellow flesh", "Sweet", "Reliable"],
        uses: ["Fresh eating", "Canning"],
        storage: "Best fresh; suitable for freezing",
        ripenDate: "June to July"
      },
      {
        name: "Peach 3 - Belle of Georgia",
        description: "A vintage Southern peach variety known for its pure flavor and beautiful appearance. Belle of Georgia is a white-fleshed peach with a distinctive look—pale yellow background with deep red blush creating striking bi-color appearance. The flesh is white, tender, very juicy, and wonderfully aromatic with a delicate, refined flavor profile. White-fleshed peaches have devotees who appreciate their subtle sweetness and complex flavor. Primarily used for fresh eating where its elegant appearance and flavor shine. The tender flesh makes it less suitable for processing. Freestone variety.",
        season: "Mid-season",
        characteristics: ["White flesh", "Bi-color", "Tender", "Aromatic", "Freestone"],
        uses: ["Fresh eating", "Premium market"],
        storage: "Best eaten fresh within days of ripening",
        ripenDate: "July to August"
      },
      {
        name: "Peach 4 - MS Native",
        description: "Another cold-hardy variety developed for northern regions, Contender survives to -20°F while delivering respectable flavor. Released by the USDA, this variety combines winter hardiness with productive trees and medium to large fruit. The skin is golden-yellow with attractive red coloring. The flesh is yellow, firm, and sweet with decent aromatic qualities. Contender is a freestone variety, making processing easier than many cold-hardy types. Well-suited for fresh eating and general processing. Trees are naturally dwarfing, fitting smaller spaces.",
        season: "Early to mid-season",
        characteristics: ["Cold hardy to -20°F", "Golden-yellow", "Yellow flesh", "Sweet", "Freestone"],
        uses: ["Fresh eating", "Canning", "Preserving"],
        storage: "Suitable for fresh eating, freezing, and canning",
        ripenDate: "June to early July"
      },
      {
        name: "Peach 5 - Red Haven",
        description: "A widely adapted variety bred in Michigan for reliable performance across diverse climates. Red Haven combines good flavor with dependable productivity. The fruit is medium to large with golden-yellow skin heavily colored with red. The flesh is yellow, tender, very juicy, and sweet with pleasant aromatic character. Red Haven's moderate cold hardiness (to -15°F) extends its range northward. The freestone pit separates cleanly, making canning and freezing straightforward. Excellent for fresh eating and general home processing. Trees are moderate-sized and relatively easy to maintain.",
        season: "Mid-season",
        characteristics: ["Medium-large", "Yellow flesh", "Tender", "Juicy", "Freestone"],
        uses: ["Fresh eating", "Canning", "Freezing"],
        storage: "Best fresh; excellent for freezing and canning",
        ripenDate: "July to early August"
      }
    ]
  },
  nectarines: {
    id: "nectarines",
    title: "Nectarines",
    subtitle: "Smooth-skinned peach relatives with intense flavor.",
    imageUrl: "https://images.unsplash.com/photo-1612528443702-f6741f3a6f85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwxfHxuZWN0YXJpbmVzfGVufDB8MHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Flame Prince",
        description: "Sweet, juicy nectarine with beautiful red color.",
        season: "Mid-season",
        characteristics: ["Red", "Sweet", "Juicy"],
        uses: ["Fresh eating"],
        ripenDate: "June to July"
      }
    ]
  },
  plums: {
    id: "plums",
    title: "Plums",
    subtitle: "Sweet and tart varieties for fresh eating and preserves.",
    imageUrl: "https://images.unsplash.com/photo-1599599810964-b3baf1f30c71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NzI1Njd8MHwxfHNlYXJjaHwyfHxwbHVtc3xlbnwwfDB8fHx8fDE3NjY0NTg0MjJ8MA&ixlib=rb-4.1.0&q=85",
    varieties: [
      {
        name: "Santa Rosa",
        description: "Popular plum with sweet-tart flavor. Excellent for fresh eating.",
        season: "Mid-season",
        characteristics: ["Red", "Sweet-tart", "Juicy"],
        uses: ["Fresh eating", "Preserves"],
        ripenDate: "July to August"
      }
    ]
  }
};
