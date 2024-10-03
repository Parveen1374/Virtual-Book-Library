import React, { useContext, useState } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import { IoSearchSharp } from "react-icons/io5"; 

const MyLibrary = () => {
    const { myLibrary, removeFromLibrary } = useContext(LibraryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = myLibrary.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h1 className="text-center display-4 mb-4">My Library</h1>

            <div className="input-group mb-5 w-75 mx-auto">
                <span className="input-group-text bg-light">
                    <IoSearchSharp size={24} />
                </span>
                <input
                    type="text"
                    placeholder="Search by title, author, or genre"
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                />
            </div>

            {filteredBooks.length > 0 ? (
                <div className="row g-4">
                    {filteredBooks.map((book) => (
                        <div className="col-md-6 col-lg-4" key={book.id}>
                            <div className="card h-100 shadow-sm rounded">
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg" 
                                    alt={book.title}
                                    className="card-img-top img-fluid rounded-top"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title font-weight-bold">{book.title}</h5>
                                    <p className="card-text text-muted">{book.author}</p>
                                    <p className="card-text"><strong>Genre:</strong> {book.genre}</p>
                                    <button
                                        className="btn btn-outline-danger mt-auto"
                                        onClick={() => removeFromLibrary(book.id)}
                                    >
                                        Remove from Library
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <p className='text-muted display-5'>No books found in your library.</p>
                </div>
            )}
        </div>
    );
};

export default MyLibrary;
