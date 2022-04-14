import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Cocktails.css'

function Cocktails({ item }) {
    const nagtive = useNavigate()
    const handleMove = () => {
        nagtive(`/${item.id}`)
    }
    return (
        <div className='container-box'>
            <div className='img-container'>
                <img
                    className='img-cocktail'
                    src={item.img}
                    alt={item.name}
                />
            </div>
            <div className='description'>
                <h3>{item.name}</h3>
                <h5>{item.glass}</h5>
                <h5>{item.ingrediants}</h5>
                <button onClick={handleMove}>Details</button>
            </div>
        </div>
    )
}

export default Cocktails