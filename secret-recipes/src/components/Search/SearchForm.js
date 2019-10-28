import React, { useState } from "react";
import styled from "styled-components";
import { SEARCH } from "semantic-ui-react";

const FormStyling = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px;
`;

const InputStyling = styled.input`
  margin-right: 5px;
`;

const Search = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
    props.searchHandler(searchValue);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  // const callSearchFunction = e => {
  //   e.preventDefault();
  //   props.search(searchValue);
  //   resetInputField();
  // };

  return (
    <FormStyling className="search">
      <InputStyling
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input type="submit" value="SEARCH" />
    </FormStyling>
  );
};

export default Search;
