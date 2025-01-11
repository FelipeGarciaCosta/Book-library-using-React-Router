import React, { useState, useEffect, createContext } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/books.json")
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <BookContext.Provider value={books}>
            {children}
        </BookContext.Provider>
    )
}