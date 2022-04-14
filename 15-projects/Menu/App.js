import "./App.css";
import items from "./Menu/data";
import { useState } from "react";
import "./style.css";
import Categories from "./Menu/Categories";
import Menu from "./Menu/Menu";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <section className="menu-section">
      <div className="title">
        <h2>Our menu</h2>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  );
}

export default App;
