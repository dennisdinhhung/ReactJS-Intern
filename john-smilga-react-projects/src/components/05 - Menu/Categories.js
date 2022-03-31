import React, { useState } from 'react';
import './Menu.css';

const Categories = ({ categories, onFilterClick }) => {

    const [active, setActive] = useState('all');

    const handleFilterClick = (category) => {
        onFilterClick(category);
        setActive(category);
    }

    return (
        <div className="btn-container">
            {
                categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => handleFilterClick(category)}
                        className={`filter-btn ${category === active ? 'filter-btn--active' : ''}`}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories;
