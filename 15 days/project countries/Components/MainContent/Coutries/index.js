import Country from "./Country"
import styled from "styled-components"
import { getCountries, getCountryByRegion, getCountriesByName } from '../../Store/Actions/contriesActions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import ScrollBar from 'react-perfect-scrollbar'
import { useParams } from 'react-router'
import Loading from "../../Loading/Loading"

function Coutries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.Countries.countries)
    const loading = useSelector(state => state.Countries.loading)
    const slug = useParams()

    console.log("name search", slug.name);

    useEffect(() => {
        if (slug.regionName)
            dispatch(getCountryByRegion(slug.regionName))
        else if (slug.name)
            dispatch(getCountriesByName(slug.name))
        else
            dispatch(getCountries())

    }, [dispatch, slug.regionName, slug.name])
    return (

        <>
            {
                loading ? <Loading /> : <ScrollBar style={{ maxHeight: '120vh', overflow: 'hidden' }}>
                    <CountriesContainer >
                        {
                            countries.map((country, index) => {
                                return (
                                    <Country country={country} key={index} />
                                )
                            })
                        }

                    </CountriesContainer>
                </ScrollBar>
            }
        </>

    )
}
export default Coutries

const CountriesContainer = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
    padding: 4px 1px;

    @media screen and (max-width: 1024px) {
        grid-template-columns:repeat(3,1fr);
        gap:13px;
      }
    @media screen and (max-width: 768px) {
        grid-template-columns:repeat(2,1fr);
        gap:11px;
      }
    @media screen and (max-width: 600px) {
        grid-template-columns:repeat(1,1fr);
        gap:9px;
      }
`

