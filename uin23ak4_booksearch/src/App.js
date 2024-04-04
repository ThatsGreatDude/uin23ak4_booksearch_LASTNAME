import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Book Search</h1>
      </header>
      <main>
        <Search />
        <BookList />
      </main>
    </div>
  );
};

export default App;