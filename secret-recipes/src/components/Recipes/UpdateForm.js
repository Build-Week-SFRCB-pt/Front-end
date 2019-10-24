import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateRecipe, getSingleRecipe } from "../../actions/index";
import TabNav from "../RecipeCards/TabNav";
import { Form, Button } from "semantic-ui-react";

// const initialInput = {
//   title: "",
//   source: "",
//   notes: "",
//   ingredients: [],
//   instructions: [],
//   tags: []
// };

const UpdateForm = ({
  updateRecipe,
  history,
  match,
  singleRecipe,
  getSingleRecipe,
  location
}) => {
  const [values, setValues] = useState(location.state);
  console.log("values", values);
  // useEffect(() => {
  //   getSingleRecipe(match.params.id)
  // }, [match.params.id, getSingleRecipe])

  // useEffect(() => {
  //   const recipeId = match.params.id;
  //   const recipeToUpdate = singleRecipe.find(recipe => {
  //     console.log(recipe)
  //     return `${recipe.id}` === recipeId
  //   })
  //   if (recipeToUpdate === null) {
  //     // getSingleRecipe(match.params.id)
  //     setValues(recipeToUpdate)
  //   }
  // }, [match, values])

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    let newValues = {
      ...values,
      ingredients: Array.isArray(values.ingredients)
        ? values.ingredients
        : values.ingredients.split(", "),
      instructions: Array.isArray(values.instructions)
        ? values.instructions
        : values.instructions.split(", "),
      tags: Array.isArray(values.tags) ? values.tags : values.tags.split(", ")
    };
    updateRecipe(newValues);
    history.push("/recipes");
  };

  return (
    <div>
      <TabNav />
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          value={values.title}
          placeholder="Title"
        />
        <input
          type="text"
          onChange={handleChange}
          name="source"
          value={values.source}
          placeholder="Source"
        />
        <input
          type="text"
          onChange={handleChange}
          name="notes"
          value={values.notes}
          placeholder="Notes"
        />
        <input
          type="text"
          onChange={handleChange}
          name="ingredients"
          value={values.ingredients}
          placeholder="Example: Ingredient 1, Ingredient 2"
        />
        <input
          type="text"
          onChange={handleChange}
          name="instructions"
          value={values.instructions}
          placeholder="Example: Instructions 1, Instructions 2"
        />
        <input
          type="text"
          onChange={handleChange}
          name="tags"
          value={values.tags}
          placeholder="Example: Tag 1, Tag 2"
        />
        <Button type="submit">Save Recipe</Button>
      </Form>
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
  { updateRecipe, getSingleRecipe }
)(UpdateForm);
