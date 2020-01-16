import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipe}style= {{ marginBottom:"2rem" }}>
        <input className="form_input" type="text" name="recipeName" placeholder="Search Item"/> 
        <button class="btn btn-outline-primary">Search</button>
        </form>
);
export default Form;


