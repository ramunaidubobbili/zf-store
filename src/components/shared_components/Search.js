import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <form className="d-flex mb-4 pb-3 border-bottom justify-content-end">
        <input className="form-control form-control-lg search-control w-50" 
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search by name" 
        autoComplete="off"
        defaultValue={search}
        type="text" aria-label="Search"/>
    </form>
  );
};

export default Search;
