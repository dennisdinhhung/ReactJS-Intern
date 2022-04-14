import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

function Review() {

  const [review, setReview] = useState([])

  //initilization
  useEffect(
    () => {
      setReview(reviews[0])
      console.log(reviews[0])
    },[]
  )

  const prevReview = (id) => {
    
    const newId = id - 1;

    if (newId <= 0){
      setReview(reviews[reviews.length-1])
    }
    else{
      setReview(reviews[newId-1])
    }
  }

  const nextReview = (id) => {
    const newId = id - 1;

    if (newId >= reviews.length-1){
      setReview(reviews[0])
    }
    else{
      setReview(reviews[newId+1])
    }
  }

  const randomReview = (index) => {
    
  }

  return (
    <div>
      <div>
        This is a test
      </div>

      <div className="img">
        <img src={review.image} alt="img"  width='150px'/>
      </div>

      <div className="i">
        {review.id}
      </div>

      <div className='name'>
        {review.name}
      </div>

      <div className="job">
        {review.job}
      </div>
      
      <div className="text">
        {review.text}
      </div>

      <div className="icon-prev">
        <button
          onClick={() => prevReview(review.id)}>
          <FaChevronLeft/>
        </button>
      </div>

      <div className="icon-next">
        <button 
          onClick={() => nextReview(review.id)}>
          <FaChevronRight/>
        </button>
      </div>

      <div className="random">
        <button
          onClick={() => randomReview(review.id)}>
          Surprise me!
        </button>
      </div>
    </div>
  )
}

export default Review;
