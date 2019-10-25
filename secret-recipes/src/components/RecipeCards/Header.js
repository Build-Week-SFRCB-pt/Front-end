import React from "react";
import "semantic-ui-css/semantic.min.css";
import SearchByTag from "../SearchByTag/SearchByTag";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Secret Family Cookbook</h1>
      <SearchByTag />
    </header>
  );
}
