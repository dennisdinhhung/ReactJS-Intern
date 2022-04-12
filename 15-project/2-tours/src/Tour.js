import React, { useState } from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  
  const [readMore, setReadMore] = useState(false);
  const cutInfo = info.substring(0,200) + '... ';

  return (
    <div>
      <img src={image} alt={name} width='400px'/>
      <div>
        <div className='title'>
          {name}
        </div>
        <div>
          ${price}
        </div>
        <div>
          {readMore ? info : cutInfo}
        </div>
        <button
          onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'See Less' : 'See More'}
          </button>
        <button
          onClick={() => removeTour(id)}>Not Interested</button> 
      </div>
    </div>
  )
};

export default Tour;
