
import React, { useState } from "react";
import '../css/FoodTable.css'; // Optional CSS for styling


const get = {
      FoodPage: () => {
        const [searchTerm, setSearchTerm] = useState<string>("");
      
        // Filter food items based on the search term
        const filteredFood = foodData.filter((food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      
        return (
          <div className="foodTablePage">
            <h1>Dog Food Safety Bank</h1>
      
            {/* Search input */}
            <input
              type="text"
              placeholder="Search for a food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
      
            {/* Food Table */}
            <table className="foodTable">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Safe for Dogs?</th>
                  <th>Recommended Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredFood.length > 0 ? (
                  filteredFood.map((food) => (
                    <tr key={food.name}>
                      <td>{food.name}</td>
                      <td>{food.safeForDogs ? "Yes" : "No"}</td>
                      <td>{food.amount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>No results found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      }
    }
interface FoodItem {
  name: string;
  safeForDogs: boolean;
  amount: string;
}

const foodData: FoodItem[] = [
  { name: "Anise", safeForDogs: false, amount: "None (can cause toxicity)" },
  { name: "Apple Cider Vinegar", safeForDogs: true, amount: "In small, diluted amounts" },
  { name: "Apricots", safeForDogs: false, amount: "None (toxic pit)" },
  { name: "Arugula", safeForDogs: true, amount: "In moderation" },
  { name: "Basil", safeForDogs: true, amount: "Small amounts, fresh or dried" },
  { name: "Beans (Kidney)", safeForDogs: false, amount: "None (toxic when raw)" },
  { name: "Beans (Lentils)", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Beans (Navy)", safeForDogs: true, amount: "Cooked, plain, small portions" },
  { name: "Beans (Pinto)", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Beans (Black)", safeForDogs: true, amount: "Cooked, plain, in moderation" },
  { name: "Beer", safeForDogs: false, amount: "None (alcohol is toxic)" },
  { name: "Beets", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Bell Peppers", safeForDogs: true, amount: "In moderation, chopped" },
  { name: "Blackberries", safeForDogs: true, amount: "In moderation" },
  { name: "Black Beans", safeForDogs: true, amount: "Cooked, plain, in moderation" },
  { name: "Brussels Sprouts", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Butter Beans", safeForDogs: true, amount: "Cooked, plain, in moderation" },
  { name: "Cactus (Prickly Pear)", safeForDogs: false, amount: "None (can cause stomach issues)" },
  { name: "Canned Beans", safeForDogs: true, amount: "In moderation, plain" },
  { name: "Caraway", safeForDogs: false, amount: "None (can be toxic)" },
  { name: "Cardamom", safeForDogs: false, amount: "None (potentially harmful)" },
  { name: "Cauliflower", safeForDogs: true, amount: "Cooked or raw, plain" },
  { name: "Cayenne Pepper", safeForDogs: false, amount: "None (can cause stomach upset)" },
  { name: "Chamomile", safeForDogs: false, amount: "None (can cause allergic reactions)" },
  { name: "Chia Seeds", safeForDogs: true, amount: "Small amounts, soaked or ground" },
  { name: "Chili", safeForDogs: false, amount: "None (too spicy)" },
  { name: "Chili Powder", safeForDogs: false, amount: "None (can cause stomach upset)" }, 
  { name: "Chives", safeForDogs: false, amount: "None (toxic to dogs)" }, { name: "Clams", safeForDogs: true, amount: "Cooked, plain, no shells" }, { name: "Cocoa Powder", safeForDogs: false, amount: "None (toxic to dogs)" }, { name: "Coffee", safeForDogs: false, amount: "None (contains caffeine)" }, { name: "Cornbread", safeForDogs: true, amount: "In moderation, plain" }, { name: "Cottage Cheese", safeForDogs: true, amount: "In moderation, low-fat" }, { name: "Crab", safeForDogs: true, amount: "Cooked, plain, no shell" }, { name: "Cream", safeForDogs: false, amount: "None (high in fat)" }, { name: "Cumin", safeForDogs: true, amount: "In moderation, small amounts" }, { name: "Curry Powder", safeForDogs: false, amount: "None (can cause digestive issues)" }, { name: "Dates", safeForDogs: true, amount: "In moderation, remove pits" }, { name: "Dill", safeForDogs: true, amount: "In moderation, fresh or dried" }, { name: "Duck", safeForDogs: true, amount: "Cooked, plain, no bones" }, { name: "Edamame", safeForDogs: true, amount: "Cooked, plain, in moderation" }, { name: "Eggplant", safeForDogs: true, amount: "Cooked, plain, in moderation" }, { name: "Fennel", safeForDogs: true, amount: "In moderation, cooked or raw" }, { name: "Flaxseeds", safeForDogs: true, amount: "Small amounts, ground or soaked" }, { name: "French Fries", safeForDogs: false, amount: "None (too high in fat and salt)" }, { name: "Ghee", safeForDogs: true, amount: "In moderation (clarified butter)" }, { name: "Goat Cheese", safeForDogs: true, amount: "In moderation, small amounts" }, { name: "Grapefruit", safeForDogs: false, amount: "None (can cause stomach upset)" }, { name: "Green Peas", safeForDogs: true, amount: "Cooked, plain" }, { name: "Halibut", safeForDogs: true, amount: "Cooked, boneless, plain" }, { name: "Hazelnuts", safeForDogs: true, amount: "In moderation, unsalted" }, { name: "Herring", safeForDogs: true, amount: "Cooked, plain, boneless" }, { name: "Hummus", safeForDogs: false, amount: "None (contains garlic and spices)" }, { name: "Jackfruit", safeForDogs: true, amount: "In moderation, cooked, plain" }, { name: "Jalapenos", safeForDogs: false, amount: "None (too spicy)" }, { name: "Jelly", safeForDogs: false, amount: "None (contains sugar or xylitol)" }, { name: "Ketchup", safeForDogs: false, amount: "None (contains sugar and salt)" }, { name: "Kidney Beans (Raw)", safeForDogs: false, amount: "None (toxic when raw)" }, { name: "Lamb", safeForDogs: true, amount: "Cooked, plain, no seasoning" }, { name: "Lasagna", safeForDogs: false, amount: "None (too rich, contains garlic/onion)" }, { name: "Lavender", safeForDogs: true, amount: "Small amounts, dried or fresh" }, { name: "Leeks", safeForDogs: false, amount: "None (toxic to dogs)" }, { name: "Lentils", safeForDogs: true, amount: "Cooked, plain" }, { name: "Lettuce", safeForDogs: true, amount: "In moderation, chopped" }, { name: "Lobster", safeForDogs: true, amount: "Cooked, plain, no shell" }, { name: "Margarine", safeForDogs: false, amount: "None (high in fat)" }, { name: "Maple Syrup", safeForDogs: true, amount: "In moderation, pure only" }, { name: "Marshmallows", safeForDogs: false, amount: "None (contains sugar or xylitol)" }, { name: "Mayonnaise", safeForDogs: false, amount: "None (high in fat)" }, { name: "Melon", safeForDogs: true, amount: "In moderation, no seeds" }, { name: "Mint", safeForDogs: true, amount: "Small amounts, fresh or dried" }, { name: "Mozzarella", safeForDogs: true, amount: "In moderation, low-fat" }, { name: "Mustard", safeForDogs: false, amount: "None (can cause digestive upset)" }, { name: "Nectarines", safeForDogs: true, amount: "In moderation, remove pit" }, { name: "Noodles", safeForDogs: true, amount: "Cooked, plain, in moderation" }, { name: "Nutmeg", safeForDogs: false, amount: "None (toxic to dogs)" }, { name: "Oysters", safeForDogs: true, amount: "Cooked, plain, no shell" }, { name: "Papaya", safeForDogs: true, amount: "In moderation, remove seeds" }, { name: "Parsley", safeForDogs: true, amount: "In moderation, fresh or dried" }, { name: "Parsnips", safeForDogs: true, amount: "Cooked, plain" }, { name: "Peanut Oil", safeForDogs: true, amount: "In moderation, unsalted" }, { name: "Pecans", safeForDogs: false, amount: "None (can cause digestive upset)" }, { name: "Peppermint", safeForDogs: true, amount: "In moderation, fresh or dried" }, { name: "Pickles", safeForDogs: false, amount: "None (too high in salt)" }, { name: "Pine Nuts", safeForDogs: true, amount: "In moderation, unsalted" }, { name: "Plums", safeForDogs: false, amount: "None (toxic pit and skin)" }, { name: "Pork Rinds", safeForDogs: false, amount: "None (too high in fat and salt)" }, { name: "Potato Chips", safeForDogs: false, amount: "None (high in fat and salt)" }, { name: "Radish", safeForDogs: true, amount: "In moderation, chopped" }, { name: "Raspberries", safeForDogs: true, amount: "In moderation" }, { name: "Rhubarb", safeForDogs: false, amount: "None (toxic leaves)" }, { name: "Ricotta Cheese", safeForDogs: true, amount: "In moderation, low-fat" }, { name: "Rosemary", safeForDogs: true, amount: "In moderation, fresh or dried" }, { name: "Saffron", safeForDogs: false, amount: "None (can be toxic)" }, { name: "Sage", safeForDogs: true, amount: "Small amounts, fresh or dried" }, { name: "Sardines", safeForDogs: true, amount: "Cooked, boneless, no seasoning" }, { name: "Sauerkraut", safeForDogs: false, amount: "None (too high in salt)" }, { name: "Sesame Seeds", safeForDogs: true, amount: "In moderation" }, { name: "Shallots", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Apple", safeForDogs: true, amount: "Small slices (remove seeds)" },
  { name: "Grapes", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Carrot", safeForDogs: true, amount: "Moderate (sliced)" },
  { name: "Chocolate", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Chicken", safeForDogs: true, amount: "Cooked, boneless, no seasoning" },
  { name: "Avocado", safeForDogs: false, amount: "None (can be harmful)" },
  { name: "Peanut Butter", safeForDogs: true, amount: "In moderation, xylitol-free" },
  { name: "Onion", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Blueberries", safeForDogs: true, amount: "In moderation (as treats)" },
  { name: "Broccoli", safeForDogs: true, amount: "Small amounts (steamed or raw)" },
  { name: "Almonds", safeForDogs: false, amount: "None (can cause digestive issues)" },
  { name: "Banana", safeForDogs: true, amount: "In moderation" },
  { name: "Bread", safeForDogs: true, amount: "Small amounts, plain" },
  { name: "Cashews", safeForDogs: true, amount: "In moderation, unsalted" },
  { name: "Cheese", safeForDogs: true, amount: "Small amounts, low-fat varieties" },
  { name: "Cherries", safeForDogs: false, amount: "None (toxic pits)" },
  { name: "Cucumber", safeForDogs: true, amount: "In moderation, sliced" },
  { name: "Eggs", safeForDogs: true, amount: "Cooked, scrambled or boiled" },
  { name: "Fish", safeForDogs: true, amount: "Cooked, boneless, no seasoning" },
  { name: "Garlic", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Honey", safeForDogs: true, amount: "In moderation (treat)" },
  { name: "Ice Cream", safeForDogs: false, amount: "None (lactose intolerance)" },
  { name: "Kale", safeForDogs: true, amount: "In moderation (steamed)" },
  { name: "Lemon", safeForDogs: false, amount: "None (can cause stomach upset)" },
  { name: "Mango", safeForDogs: true, amount: "In moderation, remove pit" },
  { name: "Milk", safeForDogs: true, amount: "Small amounts (lactose intolerance risk)" },
  { name: "Mushrooms", safeForDogs: false, amount: "None (wild varieties are toxic)" },
  { name: "Oatmeal", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Orange", safeForDogs: true, amount: "In moderation, no peel" },
  { name: "Peaches", safeForDogs: true, amount: "In moderation, remove pit" },
  { name: "Pineapple", safeForDogs: true, amount: "In moderation, fresh only" },
  { name: "Pistachios", safeForDogs: false, amount: "None (can cause digestive issues)" },
  { name: "Pomegranate", safeForDogs: false, amount: "None (can cause stomach upset)" },
  { name: "Popcorn", safeForDogs: true, amount: "Plain, air-popped, no salt or butter" },
  { name: "Potato (Raw)", safeForDogs: false, amount: "None (toxic when raw)" },
  { name: "Pumpkin", safeForDogs: true, amount: "Cooked, plain, no spices" },
  { name: "Quinoa", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Raisins", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Rice", safeForDogs: true, amount: "Cooked, plain (brown or white)" },
  { name: "Salmon", safeForDogs: true, amount: "Cooked, boneless, no seasoning" },
  { name: "Spinach", safeForDogs: true, amount: "In moderation (steamed)" },
  { name: "Steak", safeForDogs: true, amount: "Cooked, plain, no seasoning" },
  { name: "Strawberries", safeForDogs: true, amount: "In moderation, fresh" },
  { name: "Sweet Potato", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Tomato", safeForDogs: true, amount: "Small amounts, ripe only" },
  { name: "Turkey", safeForDogs: true, amount: "Cooked, plain, boneless" },
  { name: "Walnuts", safeForDogs: false, amount: "None (can cause digestive issues)" },
  { name: "Watermelon", safeForDogs: true, amount: "Seedless, no rind" },
  { name: "Zucchini", safeForDogs: true, amount: "Cooked or raw, plain" },
  { name: "Bacon", safeForDogs: false, amount: "None (high in fat and salt)" },
  { name: "Cabbage", safeForDogs: true, amount: "Cooked or raw, plain" },
  { name: "Cantaloupe", safeForDogs: true, amount: "In moderation, no seeds" },
  { name: "Celery", safeForDogs: true, amount: "Small amounts, chopped" },
  { name: "Corn", safeForDogs: true, amount: "Cooked, plain, off the cob" },
  { name: "Dairy Products", safeForDogs: true, amount: "Small amounts (watch for lactose intolerance)" },
  { name: "Dough (Raw)", safeForDogs: false, amount: "None (can cause stomach upset)" },
  { name: "Green Beans", safeForDogs: true, amount: "Cooked or raw, plain" },
  { name: "Hot Dogs", safeForDogs: true, amount: "Small amounts, unseasoned" },
  { name: "Macadamia Nuts", safeForDogs: false, amount: "None (toxic to dogs)" },
  { name: "Olive Oil", safeForDogs: true, amount: "In moderation" },
  { name: "Pepper", safeForDogs: true, amount: "In moderation, sweet peppers only" },
  { name: "Pork", safeForDogs: true, amount: "Cooked, plain, no seasoning" },
  { name: "Shrimp", safeForDogs: true, amount: "Cooked, plain, no seasoning" },
  { name: "Soy Sauce", safeForDogs: false, amount: "None (too high in salt)" },
  { name: "Sugar", safeForDogs: false, amount: "None (can lead to health issues)" },
  { name: "Tuna", safeForDogs: true, amount: "Cooked, plain, boneless" },
  { name: "Vanilla", safeForDogs: true, amount: "In moderation (small amounts)" },
  { name: "Yogurt", safeForDogs: true, amount: "Plain, unsweetened, no xylitol" },
  { name: "Asparagus", safeForDogs: true, amount: "In moderation (cooked)" },
  { name: "Beef", safeForDogs: true, amount: "Cooked, lean, plain" },
  { name: "Butter", safeForDogs: false, amount: "None (high in fat)" },
  { name: "Capers", safeForDogs: false, amount: "None (high in salt)" },
  { name: "Coconut", safeForDogs: true, amount: "Small amounts (fresh, unsweetened)" },
  { name: "Figs", safeForDogs: true, amount: "In moderation (fresh, no leaves)" },
  { name: "Ham", safeForDogs: true, amount: "Small amounts, plain, lean" },
  { name: "Liver", safeForDogs: true, amount: "Cooked, plain, in moderation" },
  { name: "Pasta", safeForDogs: true, amount: "Cooked, plain" },
  { name: "Pear", safeForDogs: true, amount: "In moderation, remove seeds" }
];


export default 
{
  get
}
