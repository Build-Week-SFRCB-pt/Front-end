import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const recipeLabel = createLabel("heart", "Recipes");
const aboutLabel = createLabel("question circle", "About");
const signinLabel = createLabel("sign in", "Sign in");
<<<<<<< HEAD
const addRecipeLabel = createLabel("plus", "Add Recipe");
=======
const addRecipeLabel = createLabel("plus", "Add Recipe")

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8

const panes = [
  {

    menuItem: (
      <Menu.Item key="recipes" as={Nav} to={`/recipes`} content={recipeLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="add"
        as={Nav}
        to={`/add-recipe`}
        content={addRecipeLabel}
      />
    )
  },
  {
    menuItem: (
<<<<<<< HEAD
      <Menu.Item key="about" as={Nav} to={`/about`} content={aboutLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item key="signIn" as={Nav} to={`/login`} content={signinLabel} />
=======
      <Menu.Item
        key="about" //check this later on
        as={Nav}
        to={`/add-recipe`}
        content={addRecipeLabel}
      />
>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
    )
  },
  {
    menuItem: (
      <Menu.Item key="about" as={Nav} to={`/about`} content={aboutLabel} />
    )
  },
  {
    menuItem: (
      <Menu.Item key="signIn" as={Nav} to={`/login`} content={signinLabel} />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;
