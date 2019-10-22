
import React from 'react';
import { Route } from 'react-router-dom';
//import './App.css';
import Header from "./components/RecipeCards/Header.js";
import { BrowserRouter } from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RecipeList from './components/Recipes/RecipeList';
import PrivateRoute from './utils/PrivateRoute';
import AddRecipe from './components/Recipes/AddRecipe.js';
import Recipe from './components/Recipes/Recipe.js';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <main>

          <Route exact path="/login" component={Login} />
          <Route path="/" component={Register} />
          <PrivateRoute exact path="/recipes" component={RecipeList} />
          <PrivateRoute path="/recipe/:id" component={Recipe} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route />
        </main>


    

        <Route />
      </BrowserRouter>
    </div>
  );
}

