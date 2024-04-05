import React, { useState } from 'react';

function Search({ onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length >= 3) { 
      fetch(`https://openlibrary.org/search.json?title=james+bond+${query}`)
        .then(response => response.json())
        .then(data => {
          if (data && data.docs) {
            onSearchResults(data.docs);
          }
        })
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      onSearchResults([]); 
    }
  };

  return (
    <div className="Search">
      <input type="text" placeholder="Search for books..." value={searchQuery} onChange={handleSearch} />
    </div>
  );
};

export default Search;