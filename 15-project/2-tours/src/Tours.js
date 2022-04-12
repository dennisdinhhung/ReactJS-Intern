import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  
  return (
    <div>
      <div>
        <h2>our tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </div>
  )
};

export default Tours;
