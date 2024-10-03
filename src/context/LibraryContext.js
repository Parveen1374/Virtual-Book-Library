import React, { createContext, useState } from 'react';
import { booksData } from '../data'; 

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
    const [myLibrary, setMyLibrary] = useState([]);

    const addToLibrary = (book) => {
        if (!myLibrary.some((b) => b.id === book.id)) {
            setMyLibrary((prev) => [...prev, book]);
        }
    };


    const removeFromLibrary = (bookId) => {
        setMyLibrary((prev) => prev.filter((book) => book.id !== bookId));
    };


    return (
        <LibraryContext.Provider value={{ books: booksData.books, myLibrary, addToLibrary, removeFromLibrary }}>
            {children}
        </LibraryContext.Provider>
    );
};
