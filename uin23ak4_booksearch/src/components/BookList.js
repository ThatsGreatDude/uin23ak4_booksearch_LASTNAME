import React, { useEffect, useState } from 'react';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/api/books?bibkeys=OLID:10834736-S,OLID:10834737-S,OLID:10834738-S,OLID:10834739-S,OLID:10834740-S')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="BookList">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;