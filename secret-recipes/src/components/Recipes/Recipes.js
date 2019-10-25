import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Recipes.css";
import styled from "styled-components";

const StyledTags = styled.p`
  background: red;
  border: 1px solid black;
  border-radius: 10px;
  width: inherit;
`;

const Recipes = ({ recipe }) => {
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
          {recipe.tags.map((tag, i) => {
            return <p key={i}>{tag}</p>;
          })}
        </Card.Content>
      </Card>
    </div>
  );
};

export default Recipes;
