import React, { Fragment } from "react";

const SearchBox = ({searchField, searchChange }) => {
  return (
    <Fragment className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      ></input>
    </Fragment>
  );
};

export default SearchBox;
