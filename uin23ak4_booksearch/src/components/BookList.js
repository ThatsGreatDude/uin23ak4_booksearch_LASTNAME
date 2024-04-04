import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/search.json?title=james+bond')
      .then(response => response.json())
      .then(data => {
        if (data && data.docs) {
          setBooks(data.docs);
        }
      })
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  return (
    <div className="book-list">
      <h2>Books</h2>
      <div>
        {books.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;