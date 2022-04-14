import React from 'react'

function MenuButton({ filterBreakfast, categody }) {
    return (
        <>
            <div className='button-container'>
                {
                    categody.map((curCa) => {
                        return (
                            <div >
                                <button onClick={() => filterBreakfast(curCa)}>{curCa}</button>
                            </div>
                        )
                    })
                }
                {/* <div >
                    <button onClick={() => filterBreakfast('breakfast')}>Breakfast</button>
                </div>
                <div>
                    <button onClick={() => filterBreakfast('lunch')}>Lunch</button>
                </div>
                <div>
                    <button onClick={() => filterBreakfast('evening')}>Evening</button>
                </div>
                <div>
                    <button onClick={() => filterBreakfast('dinner')}>Diner</button>
                </div>
                <div>
                    <button onClick={() => filterBreakfast('All')}>All</button>
                </div> */}
            </div>
        </>
    )
}

export default MenuButton