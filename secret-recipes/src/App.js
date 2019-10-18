import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header.js";
import RecipeList from "./components/RecipeList";
import TabNav from "./components/TabNav.js";
import LaunchPage from "./components/LaunchPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header />
        <TabNav /> */}
        <Route exact path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route exact path="/" component={LaunchPage} />
        <PrivateRoute exact path="/recipes" component={RecipeList} />
        <Route />
      </BrowserRouter>
    </div>
  );
}
