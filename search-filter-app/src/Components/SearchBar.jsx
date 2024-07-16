import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users..."
        onChange={handleChange}
      />
      <i className="bi bi-search"></i>
    </div>
  );
}

export default SearchBar;