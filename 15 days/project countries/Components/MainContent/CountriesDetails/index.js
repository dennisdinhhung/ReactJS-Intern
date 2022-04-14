import { useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/Themecontext'
import CountryInfor from './Countryinfor'
import { getCountryByName } from '../../Store/Actions/contriesActions'
import { useSelector } from 'react-redux'
import Loading from '../../Loading/Loading'

function CountryDetail(props) {
    const themeContext = useContext(ThemeContext)
    const slug = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const country = useSelector(state => state.Countries.country)
    const loading = useSelector(state => state.Countries.loading)


    useEffect(() => {
        dispatch(getCountryByName(slug.countryName))
    }, [slug.countryName, dispatch])
    return (
        <Wrapper>
            <div className={`goBack-btn ${themeContext.theme}`} onClick={() => navigate(-1)}>Go Back</div>
            {
                loading ? <Loading /> : <CountryContainer>
                    <div className='flagCountry'>
                        <img src={country ? country.flag : 'https://via.palcehouder.com/700x400?text=Image+Error'} alt='' />
                    </div>
                    <CountryInfor />
                </CountryContainer>
            }

        </Wrapper>
    )
}
export default CountryDetail

const Wrapper = styled.div`
    padding-top:28px;

    .goBack-btn{
        width:80px;
        display:block;
        height:28px;
        line-height:28px;
        padding: 2px 8px;
        border-radius:4px;
        font-weight:500;
        filter: brightness(0.9);
        transition:all 0.2s linear;
        &:hover{
        filter: brightness(1);
        cursor:pointer;
        font-weight:bold;
        use-select:none;
        }
    }
`
const CountryContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:30px;
    @media only screen and (min-width: 800px) {
        flex-direction:row;
        align-items:center;
    }
    
    .flagCountry{
        max-width:400px;
        width:100%;
        height:100%;
        margin-bottom:12px;
        box-shadow:var(--boxShadow);

        img{
            width:100%;
            height:100%;
        }
    }
`