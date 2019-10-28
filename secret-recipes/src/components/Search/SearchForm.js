import React, { useState } from "react";
import styled from "styled-components";
import { SEARCH } from "semantic-ui-react";

// const FormStyling = styled.form`
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

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
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
