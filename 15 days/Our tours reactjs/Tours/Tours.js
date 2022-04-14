import React from 'react'
import './Tours.css'
import Loading from './loading/Loading'


function Tours(props) {
    const { ourTours, remove, getData, loading } = props


    return (
        <>
            {
                ourTours && ourTours.length > 0 ? ourTours.map((tour, index) => {
                    return (
                        <>
                            <div id='container' key={index}>
                                <div className='tour-img'>
                                    <img src={tour.image} alt={tour.name} />
                                </div>
                                <div className='tour-description'>
                                    <div className='sub-tour-description'>
                                        <div>
                                            <h3>{tour.name}</h3>
                                        </div>
                                        <div>
                                            <h4>{tour.price}</h4>
                                        </div>
                                    </div>
                                    <div className='subtwo-tour-description'>
                                        <div className='description'>
                                            <h5>{tour.info}</h5>
                                        </div>
                                        <div>
                                            <button onClick={() => remove(tour.id)} >Not intersting</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                    :
                    <div className='boxButton'>
                        <h2>No Tour Left</h2>
                        <button className='reFresh' onClick={() => getData()}>ReFresh</button>
                    </div>
            }
        </>
    )
}

export default Tours