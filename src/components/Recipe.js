import React from 'react';
import { Link } from "react-router-dom";
import { HTML5_FMT } from 'moment';


const API_KEY="7ef4cd7ed52d4ed4604a33ed05e8072e";

class Recipe extends React.Component { 
    state ={ 
        activeRecipe: []
    }

    componentDidMount = async() => {
        const title = this.props.location.state.recipe;

        const req = await fetch (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
   
        const res = await req.json(); 
        this.setState({ activeRecipe: res.recipes[0] });
        console.log(this.state.activeRecipe);
    } 

    render(){
        const recipe= this.state.activeRecipe;
        return ( 
          <div className="container" >
                {this.state.activeRecipe.length !==0 &&
                <div className="active-recipe">
                <img className="active_recipe_img" src={recipe.image_url} alt={recipe.title} />  
                <h3 className="active-recipe_title"> { recipe.title } </h3>
                <h4 className="active-recipe_publisher" >
                    publisher:<span> {recipe.publisher}</span>
 
                </h4>
                
                <p className="active-recipe_website"> Website =>
                     <span> <a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
                </p>
                
                <p className="recipe_URL"> Recipe-Url : 
                     <span> <a href={ recipe.source_url} target="#">{recipe.source_url}</a> </span>
                 </p>
                
                <div>
                    <button className="active-recipe_button " class="btn btn-outline-primary">
                         <Link to="/">GO-HOME</Link>
                    </button> &ensp;&ensp;&ensp;&ensp;&ensp;

                     <button className="Social_Rank" class="btn btn-outline-warning">
                         Social-Rank : {recipe.social_rank}
                    </button>
                    
                </div>
              
              </div>
                }
          </div>
        );
    }
};

export default Recipe;  
