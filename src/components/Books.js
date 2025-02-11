import React, { useContext, useEffect } from "react";
import { BookContext } from "../BookContext";
import { useLocation } from "react-router-dom";


export default function Books() {
    const books = useContext(BookContext);
    const query = new URLSearchParams(useLocation().search); // get the query string from the URL
    //the serach property of the location object contains the query string from the URL

    const search = query.get("search") || "";
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {filteredBooks.map((book) => (
                    <li key={book.id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
}