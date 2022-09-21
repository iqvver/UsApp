import React from "react";

const Search = () => {
  return (
    <div className="container">
      <div className="search">
        <div className="search__title">Поиск</div>
        <div className="search__input">
          <input name="search" id="search" type="text" />
        </div>
        <div className="search__tabs"></div>
      </div>
    </div>
  );
};

export default Search;
