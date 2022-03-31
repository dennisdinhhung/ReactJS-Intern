import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './Tabs.css';

const url = 'https://course-api.com/react-tabs-project';

const Tabs = () => {

    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchJobs = () => {
        fetch(url)
            .then(response => response.json())
            .then((jobs) => {
                setJobs(jobs);
            })
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    if (jobs.length === 0) {
        return (
            <section className="section loading">
                <h1>Loading...</h1>
            </section>
        )
    }

    const { title, dates, duties, company } = jobs[index];

    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>

            <div className="jobs-center">
                {/* btn-container */}
                <div className="btn-container">
                    {
                        jobs.map((job, jobIndex) => (
                            <button
                                key={job.id}
                                onClick={() => setIndex(jobIndex)}
                                className={`job-btn ${jobIndex === index ? 'active-btn' : ''}`}
                            >
                                {job.company}
                            </button>
                        ))
                    }
                </div>

                {/* job info */}
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {
                        duties.map((duty, dutyIndex) => (
                            <div key={dutyIndex} className="job-desc">
                                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                <p>{duty}</p>
                            </div>
                        ))
                    }
                </article>
            </div>

            <button className="btn">
                more info
            </button>
        </section>
    )

}

export default Tabs;
