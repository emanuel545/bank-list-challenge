"use client";

import React from "react";

const SearchBar = ({ searchTerm, handleSearch, sortBanks }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    handleSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por nombre de banco"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={sortBanks}>
        {sortBanks.sorted ? "Restaurar Orden Original" : "Ordenar Alfabéticamente"}
      </button>
    </div>
  );
};

export default SearchBar;