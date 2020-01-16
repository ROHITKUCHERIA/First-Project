//1 api Key = 7379a617095759050249542d9c0d98c1
//2 api Key = 7ef4cd7ed52d4ed4604a33ed05e8072e

import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from './components/Recipes';


const API_KEY="7ef4cd7ed52d4ed4604a33ed05e8072e";

class App extends Component {
  state= {
    recipes: []
  }
  getRecipe = async (e) => {

    const recipeName= e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch (`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=100`);
   
    const data = await api_call.json(); 
    this.setState({ recipes:data.recipes })
    console.log(this.state.recipes)
  } 
 
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
  }

componentDidUpdate =() => {

  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
}

render() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">FOOD 2 FORK</h1>
      </header>
      
      <Form getRecipe={this.getRecipe} />
      
      <Recipes recipes= {this.state.recipes} />
      
      </div>
    );
  }
}

export default App;
