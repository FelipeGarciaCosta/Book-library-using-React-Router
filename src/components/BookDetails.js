import React, { useContext, } from "react";
import { BookContext } from "../BookContext";
import { useParams } from 'react-router-dom';

export default function BookDetails({ }) {
    const { bookId } = useParams(); // get the bookId from the URL and reestructure it into a variable
    const books = useContext(BookContext);

    const book = books.find((b) => b.id === parseInt(bookId)); //parseInt because 3 != "3"

    if (books.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if (!book) {
        return (
            <div>
                <h1>Book not found</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>{book.title}</h1>
            <p>By {book.author}</p>
        </div>
    )
}

