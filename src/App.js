import React from "react";
import dishes from "./data";
import data from "./data";

// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

function App() {
  return (
    <main>
      <section className="filters">
        <h1>Burger Place</h1>
        <h2>Filters</h2>

        <form>
          <fieldset>
            <legend>Price</legend>
            <label for="minPrice">Min Price</label>
            <input
              type="range"
              id="minPrice"
              name="minPrice"
              min="0"
              max="10"
            />
            <label for="maxPrice">Max Price</label>
            <input
              type="range"
              id="maxPrice"
              name="maxPrice"
              min="0"
              max="10"
            />
          </fieldset>
        </form>
      </section>
      <section className="dishes">
        <h2>Dishes</h2>

        <ul className="grid">
          {data.map((dish, i) => (
            <li className="card" key={i}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>£{dish.price}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
