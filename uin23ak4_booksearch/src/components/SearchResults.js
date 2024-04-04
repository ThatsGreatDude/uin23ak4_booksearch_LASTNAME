import React from 'react';
import BookCard from './BookCard';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="book-list">
        {results.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;