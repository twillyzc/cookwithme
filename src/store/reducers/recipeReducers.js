import { Types } from '../Types';

const initialState = {
  item: {
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    weightWatcherSmartPoints: 9,
    gaps: 'no',
    lowFodmap: false,
    preparationMinutes: 15,
    cookingMinutes: 12,
    aggregateLikes: 48498,
    spoonacularScore: 69,
    healthScore: 8,
    creditsText: 'Cinnamon Spice and Everything Nice',
    sourceName: 'Cinnamon Spice and Everything Nice',
    pricePerServing: 55.7,
    extendedIngredients: [
      {
        id: 10020081,
        aisle: 'Baking',
        image: 'flour.png',
        consistency: 'solid',
        name: 'unbleached flour',
        original: '2 cups unbleached self-rising flour*',
        originalString: '2 cups unbleached self-rising flour*',
        originalName: 'unbleached self-rising flour',
        amount: 2,
        unit: 'cups',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 473.176,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 4053,
        aisle: 'Oil, Vinegar, Salad Dressing',
        image: 'olive-oil.jpg',
        consistency: 'liquid',
        name: 'olive oil',
        original: '2 tablespoons olive oil',
        originalString: '2 tablespoons olive oil',
        originalName: 'olive oil',
        amount: 2,
        unit: 'tablespoons',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 2,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
          metric: {
            amount: 2,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
        },
      },
      {
        id: 14412,
        aisle: 'Beverages',
        image: 'water.png',
        consistency: 'liquid',
        name: 'water',
        original: '6 tablespoons water',
        originalString: '6 tablespoons water',
        originalName: 'water',
        amount: 6,
        unit: 'tablespoons',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 6,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
          metric: {
            amount: 6,
            unitShort: 'Tbsps',
            unitLong: 'Tbsps',
          },
        },
      },
      {
        id: 20081,
        aisle: 'Baking',
        image: 'flour.png',
        consistency: 'solid',
        name: 'flour',
        original:
          '*Substitute 2 cups all-purpose flour + 1 teaspoon baking powder + ½ teaspoon salt and increase the water to ½ cup',
        originalString:
          '*Substitute 2 cups all-purpose flour + 1 teaspoon baking powder + ½ teaspoon salt and increase the water to ½ cup',
        originalName:
          'Substitute 2 cups all-purpose flour + 1 teaspoon baking powder + ½ teaspoon salt and increase the water to',
        amount: 0.5,
        unit: 'cup',
        meta: ['all-purpose'],
        metaInformation: ['all-purpose'],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 11549,
        aisle: 'Canned and Jarred',
        image: 'tomato-sauce-or-pasta-sauce.jpg',
        consistency: 'solid',
        name: 'pizza sauce',
        original: '⅔ cup pizza sauce',
        originalString: '⅔ cup pizza sauce',
        originalName: 'pizza sauce',
        amount: 0.6666666666666666,
        unit: 'cup',
        meta: [],
        metaInformation: [],
        measures: {
          us: {
            amount: 0.667,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 157.725,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 1031009,
        aisle: 'Cheese',
        image: 'cheddar-cheese.png',
        consistency: 'solid',
        name: 'sharp cheddar cheese',
        original: '1 cup shredded sharp white cheddar cheese',
        originalString: '1 cup shredded sharp white cheddar cheese',
        originalName: 'shredded sharp white cheddar cheese',
        amount: 1,
        unit: 'cup',
        meta: ['shredded', 'white'],
        metaInformation: ['shredded', 'white'],
        measures: {
          us: {
            amount: 1,
            unitShort: 'cup',
            unitLong: 'cup',
          },
          metric: {
            amount: 236.588,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 1001026,
        aisle: 'Cheese',
        image: 'shredded-cheese-white.jpg',
        consistency: 'solid',
        name: 'shredded mozzarella cheese',
        original: '½ cup shredded smoked provolone or mozzarella cheese',
        originalString: '½ cup shredded smoked provolone or mozzarella cheese',
        originalName: 'shredded smoked provolone or mozzarella cheese',
        amount: 0.5,
        unit: 'cup',
        meta: ['smoked', 'shredded'],
        metaInformation: ['smoked', 'shredded'],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 1040,
        aisle: 'Cheese',
        image: 'Swiss-cheese.jpg',
        consistency: 'solid',
        name: 'swiss cheese',
        original: '½ cup shredded Swiss cheese',
        originalString: '½ cup shredded Swiss cheese',
        originalName: 'shredded Swiss cheese',
        amount: 0.5,
        unit: 'cup',
        meta: ['shredded'],
        metaInformation: ['shredded'],
        measures: {
          us: {
            amount: 0.5,
            unitShort: 'cups',
            unitLong: 'cups',
          },
          metric: {
            amount: 118.294,
            unitShort: 'ml',
            unitLong: 'milliliters',
          },
        },
      },
      {
        id: 1052027,
        aisle: 'Spices and Seasonings',
        image: 'seasoning.png',
        consistency: 'solid',
        name: 'pizza seasoning',
        original: 'dried Italian or pizza seasoning',
        originalString: 'dried Italian or pizza seasoning',
        originalName: 'dried Italian or pizza seasoning',
        amount: 1,
        unit: 'serving',
        meta: ['dried', 'italian'],
        metaInformation: ['dried', 'italian'],
        measures: {
          us: {
            amount: 1,
            unitShort: 'serving',
            unitLong: 'serving',
          },
          metric: {
            amount: 1,
            unitShort: 'serving',
            unitLong: 'serving',
          },
        },
      },
    ],
    id: 492560,
    title: 'Quick and Easy St. Louis-Style Pizza',
    readyInMinutes: 27,
    servings: 8,
    sourceUrl: 'https://www.cinnamonspiceandeverythingnice.com/st-louis-style-pizza/',
    image: 'https://spoonacular.com/recipeImages/492560-556x370.jpg',
    imageType: 'jpg',
    summary:
      'Quick and Easy St. Louis-Style Pizza might be just the <b>Mediterranean</b> recipe you are searching for. One serving contains <b>281 calories</b>, <b>12g of protein</b>, and <b>12g of fat</b>. For <b>56 cents per serving</b>, you get a hor d\'oeuvre that serves 8. A mixture of pizza sauce, mozzarella cheese, substitute 2 cups flour, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Cinnamon Spice and Everything Nice. From preparation to the plate, this recipe takes roughly <b>27 minutes</b>. 48498 people have tried and liked this recipe. All things considered, we decided this recipe <b>deserves a spoonacular score of 0%</b>. This score is very bad (but still fixable). Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/st-louis-ribs-keto-style-768434">St. Louis Ribs - Keto Style</a>, <a href="https://spoonacular.com/recipes/grilled-st-louis-style-pork-steaks-612684">Grilled St. Louis-Style Pork Steaks</a>, and <a href="https://spoonacular.com/recipes/quick-and-easy-beef-pizza-107588">Quick-And-Easy Beef Pizza</a>.',
    cuisines: ['Mediterranean', 'Italian', 'European'],
    dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
    diets: [],
    occasions: [],
    winePairing: {
      pairedWines: ['sangiovese', 'barbera wine', 'shiraz'],
      pairingText:
        'Pizza works really well with Sangiovese, Barbera Wine, and Shiraz. The best wine for pizza depends on the toppings! Red sauce pizza will call for a red wine with some acidity, such as a barberan or sangiovese. Add pepperoni or sausage and you can go bolder with a syrah. One wine you could try is Torrebruna Sangiovese. It has 4.3 out of 5 stars and a bottle costs about 11 dollars.',
      productMatches: [
        {
          id: 477424,
          title: 'Torrebruna Sangiovese',
          description:
            'Opaque with a red berry rim. Aromas of cherry, dark fruits and vanilla. Silky tannins frame flavors of dried strawberries, plums, violet and red cherries. Robust and balanced. Delicious with Pasta dishes and grilled red meats.',
          price: '$10.99',
          imageUrl: 'https://spoonacular.com/productImages/477424-312x231.jpg',
          averageRating: 0.86,
          ratingCount: 17,
          score: 0.8407692307692307,
          link:
            'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ftorrebruna-sangiovese-2016%2F521703',
        },
      ],
    },
    instructions:
      'Preheat oven to 425°F and lightly grease two 12" round pizza pans, or a couple of large baking sheets.\nMix the flour, oil, and water together - the mixture will be shaggy. Use your hands to gather it together and form into a ball. Divide it in two and form each half into a disk the rounder the better.\nCover with saran wrap and allow to rest 10 minutes to make for easier rolling - skip this step if you\'re in a hurry.\nGrease a piece of parchment or wax paper about 12" square and set a circle of dough in the middle. Cover with another lightly greased piece. Use a rolling pin to roll the dough very thin - ⅛ inch or less.\nPlace the dough on the prepared pans. Top each pizza with ⅓ cup of the sauce.\nMix the cheeses together and sprinkle ½ over top of each then season with Italian herbs or pizza seasoning.\nBake the pizzas for 9 to 12 minutes or until the cheese is melted with a few golden brown spots and the edges/bottom of the crust are golden brown.\nRemove the pizzas from the oven and let set 5 minutes. Transfer to a cutting board, cut into squares and serve immediately.',
    analyzedInstructions: [
      {
        name: '',
        steps: [
          {
            number: 1,
            step:
              'Preheat oven to 425°F and lightly grease two 12" round pizza pans, or a couple of large baking sheets.',
            ingredients: [],
            equipment: [
              {
                id: 404727,
                name: 'baking sheet',
                image: 'baking-sheet.jpg',
              },
              {
                id: 404784,
                name: 'oven',
                image: 'oven.jpg',
                temperature: {
                  number: 425,
                  unit: 'Fahrenheit',
                },
              },
            ],
          },
          {
            number: 2,
            step:
              'Mix the flour, oil, and water together - the mixture will be shaggy. Use your hands to gather it together and form into a ball. Divide it in two and form each half into a disk the rounder the better.',
            ingredients: [
              {
                id: 20081,
                name: 'all purpose flour',
                image: 'flour.png',
              },
              {
                id: 14412,
                name: 'water',
                image: 'water.png',
              },
            ],
            equipment: [],
          },
          {
            number: 3,
            step:
              "Cover with saran wrap and allow to rest 10 minutes to make for easier rolling - skip this step if you're in a hurry.",
            ingredients: [],
            equipment: [],
            length: {
              number: 10,
              unit: 'minutes',
            },
          },
          {
            number: 4,
            step:
              'Grease a piece of parchment or wax paper about 12" square and set a circle of dough in the middle. Cover with another lightly greased piece. Use a rolling pin to roll the dough very thin - ⅛ inch or less.',
            ingredients: [],
            equipment: [
              {
                id: 404746,
                name: 'rolling pin',
                image: 'rolling-pin.jpg',
              },
              {
                id: 404739,
                name: 'wax paper',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/wax-paper.jpg',
              },
            ],
          },
          {
            number: 5,
            step: 'Place the dough on the prepared pans. Top each pizza with ⅓ cup of the sauce.',
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step:
              'Mix the cheeses together and sprinkle ½ over top of each then season with Italian herbs or pizza seasoning.',
            ingredients: [
              {
                id: 1052027,
                name: 'pizza seasoning',
                image: 'seasoning.png',
              },
              {
                id: 1022027,
                name: 'italian seasoning',
                image: 'dried-herbs.png',
              },
            ],
            equipment: [],
          },
          {
            number: 7,
            step:
              'Bake the pizzas for 9 to 12 minutes or until the cheese is melted with a few golden brown spots and the edges/bottom of the crust are golden brown.',
            ingredients: [
              {
                id: 1041009,
                name: 'cheese',
                image: 'cheddar-cheese.png',
              },
            ],
            equipment: [],
            length: {
              number: 9,
              unit: 'minutes',
            },
          },
          {
            number: 8,
            step: 'Remove the pizzas from the oven and let set 5 minutes.',
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: 'oven',
                image: 'oven.jpg',
              },
            ],
            length: {
              number: 5,
              unit: 'minutes',
            },
          },
          {
            number: 9,
            step: 'Transfer to a cutting board, cut into squares and serve immediately.',
            ingredients: [],
            equipment: [
              {
                id: 404716,
                name: 'cutting board',
                image: 'cutting-board.jpg',
              },
            ],
          },
        ],
      },
    ],
    originalId: null,
  },
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.RECIPE_GET_DATA_SUCCESS:
      return {
        item: action.payload,
      };
    default:
      return state;
  }
};
