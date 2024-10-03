import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
    return (
        <div className="row">
            {books.map((book) => (
                <div className="col-md-4" key={book.id}>
                    <BookCard book={book} />
                </div>
            ))}
        </div>
    );
};

export default BookList;
