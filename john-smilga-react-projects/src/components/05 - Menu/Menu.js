import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Items from './Items';

const setOfCategories = new Set(items.map(item => item.category));
const allCategories = ['all', ...setOfCategories];

const Menu = () => {

    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(items);

    const handleFilterClick = (category) => {
        if (category === 'all') {
            setMenuItems(items);
        } else {
            const newItems = items.filter(item => item.category === category);
            setMenuItems(newItems);
        }
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>

                <Categories categories={categories} onFilterClick={handleFilterClick} />
                <Items items={menuItems} />
            </section>
        </main>
    )
}

export default Menu;
