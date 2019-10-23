
import React from 'react';
import { Route } from 'react-router-dom';
//import './App.css';
import { BrowserRouter } from "react-router-dom";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RecipeList from './components/Recipes/RecipeList';
import PrivateRoute from './utils/PrivateRoute';
import AddRecipe from './components/Recipes/AddRecipe.js';
import Recipe from './components/Recipes/Recipe.js';
import UpdateForm from './components/Recipes/UpdateForm';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Register} />
        <main>
          <PrivateRoute exact path="/recipes" component={RecipeList} />
          <PrivateRoute exact path="/recipe/:id" component={Recipe} />
          <PrivateRoute path="/add-recipe" component={AddRecipe} />
          <PrivateRoute exact path="/recipe/:id/edit" component={UpdateForm} />
        </main>




        <Route />
      </BrowserRouter>
    </div>
  );
}

