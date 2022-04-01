import { useEffect, useState } from "react";
import Follower from "./Follower";
import './Pagination.css';
import useFetch from "./useFetch";


const Pagination = () => {

    const { loading, data } = useFetch();
    const [followers, setFollowers] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [page, loading]);

    console.log(loading, data);

    const handlePrev = () => {
        setPage(prev => {
            let next = prev - 1;
            if (next < 0) {
                next = 0;
            }
            return next;
        })
    }

    const handleNext = () => {
        setPage(prev => {
            let next = prev + 1;
            if (next > data.length - 1) {
                next = data.length - 1;
            }
            return next;
        })
    }

    const handlePageClick = (index) => {
        setPage(index);
    }

    return (
        <main>
            <div className="section-title">
                <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
                <div className="underline"></div>
            </div>
            <section className="followers">
                <div className="container">
                    {
                        followers.map(follower => (
                            <Follower key={follower.id} {...follower} />
                        ))
                    }
                </div>

                {!loading && (
                    <div className="btn-container">
                        <button
                            className="prev-btn"
                            onClick={handlePrev}
                        >
                            prev
                        </button>
                        {
                            data.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageClick(index)}
                                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                                >
                                    {index + 1}
                                </button>
                            ))
                        }
                        <button className="next-btn" onClick={handleNext}>
                            next
                        </button>
                    </div>
                )}
            </section>
        </main>
    )
}

export default Pagination;
