import React, { useEffect, useState } from 'react';
import './Accordion.css';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project';

const Accordion = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((tours) => {
                setTours(tours);
            })
    }, []);

    return (
        <main>
            <div className="container">
                <h3>Tours</h3>
                <section className="info">
                    {
                        tours.map((tour) => (
                            <Tour key={tour.id} {...tour} />
                        ))
                    }
                </section>
            </div>
        </main>
    )
}

export default Accordion;