import React from 'react';
import './App.css';
import Header from "./components/RecipeCards/Header.js";
import TabNav from "./components/RecipeCards/TabNav.js";
import { BrowserRouter } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <TabNav />
        <Register />
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
