import React, { useEffect, useState } from 'react'

function PaginationTwo({ showPerPage, onPaginationChange, total }) {
    const [counter, setCounter] = useState(1)
    const [numberOfButton, setNumberOfButon] = useState(Math.ceil(total / showPerPage))

    useEffect(() => {
        const value = showPerPage * counter
        console.log("start value...", value - showPerPage);
        console.log("end value...", value);
        onPaginationChange(value - showPerPage, value)
    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1)
            } else {
                setCounter(counter - 1)
            }
        } else if (type === "next") {
            if (numberOfButton === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1)
            }
        }
    }
    return (
        <div className='d-flex justify-content-center'>
            {/* <button
                className='btn btn-primary'
                onClick={() => onButtonClick("prev")}
            >Previous</button>
            <button
                className='btn btn-primary'
                onClick={() => onButtonClick("next")}
            >Next</button> */}

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#" onClick={() => onButtonClick("prev")}>Previous</a></li>
                    {
                        new Array(numberOfButton).fill("").map((el, index) => {
                            return (
                                <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                                    <a class="page-link" href="#" onClick={() => setCounter(index + 1)}>{index + 1}</a>
                                </li>
                            )
                        })
                    }
                    <li class="page-item"><a class="page-link" href="#" onClick={() => onButtonClick("next")}>Next</a></li>
                </ul>
            </nav>
        </div >
    )
}

export default PaginationTwo