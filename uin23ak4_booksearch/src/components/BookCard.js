import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name}</p>
      <p>First Publish Year: {book.first_publish_year}</p>
      <button onClick={() => window.open(`https://www.amazon.com/s?k=${book.amazon_id}`, "_blank")}>Search on Amazon</button>
    </div>
  );
}

export default BookCard;