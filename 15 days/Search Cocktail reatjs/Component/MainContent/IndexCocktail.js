import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getCocktails } from '../Store/ActionTyles'
import Cocktails from './Cocktails'
import styled from "styled-components"


function IndexCocktail() {
    const cocktails = useSelector(state => state.Cocktail.cocktails)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCocktails())
    }, [])

    return (
        <>
            <ContainerPane>
                {
                    cocktails.map((item, index) => {
                        return (
                            <Cocktails item={item} />
                        )
                    })
                }
            </ContainerPane>


        </>
    )
}

export default IndexCocktail

const ContainerPane = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
    padding: 4px 1px;
    margin: 10px 10px;

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