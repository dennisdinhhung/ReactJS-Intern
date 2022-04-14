import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaChevronDown, } from 'react-icons/fa'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/Themecontext'
import Options from './Options'
import { useParams } from 'react-router-dom'

export default function Filter() {
    const themeContext = useContext(ThemeContext)
    const refSelect = useRef(null)
    const [isShowOptions, setIsShowOptions] = useState(false)
    const { regionName } = useParams()
    const [valueOption, setValueOption] = useState('All')

    const handleOptions = (e) => {

        if (refSelect.current) {
            setIsShowOptions(refSelect.current.contains(e.target))
        }
    }
    useEffect(() => {
        if (isShowOptions) {
            document.addEventListener('click', handleOptions)
            return () => {
                document.removeEventListener('click', handleOptions)
            }
        }
    }, [isShowOptions])

    useEffect(() => {
        if (regionName) {
            setValueOption(regionName)
        } else {
            setValueOption('All')
        }
    }, [regionName])

    return (
        <FilterPane>
            <h3>
                Filter by regions:
            </h3>
            <SlectedPane>
                <Selected
                    className={themeContext.theme}
                    ref={refSelect}
                    onClick={handleOptions}
                >
                    <span>{valueOption}</span>
                    <FaChevronDown />
                </Selected>
                <Options isShowOptions={isShowOptions} />
            </SlectedPane>
        </FilterPane>
    )
}

const FilterPane = styled.div`
    max-width:160px;
    width:100%;
    margin-top:5px;
    h3{
        font-size:18px;
        font-weight:600;
        text-shadow:var(--boxShadow);
    }
`

const SlectedPane = styled.div`
    width:90%;
    margin-top:10px;
    position:realtive;
    border-radius:5px;
`

const Selected = styled.div`
    padding:0 8px;
    border-radius:5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-radius:5px;
    height:30px;
    user-select:none;

    span{
        font-size:18px;
        font-weight:600;
    }
`
// const OptionPane = styled.ul`
//     width:143px;
//     margin-top:3px;
//     border-radius:4px;
//     position:absolute;
//     overflow:hidden;
//     z-index:10;
// `

// const OptionItem = styled.li`
//     height:30px;
//     width:143px;
//     display:flex;
//     align-items:center;
//     font-size:16px;
//     font-weight:500;
//     cursor:pointer;
//     padding:4px 5px;
//     border-radius:5px;
//     &:hover{
//         font-weight:bold;
//         background:var(--selectedOptionItem);
//     }
//     span{
//         margin-left: 5px;
//     }
// `
