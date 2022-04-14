import React, { useState } from "react";
import { MdSearch } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Search() {
    const [valueInput, setValueInput] = useState('')
    const nagative = useNavigate()

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            (valueInput !== '') ? nagative(`/search/${valueInput}`) : nagative('/')
        }
    }
    return (
        <SearchPane>
            <h3>
                Search countries:
            </h3>
            <SearchElement>
                <input type='text'
                    placeholder="Enter coutry..."
                    onChange={(e) => setValueInput(e.target.value)}
                    value={valueInput}
                    onKeyDown={handleKeyDown}
                />
                <Link to={valueInput !== '' ? `/search/${valueInput}` : '/'}>
                    <div>
                        <MdSearch className="icon" />
                    </div>
                </Link>

            </SearchElement>
        </SearchPane>
    )
}
export default Search

const SearchPane = styled.div`
    max-width:320px;
    width:100%;
    h3{
        font-size:18px;
        font-weight:600;
        text-shadow: var(--textShadow);
    }
`
const SearchElement = styled.div`
    margin-top:8px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:60%;
    height:30px;
    background:#fff;
    box-shadow: var(--boxShadow);
    border-radius:5px;
    over-flow:hidden;

    .icon{
        height:25px;
        width:25px;
        padding:2px;
        text-align:center;
        
        margin:10px 0 0 0; !important;
        box-shadow:none; !important;
        opacity:50%;
        transition: opacity 0.7 linear;
        &:hover{
            opacity:1;
            cursor:pointer;
        }
    }
    input{
        border:0;
        outline:none;
        width:100%;
        font-size:13px;
        font-weight:500;
        padding:0 0 0 10px;
    }
`