import dataList from './dataList';
import './dataslide.css'
import React from 'react'
import { useState, useEffect } from 'react';

function Render() {
    const [slideIdex, setSlideIndex] = useState(1)

    const hanldeNext = () => {
        if (slideIdex !== dataList.length) {
            setSlideIndex(slideIdex + 1)
        } else if (slideIdex === dataList.length) {
            setSlideIndex(1)
        }
    }
    const handlePrev = () => {
        if (slideIdex !== 1) {
            setSlideIndex(slideIdex - 1)
        }
        else if (slideIdex === 1) {
            setSlideIndex(dataList.length)
        }
    }
    useEffect(() => {
        let slider = setInterval(() => {
            if (slideIdex < 5) {
                setSlideIndex(slideIdex + 1);
            } else if (slideIdex === dataList.length) {
                setSlideIndex(1)
            }
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [slideIdex]);
    return (
        <>
            {dataList.map((obj, index) => {
                return (
                    <>
                        <div className={slideIdex === index + 1 ? "slide active-anim" : "slide"}>
                            <img className='imgslider' src={process.env.PUBLIC_URL + `/img/img${index + 1}.jpg`} />
                        </div>
                    </>
                )
            })}
            <div className='buttun-box'>
                <button className='btn-slide-right' onClick={hanldeNext} type="button">Next</button>
                <button className='btn-slide-left' onClick={handlePrev} type="button">Prev</button>
            </div>
        </>
    )
}
export default Render