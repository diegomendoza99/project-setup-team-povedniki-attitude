import React from 'react';
import {Link} from 'react-router-dom'



function Cocktail_Item({name, matchScore, image, description, ingredients}){

    return(
        <Link to={{
            pathname: "/drinkrecipe",
            state: {
                name,
                matchScore,
                image,
                description,
                ingredients
                }
            }}>
        <div className="Cocktail_Item">
            <h3 className="name">{name}</h3>
            <h4 className = "matchScore">Match Score: {matchScore}</h4>

            <div className="content">
                <img src ={image}/>
                <div className= "textContent">
                    <div className="description">Description: {description}</div>
                    <div className= "ingredients">Ingredients: {ingredients}</div>
                </div>
            </div>  
        </div>  
        </Link>
    )
}
export default Cocktail_Item;