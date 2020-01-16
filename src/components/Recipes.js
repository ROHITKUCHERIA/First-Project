import React from 'react';

import { Link } from "react-router-dom"; 

const Recipes = props => (
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe) => {
        return  ( 
            <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
                
                <div className="recipes_box">
                    
                    <img 
                     className="recipe_box-img"
                     src= {recipe.image_url} 
                     alt={recipe.title}/>
                     
                     <div className="recipe_text">
                         <h5>{ recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                         </h5>
                         <p className="recipe_subtitle">Publisher => <span>
                            { recipe.publisher }
                         </span></p>
                    </div>
                    
                    <button className="recipe_buttons"class="btn btn-outline-warning">
                         <Link to={{ pathname:`/recipe/${recipe.recipe_id}`,
                                     state: { recipe:recipe.title } 
                                   }}
                        >View Recipe
                        </Link>

                    </button> 
                    
                </div>
            </div>
            );
        })}
        </div>
    </div>
);

export default Recipes;