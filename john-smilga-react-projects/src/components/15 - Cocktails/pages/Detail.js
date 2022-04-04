import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Detail = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCocktail = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();

            if (data.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instruction,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                } = data.drinks[0];
                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                ];
                setCocktail({
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instruction,
                    ingredients
                });
            } else {
                setCocktail(null);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCocktail();
    }, [])

    if (loading) {
        return <Loading />
    }

    if (!cocktail) {
        return (
            <h2 className="section-title">no cocktail to display</h2>
        )
    }

    return (
        <section className="section cocktail-section">
            <Link to="/" className="btn btn-primary">back to home</Link>
            <h2 className="section-title">{cocktail.name}</h2>
            <div className="drink">
                <img src={cocktail.image} alt={cocktail.name} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name: </span> {cocktail.name}
                    </p>
                    <p>
                        <span className="drink-data">category: </span> {cocktail.category}
                    </p>
                    <p>
                        <span className="drink-data">info: </span> {cocktail.info}
                    </p>
                    <p>
                        <span className="drink-data">glass: </span> {cocktail.glass}
                    </p>
                    <p>
                        <span className="drink-data">instructons: </span> {cocktail.instruction}
                    </p>
                    <p>
                        <span className="drink-data">
                            ingredients:
                        </span>
                        {
                            cocktail.ingredients.map((ingredient, index) => (
                                ingredient ? <span key={index}>{ingredient}</span> : null
                            ))
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Detail;
