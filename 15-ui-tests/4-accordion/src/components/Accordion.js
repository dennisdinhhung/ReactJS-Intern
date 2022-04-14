import React, { useState } from "react";
import data from "./data";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Accordion() {
  const [id, setId] = useState(0);
  const [isClose, setIsClose] = useState(false);
  const handleClick = (id) => {
    if (!isClose) {
      setIsClose(true);
    }
    setId(id);
  };

  return (
    <section>
      <div className="QA">Questions And Answers About Login</div>
      <div className="question-list">
        {data.map((question) => (
          <div className="question-section" key={question.id}>
            <p className="title">
              {question.title}
              <button onClick={() => handleClick(question.id)}>
                {isClose && question.id === id ? (
                  <AiOutlineMinus />
                ) : (
                  <AiOutlinePlus />
                )}
              </button>
            </p>
            {question.id === id && isClose && <p>{question.info}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Accordion;
