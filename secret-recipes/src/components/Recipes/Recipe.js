import React, { useEffect } from "react";
import TabNav from "../RecipeCards/TabNav";
import { connect } from "react-redux";
import { Card, Image } from "semantic-ui-react";
import { getSingleRecipe, deleteRecipe } from "../../actions/index";

const Recipe = ({
  getSingleRecipe,
  deleteRecipe,
  singleRecipe,
  history,
  recipes,
  match
}) => {
  useEffect(() => {
    getSingleRecipe(match.params.id);
  }, [match.params.id, getSingleRecipe]);

  if (singleRecipe === null) {
    return <p>Loading...</p>;
  }

  const deleteFunction = e => {
    e.preventDefault();
    deleteRecipe(match.params.id);
    history.push("/recipes");
  };

  return (
    <div className="recipe-card">
      <TabNav />
      <Card>
        <Image
          src="https://stonecroftvillage.com/wp-content/uploads/2017/03/plate-food.jpg"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{singleRecipe.title}</Card.Header>
          <Card.Meta>
            <span>{singleRecipe.source}</span>
          </Card.Meta>
          <Card.Description>{singleRecipe.notes}</Card.Description>
          <Card.Description>{singleRecipe.ingredients}</Card.Description>
          <Card.Description>{singleRecipe.instructions}</Card.Description>
          <button onClick={deleteFunction}>Delete</button>
          <button
            onClick={e =>
              history.push(`/recipe/${match.params.id}/edit`, singleRecipe)
            }
          >
            Edit Recipe
          </button>
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    singleRecipe: state.singleRecipe
  };
};

export default connect(
  mapStateToProps,
  { getSingleRecipe, deleteRecipe }
)(Recipe);
