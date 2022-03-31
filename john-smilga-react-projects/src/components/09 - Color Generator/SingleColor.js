import React, { useState } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    console.log(rgb, weight, index, hexColor);

    const [alert, setAlert] = useState(false);
    const hexValue = `#${hexColor}`;

    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${rgb.join(',')})` }}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hexValue);
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{`#${hexColor}`}</p>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    )
}

export default SingleColor;
