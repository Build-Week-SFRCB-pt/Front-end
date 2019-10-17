import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from "./components/RecipeCards/Header.js";
import TabNav from "./components/RecipeCards/TabNav.js";
import { BrowserRouter } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RecipeList from './components/Recipes/RecipeList';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <TabNav /> */}
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute exact path="/recipes" component={RecipeList} />
        <Route />
        <Route />
      </BrowserRouter>
    </div>
  );
}

export default App;
