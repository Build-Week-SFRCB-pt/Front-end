import React, { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import SearchForm from "./SearchForm.js";
import Recipes from "../Recipes/Recipes";
import TabNav from "../RecipeCards/TabNav";
import { Loader } from "semantic-ui-react";
// import styled from "styled-components";

const fuseOptions = {
  shouldSort: true,
  threshold: 0.4,
  location: 0,
  distance: 50,
  maxPatternLength: 12,
  minMatchCharLength: 1,
  keys: ["tags"]
};

const SearchTag = () => {
  const [isFetching, setFetching] = useState(true);
  const [searchRecipes, setSearchRecipes] = useState([]);

  // const axiosCall = () => {
  //   const token = localStorage.getItem("token");

  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: token
  //   };

  //   axios
  //     .get("https://lambdaschool-cookbook2.herokuapp.com/recipes", {
  //       headers: headers
  //     })
  //     .then(res => {
  //       setSearchRecipes(res.data);
  //       setFetching(false);
  //       console.log(searchRecipes);
  //     })
  //     .catch(err => {
  //       console.log("Error:", err);
  //     });
  // };

  useEffect(() => {
    const axiosCall = async () => {
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: token
      };
      const res = await axios.get(
        "https://lambdaschool-cookbook2.herokuapp.com/recipes",
        {
          headers: headers
        }
      );
      setSearchRecipes(res.data);
      setFetching(false);
    };
    axiosCall();
  }, []);

  const searchHandler = event => {
    console.log("og data ", searchRecipes);
    const fuse = new Fuse(searchRecipes, fuseOptions);

    const data = event === "" ? searchRecipes : fuse.search(event);

    setSearchRecipes(data);

    console.log(searchRecipes);
  };

  console.log(searchRecipes.recipes);

  return (
    <div>
      <TabNav />
      <SearchForm recipes={searchRecipes} searchHandler={searchHandler} />
      {isFetching ? (
        <div style={{ textAlign: "center" }}>
          Searching for food...
          <Loader active inline="centered" />
        </div>
      ) : (
        <div className="Search-Container">
          {/* {searchRecipes.recipes.map(recipe => (
            <Recipes
              searchRecipes={searchRecipes}
              title={recipe.title}
              source={recipe.source}
              notes={recipe.notes}
              tags={recipe.tags}
              key={recipe.id}
            />
          ))} */}
        </div>
      )}
    </div>
  );
};

export default SearchTag;
