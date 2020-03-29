import React from 'react'
import style from './recipe.module.css'

const Recipie = ({title,calories,img,ingredients,desc}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={img} alt="" /> 
            <p>Calories : {Math.floor(calories)}</p>
            <ol>
                {ingredients.map(ing => (
                    <li>{ing.text}</li>
                ))}
            </ol>
            <a href={desc}>What to know how to cook it?</a>
        </div>
    )
}

export default Recipie;