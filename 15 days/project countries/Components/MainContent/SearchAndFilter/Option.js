import styled from "styled-components";
import { useNavigate } from "react-router-dom"


function Option(props) {
    const { region } = props
    const navigate = useNavigate()

    const handleValueOption = () => {
        if (region.value !== 'ALL') {
            navigate(`/${region.value}`)
        } else {
            navigate('/')
        }
    }
    return (
        <OptionItem onClick={handleValueOption}>
            <region.icon />
            <span>{region.value}</span>
        </OptionItem>
    )
}
export default Option


const OptionItem = styled.li`
    height:30px;
    width:143px;
    display:flex;
    align-items:center;
    font-size:16px;
    font-weight:500;
    cursor:pointer;
    padding:4px 5px;
    border-radius:5px;
    &:hover{
        font-weight:bold;
        background:var(--selectedOptionItem);
    }
    span{
        margin-left: 5px;
    }
`