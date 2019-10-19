import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login/Login";
import RecipeList from "./components/Recipes/RecipeList";
import TabNav from "./components/RecipeCards/TabNav.js";
import LaunchPage from "./components/LaunchPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={LaunchPage} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/recipes" component={RecipeList} />
        <Route />
      </BrowserRouter>
    </div>
  );
}
