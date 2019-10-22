<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
import React, { useState } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/index";
import TabNav from "../RecipeCards/TabNav";

<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
const initialInput = {
  title: "",
  source: "",
  notes: "",
  ingredients: [],
  instructions: [],
  tags: []
<<<<<<< HEAD
};

const AddRecipe = ({ addRecipe }) => {
  const [values, setValues] = useState(initialInput);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRecipe(values);
  };
=======
}

const AddRecipe = ({ addRecipe }) => {
  const [values, setValues] = useState(initialInput)

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    addRecipe(values)
  }

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
  return (
    <div>
      <TabNav />
      <form onSubmit={handleSubmit}>
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
        <button>Add Recipe</button>
      </form>
    </div>
<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
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
<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
