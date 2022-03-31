import React, { useEffect, useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Reviews.css';

const url = 'https://course-api.com/react-tours-project';

const Reviews = () => {

    const [index, setIndex] = useState(0);
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((tours) => {
                setTours(tours);
            })
    }, [])

    if (tours.length === 0) {
        return (
            <main>Loading...</main>
        )
    }

    const prevTour = () => {
        if (index === 0) {
            setIndex(tours.length - 1);
            return;
        }
        setIndex(index - 1);
    }

    const nextTour = () => {
        if (index === tours.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    const randomTour = () => {
        let random = Math.floor(Math.random() * tours.length);
        if (random === index) {
            nextTour();
        } else {
            setIndex(random);
        }
    }

    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our Tours</h2>
                    <div className="underline"></div>
                </div>

                <article className="review">
                    <div className="img-container">
                        <img
                            src={tours[index].image}
                            alt={tours[index].name}
                            className="person-img"
                        />
                        <span className="quote-icon">
                            <FaQuoteRight />
                        </span>
                    </div>
                    <h4 className="author">{tours[index].name}</h4>
                    <p className="job">Web Developer</p>
                    <p className="info">{tours[index].info}</p>
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevTour}>
                            <FaChevronLeft />
                        </button>
                        <button className="next-btn" onClick={nextTour}>
                            <FaChevronRight />
                        </button>
                    </div>

                    <button className="random-btn" onClick={randomTour}>
                        suprise me
                    </button>
                </article>
            </section>
        </main>

    )
}

export default Reviews;