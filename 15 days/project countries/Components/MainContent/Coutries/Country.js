import { ThemeContext } from '../../ThemeContext/Themecontext'
import styled from "styled-components"
import { useContext } from "react"
import { Link } from 'react-router-dom'




function Country({ country }) {
    const themeContext = useContext(ThemeContext)

    return (
        <Link to={`/country/${country.name}`}>
            <CountrtCard className={themeContext.theme}>
                <div className="flag">
                    <img src={country.flag} alt="Arerica" />
                </div>
                <CountryInfor>
                    <h3>{country.name}</h3>
                    <div>Population:
                        <span>{country.population}</span>
                    </div>
                    <div>Region:
                        <span>{country.region}</span>
                    </div>
                    <div>Capital:
                        <span>{country.capital}</span>
                    </div>
                </CountryInfor>
            </CountrtCard>
        </Link>
    )
}
export default Country



const CountrtCard = styled.div`
      max-width:380px;
      width:100%;
      filter:brightness(1);
      overflow:hidden;
      border-radius:4px;
      margin-button:12px;
      use-select:none;

      &:hover {
          filter: brightness(0.8);
      }
      &:hover img {
          transform:scale(1.1)
      }
      .flag{
          width:100%;
          height:190px;
          display:block;
          overflow:hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          
          img{
              width:100%;
              height:100%;
              object-fit:cover;
              transition:all 0.2s linear;
          }
      }
`
const CountryInfor = styled.div`
      padding:10px 16px;

      h3{
          margin:15px 0;
          font-size:20px;
          font-weight:bold;
          height:50px;
      }
      div{
          display:block;
          font-size:16px;
          font-weight:700;
          margin:4px 0;

          span{
              font-weight:400;

          }
      }
`
