import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="Search">
      <input type="text" placeholder="Søk etter bøker..." value={searchQuery} onChange={handleSearch} />
    </div>
  );
};

export default Search;