import React from 'react';
import { Link } from 'react-router-dom';
import { IoTrash } from 'react-icons/io5'; 
const BookCard = ({ book, onDelete }) => {
    return (
        <div className="card mb-4">
            <img src={`${process.env.PUBLIC_URL}/Banner.jpg`} alt={book.title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <Link to={`/book/${book.id}`} className="btn btn-light border">
                    View Details
                </Link>
                <button 
                    className="btn fs-5 mt-2 float-end border"
                    onClick={onDelete}
                    title="Remove from library"
                >
                    <IoTrash />
                </button>
            </div>
        </div>
    );
};

export default BookCard;
