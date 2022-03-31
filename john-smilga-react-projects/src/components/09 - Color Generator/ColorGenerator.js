import React, { useState } from 'react';
import Values from 'values.js';
import './ColorGenerator.css';
import SingleColor from './SingleColor';

const ColorGenerator = () => {

    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
            alert('Có lỗi!');
        }
    }

    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? 'error' : ''}`}
                    />
                    <button className="btn">submit</button>
                </form>
            </section>
            <section className="colors">
                {
                    list.map((item, index) => (
                        <SingleColor
                            key={index}
                            {...item}
                            index={index}
                            hexColor={item.hex}
                        />
                    ))
                }
            </section>
        </>
    )
}

export default ColorGenerator;
