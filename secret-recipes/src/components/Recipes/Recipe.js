import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Recipes.css';

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <Card>
        <Card.Content>
          <Card.Header>{recipe.title}</Card.Header>
          <Card.Meta>
            <span>{recipe.source}</span></Card.Meta>
          <Card.Description>{recipe.notes}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {recipe.tags.map(tag => (
            <p>{tag}</p>
          ))}
        </Card.Content>
      </Card>
    </div>
  )
}

export default Recipe