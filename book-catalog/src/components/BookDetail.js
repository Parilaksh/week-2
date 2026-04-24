import React from "react";
import { useParams } from "react-router-dom";
import books from "../data/books";
import "../App.css";
import { Link } from "react-router-dom";

function BookDetail() {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));  
  return (
    <div className="container">
      <div className="book-detail">
        <h2>{book.title}</h2>
        <img src={book.imageUrl} alt={book.title} />
        <p><b>Author:</b> {book.author}</p>
        <p>{book.description}</p>

        <Link to="/">
          <button className="back-btn">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default BookDetail;