import React, { useEffect, useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Slider.css';

const url = 'https://course-api.com/react-tabs-project';

const Slider = () => {
    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);
    const [pauseSlide, setPauseSlide] = useState(false);

    const fetchJobs = () => {
        fetch(url)
            .then(response => response.json())
            .then(jobs => {
                setJobs(jobs);
            })
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (index < 0) {
            setIndex(jobs.length - 1);
        }
        if (index > jobs.length - 1) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        if (pauseSlide) return;
        let timer = setInterval(() => {
            setIndex(index + 1);
        }, 3000);

        return () => {
            clearInterval(timer);
        }
    }, [index, pauseSlide]);

    if (jobs.length === 0) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>reviews
                </h2>
            </div>

            <div
                className="section-center"
                onMouseEnter={() => setPauseSlide(true)}
                onMouseLeave={() => setPauseSlide(false)}
            >
                {jobs.map((job, jobIndex) => {
                    const { id, order, title, dates, duties } = job;
                    let position = 'nextSlide';
                    if (jobIndex === index) {
                        position = 'currSlide';
                    }
                    if (jobIndex === index - 1 || (index === 0 && jobIndex === jobs.length - 1)) {
                        position = 'prevSlide';
                    }
                    return (
                        <article className={position} key={id}>
                            <img
                                className="person-img"
                                src={`https://picsum.photos/id/${order}/200/300`}
                                alt={title}
                            />
                            <h4>{title}</h4>
                            <p className="title">{dates}</p>
                            <p className="text">{duties.join(' ')}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}

                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}

export default Slider;
