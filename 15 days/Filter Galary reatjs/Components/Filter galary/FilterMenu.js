import React, { useState } from 'react'
import './FilterGalary.css'
import Menu from './Menu'
import MenuItems from './MenuItems'
import MenuButton from './MenuButton'

function FilterMenu() {
    const [item, setItem] = useState(Menu)
    const allCategory = [...new Set(Menu.map((curCategory) => { return curCategory.category })), 'All']
    const [categody, setCategory] = useState(allCategory)
    console.log("categody,...", allCategory);

    const filterBreakfast = (value) => {
        if (value === 'All') {
            setItem(Menu)
        } else {
            const updateMenu = Menu.filter((currnMenu) =>
                currnMenu.category === value
            )
            setItem(updateMenu)
        }
    }
    return (
        <div id='container'>
            <div className='menu-title'>
                <h1>Menu</h1>
            </div>
            <MenuButton filterBreakfast={filterBreakfast} categody={categody} />
            <MenuItems item={item} />
        </div>
    )
}

export default FilterMenu