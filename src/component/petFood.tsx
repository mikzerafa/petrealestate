
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
            <h1>Dog Food Safety Guide</h1>
      
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
