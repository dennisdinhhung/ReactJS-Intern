import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getCocktailsByName } from '../Store/ActionTyles'

function DetailCocktail() {
    const nagative = useNavigate()
    const dispatch = useDispatch()
    const detail = useSelector(state => state.Cocktail.cocktail)

    console.log("ookok...", detail);
    const slug = useParams()
    console.log(slug.id);
    const handleBack = () => {
        nagative(-1)
    }
    useEffect(() => {
        dispatch(getCocktailsByName(slug.id))
    }, [])
    return (
        <>
            <DetailCocktails >
                <div>
                    <img className='imgg' src={detail.strDrinkThumb} alt="Arerica" />
                </div>
                <CocktailInfor>
                    <div>Name:
                        <span>{detail.strDrink}</span>
                    </div>
                    <div>Glass:
                        <span>{detail.strGlass}</span>
                    </div>
                    <div>Tutorial:
                        <span>{detail.strInstructions}</span>
                    </div>

                    <button onClick={handleBack} >Go Back</button>
                </CocktailInfor>
            </DetailCocktails>
        </>
    )
}

export default DetailCocktail
const DetailCocktails = styled.div`
      max-width:380px;
      width:100%;
      height:auto;
      filter:brightness(1);
      overflow:hidden;
      border-radius:4px;
      margin-button:12px;
      use-select:none;
      margin: 50px 100px;

      &:hover {
          filter: brightness(0.8);
      }
      &:hover img {
          transform:scale(1.1)
      }
      .imgg{
          width:100%;
          height:270px;
          display:block;
          overflow:hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          border-radius:4px;
          
          img{
              width:100%;
              height:100%;
              object-fit:cover;
              transition:all 0.2s linear;
              border-radius:4px;
          }
      }
`
const CocktailInfor = styled.div`
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
