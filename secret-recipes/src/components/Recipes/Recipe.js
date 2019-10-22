<<<<<<< HEAD
import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./Recipes.css";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Card>
        <Image
          src="https://stonecroftvillage.com/wp-content/uploads/2017/03/plate-food.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Meta>
            <span>{recipe.source}</span>
          </Card.Meta>
          <Card.Description>{recipe.notes}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {recipe.tags.map(tag => (
            <p>{tag}</p>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
};

export default Recipe;
=======

import React from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/index';

const Recipe = ({ getRecipes, history, recipes, match }) => {
  const item = recipes.find(
    thing => `${thing.id}` === match.params.id
  );
  
  return (
    <div>
      <TabNav />
      <p>{item.title}</p>
      <button>Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getRecipes })(Recipe)

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
