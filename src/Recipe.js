import React from 'react'
import style from './recipe.module.css'

function Recipe({title,calories,image,ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h3>Calories:{calories}</h3>
            <img src={image} alt="Not found"/>
            <ol>
                {
                    ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recipe
