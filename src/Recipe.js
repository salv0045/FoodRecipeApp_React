import React from "react";
import style from './recipe.module.css';

const Recipe =({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {Math.round(calories)}</p>
            <img className={style.image}src={image} alt="Image not found" onError={(e)=>{e.target.onerror=null; e.target.src="img/test.jpeg"}}/>
        
        </div>

    );
};

export default Recipe;