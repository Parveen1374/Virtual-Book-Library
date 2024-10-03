import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

const BookDetails = () => {
    const { id } = useParams();
    const { books, addToLibrary, myLibrary } = useContext(LibraryContext);
    const book = books.find((book) => book.id === parseInt(id));
    const [message, setMessage] = useState(''); 

    const handleAddToLibrary = () => {
        if (!myLibrary.some((b) => b.id === book.id)) {
            addToLibrary(book);
            setMessage('Book added to your library!'); 
        } else {
            alert('This book is already in your library.');
        }

        
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="container mt-5">
            {message && (
                <div className="alert alert-info" role="alert">
                    {message}
                </div>
            )}
            {book ? (
                <div className="card shadow-lg border-0 rounded-3 p-3">
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
                                alt={book.title}
                                className="card-img img-fluid rounded-start"
                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="col-md-7 d-flex flex-column justify-content-between">
                            <div className="card-body">
                                <h1 className="card-title display-5 text-primary">{book.title}</h1>
                                <p className="card-text"><strong>Author:</strong> <span className="text-muted">{book.author}</span></p>
                                <p className="card-text"><strong>Genre:</strong> <span className="badge bg-secondary">{book.genre}</span></p>
                                <p className="card-text">
                                    <strong>Rating:</strong>
                                    <span className="text-warning ms-2">{book.rating} ⭐</span>
                                </p>
                                <p className="card-text"><strong>Description:</strong> <span className="text-muted">{book.description}</span></p>
                                <p className="card-text"><strong>Publication Year:</strong> <span className="text-muted">{book.publication_year}</span></p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center p-3">
                                <button className="btn btn-light border px-4" onClick={handleAddToLibrary}>
                                    Add to My Library
                                </button>
                                <button className="btn btn-outline-secondary px-4" onClick={() => window.history.back()}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="alert alert-danger mt-4" role="alert">
                    Book not found.
                </div>
            )}
        </div>
    );
};

export default BookDetails;
