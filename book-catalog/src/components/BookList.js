import React from "react";
import books from "../data/books";
import { Link } from "react-router-dom";
import "../App.css";

function BookList() {
  return (
    <div className="container">
      <h2>Book List</h2>

      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>

          <Link to={`/books/${book.id}`}>
            <button>Read More</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;