
// Downloaded.js
import React from 'react';

export default function Downloaded({ downloadedBooks }) {
  return (
    <div>
      <h1>Downloaded Books</h1>
      {downloadedBooks.length > 0 ? (
        <ul>
          {downloadedBooks.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books downloaded yet.</p>
      )}
    </div>
  );
}
