import styled from "styled-components"
import { GiWorld, GiEarthAsiaOceania } from 'react-icons/gi'
import { FaGlobeAfrica, FaChevronDown, FaGlobeAsia, FaGlobeAmericas, FaGlobeEurope } from 'react-icons/fa'
import { ThemeContext } from "../../ThemeContext/Themecontext"
import { useContext } from "react"
import Option from "./Option"
import { useEffect, useRef } from "react"

const RegionList = [
    { icon: GiWorld, value: 'ALL' },
    { icon: FaGlobeAfrica, value: 'Africa' },
    { icon: FaGlobeAmericas, value: 'Americas' },
    { icon: FaGlobeAsia, value: 'Asia' },
    { icon: FaGlobeEurope, value: 'Europe' },
    { icon: GiEarthAsiaOceania, value: 'Oceania' },
]

function Options({ isShowOptions }) {
    const themeContext = useContext(ThemeContext)
    const refOptions = useRef(null)
    useEffect(() => {
        const showOptions = () => {
            if (isShowOptions) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`
                refOptions.current.style.transform = 'scaleY(1)'
            } else {
                refOptions.current.style.maxHeight = `0`
                refOptions.current.style.transform = 'scaleY(0)'
            }
        }
        showOptions()
        document.addEventListener('resize', showOptions)
        return () => {
            document.removeEventListener('resize', showOptions)
        }
    }, [isShowOptions])
    return (
        <OptionPane className={themeContext.theme} ref={refOptions} >
            {
                RegionList.map((region, index) => {
                    return (
                        <Option region={region} key={index} />
                    )
                })
            }
        </OptionPane>
    )
}
export default Options


const OptionPane = styled.ul`
width:143px;
margin-top:3px;
border-radius:4px;
position:absolute;
overflow:hidden;
z-index:10;
`