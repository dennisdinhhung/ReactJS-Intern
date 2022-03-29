import React, { useEffect, useState } from 'react';
import ListTour from './ListTour';
import Loading from './Loading';
import './Tours.css';

const url = 'https://course-api.com/react-tours-project';

function Tours(props) {

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const handleRemoveTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const fetchTours = () => {
        fetch(url)
            .then(response => response.json())
            .then((tours) => {
                setLoading(false);
                setTours(tours);
            })
            .catch((error) => {
                setLoading(true);
                console.log(error);
            })
    }

    useEffect(() => {
        fetchTours()
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No tours left</h2>
                    <button className="btn" onClick={fetchTours}>
                        Refresh
                    </button>
                </div>
            </main>
        )
    }

    return (
        <main>
            <ListTour tours={tours} onRemoveTour={handleRemoveTour} />
        </main>
    );
}

export default Tours;