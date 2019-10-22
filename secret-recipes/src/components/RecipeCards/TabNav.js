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
const addRecipeLabel = createLabel("plus", "Add Recipe");

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
