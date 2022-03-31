import React, { useEffect, useState } from 'react';
import './LoremIpsum.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

const LoremIpsum = () => {
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState([]);
    const [amount, setAmount] = useState(0);

    const fetchPosts = () => {
        fetch(url)
            .then((response => response.json()))
            .then(posts => {
                setPosts(posts);
            })
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleAmountChange = (e) => {
        let amountPosts = parseInt(e.target.value);
        setAmount(amountPosts);
        if (amountPosts < 0) amountPosts = 0;
        if (amountPosts > posts.length) amountPosts = posts.length;
        setShowPosts(posts.slice(0, amountPosts));
    }

    if (posts.length === 0) {
        return (
            <section className="section-center">
                <h3>Loading...</h3>
            </section>
        )
    }

    return (
        <section className="section-center">
            <h3>Tired of boring lorem ipsum?</h3>
            <form className="lorem-form">
                <label htmlFor="amount">Paragraph: </label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    onChange={e => handleAmountChange(e)}
                />
                {/* <button className="btn">Generate</button> */}
            </form>

            <article className="lorem-text">
                {
                    showPosts.map((showPosts, index) => (
                        <p key={index}>{showPosts.body}</p>
                    ))
                }
            </article>
        </section>
    )
}

export default LoremIpsum;
