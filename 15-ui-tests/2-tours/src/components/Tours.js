import React, { useState } from "react";

function Tours({ tours, setTours }) {
  const [readMore, setReadMore] = useState(false);

  const handleRemove = (id) => {
    const deleteTour = tours.filter((tour) => {
      return !(tour.id === id);
    });
    setTours(deleteTour);
  };
  return (
    <section className="section-tour">
      <h1>Our Tours</h1>
      <div className="underline"></div>
      {tours.map((tour) => (
        <div className="tour" key={tour.id}>
          <img src={tour.image} />
          <div className="description">
            <h3>{tour.name}</h3>
            <span className="price">{tour.price}$</span>
            <p>
              {readMore ? tour.info : `${tour.info.substring(0, 200)}... `}
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read more"}
              </button>
            </p>
            <button
              className="btn-ignore"
              onClick={() => handleRemove(tour.id)}
            >
              Not interested
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Tours;
