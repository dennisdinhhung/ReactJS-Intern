import React from 'react';
import Tour from './Tour';

function ListTour({ tours, onRemoveTour }) {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map((tour) => (
                        <Tour key={tour.id} {...tour} onRemoveTour={onRemoveTour} />
                    ))
                }
            </div>
        </section>
    );
}

export default ListTour;