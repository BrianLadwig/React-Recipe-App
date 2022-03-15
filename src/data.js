const arrayOfRecipes = [
  {
    id: 1,
    name: "Sandwich Rounds",
    time: "2 hrs 55 mins",
    info: "These easy Sandwich Rounds are made with a simple no-knead dough and topped with a healthy dose of “everything but the bagel” seasoning.",
    ingredients: [
      { amount: 0.33, unit: "cups", ingredient: "all-purpose flour" },
      { amount: 0.13, unit: "tsp", ingredient: "salt" },
      { amount: 0.14, unit: "tsp", ingredient: "instant yeast" },
      { amount: 0.21, unit: "cups", ingredient: "water" },
      { amount: 0.17, unit: "Tbsp", ingredient: "olive oil" },
      {
        amount: 0.33,
        unit: "Tbsp",
        ingredient: "Everything But The Bagel Seasoning",
      },
    ],
    instructions: [
      "Combine the flour, salt, and yeast in a bowl and stir until very well combined.",
      "Add the water and olive oil and stir until a sticky ball of dough forms. There should be no dry flour left on the bottom of the bowl.",
      "Loosley cover the bowl and let it sit at room temperature for two hours, or until the dough has doubled in size and is very fluffy and bubbly in texture. ",
      "Sprinkle some flour on top of the dough and use your hands to scrape it down off the sides of the bowl. Dump the dough out onto a floured surface. The dough will be very loose and sticky, so use flour to keep it from sticking to your hands and work surface.",
      "Divide the dough into six pieces, then shape each into a ball. Use a rolling pin to flatten each ball into a 4 to 5-inch diameter circle. Place the flattened circles on a parchment lined baking sheet.",
      "Brush a thin layer of water on top of each round, then sprinkle about one teaspoon of Everything But the Bagel Seasoning onto each one. Let the sandwich rounds rise for 30 minutes.",
      "Toward the end of the rise time, begin preheating the oven to 400ºF. Use your fingers to press dimples down into each sandwich round (this helps them stay flat as they bake).",
      "Once the oven is fully preheated, transfer the baking sheet to the oven and bake the sandwich rounds for about 25 minutes, or until they're golden brown. ",
      "Remove them from the oven and transfer to a wire rack to cool. The crust may seem really hard immediately after they come out of the oven, but they will soften as they cool. Once cooled serve or store in the refrigerator (3-4 days) or freezer (3 months), in an air-tight container.",
    ],
    notes: '',
    category: "breakfast",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2021/07/EBB-Sandwich-Rounds-V1.jpg",
    src: "https://www.budgetbytes.com/everything-but-the-bagel-sandwich-rounds/",
  },
  {
    id: 2,
    name: "Mango Coconut Chia Pudding",
    time: "8 hrs",
    info: "These Mango Coconut Chia Pudding cups are a fast and easy make-ahead breakfast with tons of fiber and protein.",
    ingredients: [
      { amount: 0.13, unit: "lb.", ingredient: "frozen mango chunks" },
      { amount: 0.25, unit: "13oz. can", ingredient: "can lite coconut milk" },
      { amount: 0.25, unit: "tsp", ingredient: "sugar" },
      { amount: 0.5, unit: "Tbsp", ingredient: "chia seeds" },
    ],
    instructions: [
      "If the mango chunks are in large pieces, chop them into smaller, 1/4-inch pieces. Place half of the mango chunks , the coconut milk, and sugar in a blender and process until smooth.",
      "Divide the remaining mango chunks between 4 small containers (10-12oz. containers). Add 1.5 Tbsp of chia seeds to each container. Finally, pour the mango coconut milk mixture into the containers, dividing it evenly between all four.",
      "Stir the contents of each container to make sure all the chia seeds have adequate exposure to the liquid. Place lids on the containers and refrigerate over night, or up to 4-5 days.",
    ],
    notes:
      "Fresh mango can be used in place of frozen. You'll need about 2 cups of mango chunks.**Do not use full-fat canned coconut milk as it has a lower moisture content and may not fully hydrate the chia seeds.",
    category: "breakfast",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2017/05/Stir-Mango-Coconut-Chia-Pudding.jpg",
    src: "https://www.budgetbytes.com/mango-coconut-chia-pudding/",
  },
  {
    id: 3,
    name: "Toasted Coconut Oat Bran",
    time: "15 mins",
    info: "Coconut milk is the secret ingredient to making this Toasted Coconut Oat Bran the warmest and creamiest bowl you've had for breakfast. ",
    ingredients: [
      { amount: 0.06, unit: "cup", ingredient: "unsweetened shredded coconut" },
      { amount: 0.25, unit: "14oz. can", ingredient: "light coconut milk" },
      { amount: 0.38, unit: "cub", ingredient: "water" },
      { amount: 0.25, unit: "cub", ingredient: "oat bran" },
      { amount: 0.06, unit: "tsp", ingredient: "salt" },
    ],
    instructions: [
      "Add the shredded coconut to a dry skillet. Stir and cook over medium-low heat until the coconut is golden brown. Remove it from the warm skillet immediately to stop the cooking, and set it aside.",
      "Add the can of coconut milk, 1.5 cups of water, oat bran, and 1/4 tsp salt to a sauce pot. Cook over medium heat, stirring frequently, until thickened.",
      "Divide the cooked oat bran between four bowls and top with the toasted coconut. Add the sweetener of your choice, if desired (brown sugar, honey, maple syrup, and jam are all nice), or enjoy as is.",
    ],
    notes:
      "If you don't have shredded coconut to use as a garnish, this still tastes amazing.",
    category: "breakfast",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2015/04/Toasted-Coconut-Oatbran-above.jpg",
    src: "https://www.budgetbytes.com/toasted-coconut-oat-bran/",
  },

  {
    id: 4,
    name: "Spiced Lentils with Carrots",
    time: "50mins",
    info: "These warm, sweet, and savory spiced lentils hold up well as leftovers and make the perfect cozy vegetarian meal prep. ",
    ingredients: [
      { amount: 0.25, unit: "", ingredient: "yellow onion" },
      { amount: 1, unit: "", ingredient: "cloves garlic " },
      { amount: 0.25, unit: "tsb", ingredient: "fresh grated ginger" },
      { amount: 1, unit: "", ingredient: "carrots (about 2 cups chopped)" },
      { amount: 0.5, unit: "Tbsp", ingredient: "olive oil" },
      { amount: 0.25, unit: "tsb", ingredient: "ground cumin" },
      { amount: 0.13, unit: "tsb", ingredient: "cinnamon" },
      { amount: 0.13, unit: "tsb", ingredient: "allspice" },
      { amount: 0.06, unit: "tsb", ingredient: " crushed red pepper" },
      { amount: 0.25, unit: "cub", ingredient: "brown lentils" },
      { amount: 0.75, unit: "Tbsp", ingredient: "tomato paste" },
      {
        amount: 0.06,
        unit: "cub",
        ingredient: "chopped dried apricots or raisins",
      },
      { amount: 0.75, unit: "cubs", ingredient: "vegetable broth" },
      { amount: 0.25, unit: "Tbsp", ingredient: "chopped parsley (optional)" },
    ],
    instructions: [
      "Dice the onion, mince the garlic, grate the ginger, and peel and dice the carrots",
      "Add the onion, garlic, ginger, and olive oil to a deep skillet. Sauté over medium heat until the onions are soft and translucent (about five minutes).",
      "Add the diced carrots, cumin, cinnamon, allspice, and crushed red pepper to the skillet. Continue to sauté for about two minutes more.",
      "Next, add the uncooked lentils, tomato paste, raisins or chopped apricots, and broth to the skillet. Stir until the tomato paste has dissolved into the broth. Place a lid on the skillet and turn the heat up to high.",
      "Allow the broth to come to a full boil. Once boiling, turn the heat down to medium-low and let the lentils simmer in the broth with the lid on for 30 minutes, stirring only occasionally.",
      "After 30 minutes the lentils and carrots should be very tender. Give the lentils a taste and add salt or pepper if needed (this will depend on the salt content of your broth, I did not add any).",
      "Serve the spiced lentils with crusty bread for dipping, or over a bed of polenta or mashed potatoes. Top with chopped fresh parsley if desired.",
    ],
    notes:
      "*Raisins are the more economical choice here (golden or purple raisins), but I happened to have dried apricots on hand so I used those instead of buying raisins specifically for this recipe.",
    category: "meal",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2021/12/Spiced-Lentils-V1.jpg",
    src: "https://www.budgetbytes.com/spiced-lentils-with-carrots/",
  },
  {
    id: 5,
    name: "Curry Roasted Vegetable Bowls",
    time: "55 mins",
    info: "These curry roasted vegetable bowls are colorful, full of vibrant flavors, and the leftovers pack up well for your weekly meal prep! ",
    ingredients: [
      {
        amount: 0.25,
        unit: "cup",
        ingredient: "long grain brown rice (uncooked)",
      },
      { amount: 0.25, unit: "", ingredient: "head cauliflower" },
      { amount: 0.75, unit: "", ingredient: "carrots" },
      { amount: 0.25, unit: "", ingredient: "red onion" },
      { amount: 0.25, unit: "cup", ingredient: "frozen peas" },
      { amount: 0.5, unit: "Tbsp", ingredient: "olive oil" },
      { amount: 0.5, unit: "Tbsp", ingredient: "curry powder" },
      { amount: 0.13, unit: "tsp", ingredient: "salt" },
      { amount: 0.08, unit: "cup", ingredient: "tahini" },
      { amount: 0.08, unit: "cup", ingredient: "water" },
      { amount: 0.06, unit: "cup", ingredient: "lemon juice" },
      { amount: 0.5, unit: "cloves", ingredient: "garlic, minced" },
      {
        amount: 0.13,
        unit: " ground",
        ingredient: "cumin",
      },
      { amount: 0.06, unit: "tsp", ingredient: "cayenne" },
      { amount: 0.06, unit: "tsp", ingredient: "salt" },
    ],
    instructions: [
      "Begin the rice first because it takes the longest to cook. Combine the uncooked rice in a pot with 2 cups water. Place a lid on top, turn the heat onto high, and allow the water to come up to a full boil. Once boiling, turn the heat down to low and let the rice simmer for 45 minutes (no stirring). After 45 minutes, turn the heat off and let it rest with the lid in place for an additional five minutes.",
      "Once the rice is started, move on to the curry roasted vegetables. Preheat the oven to 400ºF. Chop the cauliflower into bite-sized florets. Peel and slice the carrots. Slice the red onion into ¼-inch wide slices.",
      "Place the cauliflower, carrots, and red onion on a parchment lined baking sheet. Drizzle the olive oil over top, then add the curry powder and salt. Toss the vegetables until everything is evenly coated in oil and spices. Spread the vegetables out over the baking sheet in a single layer.",
      "Transfer the seasoned vegetables to the oven and roast for 20 minutes. After 20 minutes give them a good stir, then roast for another 15 minutes. Next, add the frozen peas and toss together with the roasted vegetables, then return the baking sheet to the oven for the an additional 5 minutes. Taste the vegetables and add additional salt, if needed.",
      "While the rice is simmering and the vegetables are roasting, make the lemon tahini dressing. Place the tahini, water, lemon juice, minced garlic, cumin, cayenne, and salt in a blender then blend until smooth. Set the dressing aside.",
      "When the rice has finished cooking, fluff with a fork. Place about ¾ cup rice into each bowl or meal prep container. Top with ¼ of the roasted vegetables. Drizzle with a few tablespoons of dressing just before serving. ",
    ],
    notes: "",
    category: "meal",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2021/04/Curry-Roasted-Vegetable-Bowls-side.jpg",
    src: "https://www.budgetbytes.com/curry-roasted-vegetable-bowls/",
  },
  {
    id: 6,
    name: "Vegan Creamy Mushroom Ramen",
    time: "15 mins",
    info: "This incredibly simple Vegan Creamy Mushroom Ramen is a rich and flavorful 15 minute meal that only requires a handful of ingredients!  ",
    ingredients: [
      { amount: 0.5, unit: "Tbsp", ingredient: "cooking oil" },
      { amount: 4, unit: "oz.", ingredient: "baby bella mushrooms" },
      { amount: 1.5, unit: "cups", ingredient: "vegetable broth" },
      { amount: 1, unit: "handful", ingredient: "fresh spinach" },
      { amount: 1, unit: "package", ingredient: "ramen noodles" },
      { amount: 0.5, unit: "cup", ingredient: "coconut milk " },
      { amount: 1, unit: "", ingredient: "green onion" },
      { amount: 1, unit: "Tbsp", ingredient: "chili garlic sauce or sriracha" },
    ],
    instructions: [
      "Slice the mushrooms. Add them to a small sauce pot with the cooking oil and sauté over medium heat until the mushrooms are soft, dark, and all the moisture in the bottom of the pot has evaporated.",
      "Add the vegetable broth, turn the heat up to medium-high, and bring the broth up to a boil. Once boiling, add the ramen noodles (without the seasoning packet) to the broth. Cook the noodles in the boiling broth for about 3 minutes, or until tender.",
      "Turn the heat off, add a heaping handful of fresh spinach, and stir until the spinach is wilted (about 30 seconds). Pour the coconut milk into the pot and stir to combine.",
      "Serve the Vegan Creamy Coconut Ramen as-is, or with garnishes like green onion or chili garlic sauce.",
    ],
    notes: "",
    category: "meal",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2019/09/Vegan-Creamy-Mushroom-Ramen-V2.jpg",
    src: "https://www.budgetbytes.com/vegan-creamy-mushroom-ramen/",
  },
  {
    id: 7,
    name: "Cherry Almond Smoothie",
    time: "5 mins",
    info: "This rich and creamy smoothie has a natural and subtle sweetness, a creamy texture, and tons of protein and plant fiber to keep you full. ",
    ingredients: [
      { amount: 0.5, unit: "cup", ingredient: "frozen riced cauliflower" },
      { amount: 0.5, unit: "", ingredient: "frozen banana" },
      { amount: 0.5, unit: "cup", ingredient: "frozen sweet cherries" },
      { amount: 1, unit: "Tbsp", ingredient: "almond butter" },
      { amount: 0.125, unit: "tsp", ingredient: "cinnamon" },
      { amount: 1, unit: "cup", ingredient: "almond milk" },
    ],
    instructions: [
      "Add all of the ingredients to a blender and blend until smooth. Adjust the liquid as needed to make it blend smoothly. Serve immediately. ",
    ],
    notes:
      "I used plain, unsweetened almond milk, but you can use sweetened if you prefer a sweeter smoothie. Vanilla flavored almond milk will also work well. ",
    category: "snack",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2021/04/Cherry-Almond-Smoothie-H1.jpg",
    src: "https://www.budgetbytes.com/cherry-almond-smoothie/",
  },
  {
    id: 8,
    name: "Vegan Chocolate Depression Cake",
    time: "1 hr 50 mins",
    info: "This unique Chocolate Cake recipe, popularized during the great depression, is rich and chocolatey without the using any eggs, butter, or milk! ",
    ingredients: [
      { amount: 0.17, unit: "cup", ingredient: "all-purpose flour" },
      { amount: 0.11, unit: "cup", ingredient: "all-purpose flour" },
      { amount: 0.06, unit: "tsp", ingredient: "salt" },
      { amount: 0.11, unit: "tsp", ingredient: "baking soda" },
      { amount: 0.04, unit: "cup", ingredient: "unsweetened cocoa powder" },
      { amount: 0.04, unit: "cup", ingredient: "cooking oil" },
      { amount: 0.11, unit: "Tbsp", ingredient: "vinegar" },
      { amount: 0.22, unit: "tsp", ingredient: "vanilla extract" },
      { amount: 0.44, unit: "cup", ingredient: "water" },
      { amount: 0.17, unit: "cup", ingredient: "powdered sugar" },
      { amount: 0.03, unit: "cup", ingredient: "cocoa powder" },
    ],
    instructions: [
      "Preheat the oven to 350ºF. In a large bowl, stir together the flour, sugar, salt, baking soda, and cocoa powder until well combined.",
      "Add 1 cup water to a liquid measuring cup, then add the vanilla extract and vinegar to the water. ",
      "Add the oil to the bowl of dry ingredients, followed by the water mixture. Stir until the chocolate cake batter is mostly smooth. Make sure no dry flour remains on the bottom of the bowl.",
      'Pour the cake batter into an 8x8" or 9x9" baking dish. Transfer the baking dish to the oven and bake the cake for 35 minutes.',
      "If using the chocolate icing, let the cake cool for at least an hour after baking before adding the icing.",
      "Wait until the cake is cool, then prepare the icing. Add the powdered sugar, cocoa powder, and vanilla extract to a bowl. Begin adding water, 1 tablespoon at a time, until it forms a thick but pourable icing (about 3 Tbsp total). If you let the icing sit, it may begin to dry, but you can add a splash more water to make it moist again.",
      "Pour the icing over the cooled cake and spread until the cake is evenly covered. Slice the cake into 9 pieces and serve.",
    ],
    notes: "Use any neutral cooking oil of your choice, like canola, vegetable, grapeseed, safflower, corn, or avocado oil. Any light vinegar will work, like white vinegar, rice vinegar, or apple cider vinegar.",
    category: "snack",
    pic: "https://www.budgetbytes.com/wp-content/uploads/2020/04/Chocolate-Depression-Cake-slice-side.jpg",
    src: "https://www.budgetbytes.com/chocolate-depression-cake/",
  },
  {
    id: 9,
    name: "lemon spice cake",
    time: "50 mins",
    info: "This sweet and spicy Lemon Spice Cake requires no egg and very little fat! Use vegetable oil or shortening to make it vegan.",
    ingredients: [
      { amount: 0.19, unit: "cup", ingredient: "all-purpose flour" },
      { amount: 0.13, unit: "cup", ingredient: "granulated sugar" },
      { amount: 0.13, unit: "tsp", ingredient: "baking soda" },
      { amount: 0.13, unit: "tsp", ingredient: "cinnamon" },
      { amount: 0.13, unit: "tsp", ingredient: "ground ginger" },
      { amount: 0.06, unit: "tsp", ingredient: "nutmeg" },
      { amount: 0.06, unit: "tsp", ingredient: "ground cloves" },
      { amount: 0.06, unit: "tsp", ingredient: "salt" },
      { amount: 0.13, unit: "", ingredient: "med lemon" },
      { amount: 0.13, unit: "Tbsp", ingredient: "vegetable shortening, oil" },
      { amount: 0.13, unit: "tbp", ingredient: "apple cider vinegar" },
      {
        amount: 0.13,
        unit: "cup",
        ingredient: "water",
      },
      { amount: 0.13, unit: "cup", ingredient: "powdered sugar" },
    ],
    instructions: ["Preheat your oven to 350 degrees. In a large bowl, combine the flour, granulated sugar, baking soda, cinnamon, nutmeg, ginger, salt, cloves and lemon zest. Stir until everything is well combined.","Make two wells in the dry ingredients and place the cider vinegar in one and shortening,oil or butter in the other (melt the shortening or butter first). Pour the water over everything and stir just until everything is wet. There may still be lumps but that is okay, just make sure there are no large pockets of dry stuff on the bottom.","Pour the batter into a loaf pan or 8×8 baking dish that has been sprayed with non-stick spray. Cook for 30-40 minutes or until a toothpick inserted in the middle comes out clean. The batter will be more shallow in a square baking dish and will therefore cook faster than in a loaf pan. Keep an eye on the top, if it starts to crack, it is probably done. Let cool on a wire rack.","While the cake is cooling, make the lemon glaze. Place the powdered sugar in a small bowl and stir in the juice from the lemon. Depending on how much juice is in your lemon, you may not need all of it. Wait until the cake has cooled before pouring on the glaze or else the heat will cause the glaze to slide right off."],
    notes: "",
    category: "snack",
    pic: "https://lh6.googleusercontent.com/_OaYG005JPDs/TZPBI_pHW5I/AAAAAAAAC_k/CQczJ19BF84/s640/Lemon%20Spice%20Cake%20slices.jpg",
  },
];

export default arrayOfRecipes;
