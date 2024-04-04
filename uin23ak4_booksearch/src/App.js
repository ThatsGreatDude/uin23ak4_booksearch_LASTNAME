import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import BookList from './components/BookList';
import SearchResults from './components/SearchResults'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="App">
      <header>
        <h1>Book Search</h1>
        <Search onSearchResults={handleSearchResults} />
      </header>
      <main>
        {searchResults.length > 0 ? (
          <SearchResults results={searchResults} />
        ) : (
          <BookList />
        )}
      </main>
    </div>
  );
}

export default App;