import { RiMoonFill } from 'react-icons/ri'
import { BsSunFill } from 'react-icons/bs'
import styles from './SwitchStyle.module.scss'
import { useRef, useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../ThemeContext/Themecontext'

function SwitchMode() {
    const themeContext = useContext(ThemeContext)
    const refInput = useRef()
    const refCircle = useRef()
    const reftoggleButton = useRef()
    const [isDark, setIsDark] = useState(false)

    const handleToggle = () => {
        refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked)
        themeContext.toggleTheme()
    }

    useEffect(() => {
        refInput.current.checked = isDark
    }, [isDark])

    useEffect(() => {
        const changeBackGroundButton = () => {
            if (isDark) {
                refCircle.current.style.background = '#222'
                reftoggleButton.current.style.background = '#fff'
            } else {
                refCircle.current.style.background = '#fff'
                reftoggleButton.current.style.background = 'hsl(229, 92%, 66%)'
            }
        }
        changeBackGroundButton()
        document.addEventListener('resize', changeBackGroundButton)
        return () => {
            document.removeEventListener('resize', changeBackGroundButton)
        }
    }, [isDark])
    return (
        <div className={styles.toggleButton} ref={reftoggleButton} onClick={handleToggle}>
            <input type='checkbox' className={styles.Input} ref={refInput} />
            <div className={styles.Moon} >
                {
                    (isDark ? <RiMoonFill /> : <BsSunFill />)
                }
            </div>
            <div className={styles.Circle} ref={refCircle}></div>
        </div>
    )
}
export default SwitchMode