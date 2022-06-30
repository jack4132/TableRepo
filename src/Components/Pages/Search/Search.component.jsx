import React from "react";
import "./Search.component.css";

function Search({setSearch}) {
  return (
    <div>
      <input
        type={"search"}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
        className="search"
      />
    </div>
  );
}

export default Search;
