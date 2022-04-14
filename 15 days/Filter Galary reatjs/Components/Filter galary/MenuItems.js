import React from 'react'

function MenuItems({ item }) {
    return (
        <>
            <div className='item-container'>
                {
                    item.map((item, index) => {
                        return (
                            <>
                                <div className='item' key={index}>
                                    <div className='item-img'>
                                        <img src={item.image} alt='' />
                                    </div>
                                    <div className='item-describe'>
                                        <h3>{item.name}</h3>
                                        <h4>lorem text</h4>
                                        <h5>Price:{item.price}</h5>
                                        <button>Order Now</button>
                                        <h4>something</h4>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default MenuItems