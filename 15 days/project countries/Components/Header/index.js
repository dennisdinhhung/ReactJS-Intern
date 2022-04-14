import styled from 'styled-components'
import SwitchMode from './SwitchMode'
import { ThemeContext } from '../ThemeContext/Themecontext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const themeContext = useContext(ThemeContext)
    console.log(themeContext.theme);
    return (
        <HeaderPane className={themeContext.theme}>
            <Link to='/'>
                <span>Where in the world?</span>
            </Link>
            <SwitchMode />
        </HeaderPane>
    )
}
export default Header

const HeaderPane = styled.div`
height: 8vh;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 40px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
z-index:10;

    span{
        font-size:24px;
        font-weight:bold;
        text-shadow:2px 4px 3px rgba(0,0,0,0.3);   
        user-select:none; 
    }
`