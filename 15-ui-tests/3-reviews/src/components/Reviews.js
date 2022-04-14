import React, { useState } from "react";
import data from "./data";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaQuoteRight,
} from "react-icons/fa";

function Reviews() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const handleMoveLeft = () => {
    setIndex((index) => {
      const moveLeft = index - 1;
      return checkNumber(moveLeft);
    });
  };

  const handleMoveRight = () => {
    setIndex((index) => {
      const moveRight = index + 1;
      return checkNumber(moveRight);
    });
  };

  const handleRandom = () => {
    const randomUser = Math.floor(Math.random() * data.length);
    if (randomUser === data[index]) {
      randomUser = index + 1;
    }
    setIndex(checkNumber(randomUser));
  };

  return (
    <div className="container">
      <div className="review">
        <img className="user-img" src={image} />
        <span className="quote">
          <FaQuoteRight />
        </span>
        <p className="user-name">{name}</p>
        <p className="user-job">{job}</p>
        <p className="user-text">{text}</p>
        <div className="switch">
          <FaAngleDoubleLeft className="switch-icon" onClick={handleMoveLeft} />
          <FaAngleDoubleRight
            className="switch-icon"
            onClick={handleMoveRight}
          />
        </div>
        <button onClick={handleRandom} className="btn-suprise">
          Suprise Me!
        </button>
      </div>
    </div>
  );
}

export default Reviews;
