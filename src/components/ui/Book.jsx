import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import Rating from './Rating'
import Price from './Price'

const Book = ({ book }) => {
    console.log(book)
    const topOfPage = () => {
        window.scroll({top: 0, behavior: 'instant'})
    }
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" onClick={topOfPage}/>
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link" onClick={topOfPage}>
          {book.title} 
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
