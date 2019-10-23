import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/index";
import TabNav from "../RecipeCards/TabNav";
import { Form, TextArea, Button } from 'semantic-ui-react'

const initialInput = {
  title: "",
  source: "",
  notes: "",
  ingredients: [],
  instructions: [],
  tags: []
};

const AddRecipe = ({ addRecipe, history }) => {
  const [values, setValues] = useState(initialInput);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let newValues = {
      ...values,
      ingredients: values.ingredients.split(", "),
      instructions: values.instructions.split(", "),
      tags: values.tags.split(", ")
    }
    addRecipe(newValues);
    history.push('/recipes')
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
          placeholder="Ingredients"
        />
        <input
          type="text"
          onChange={handleChange}
          name="instructions"
          value={values.instructions}
          placeholder="Instructions"
        />
        <input
          type="text"
          onChange={handleChange}
          name="tags"
          value={values.tags}
          placeholder="Tags"
        />
        <Button type="submit">Add Recipe</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  { addRecipe }
)(AddRecipe);
