import React from 'react';
//import './App.css';
import Header from "./components/RecipeCards/Header.js";
import TabNav from "./components/RecipeCards/TabNav.js";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <main>
          <Header />
          <TabNav />
        </main>
      </BrowserRouter>
    </div>
  );
}


