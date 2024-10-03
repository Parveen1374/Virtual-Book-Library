import React, { useContext, useState } from 'react';
import { LibraryContext } from '../context/LibraryContext';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import '../App.css'

const Home = () => {
    const { books } = useContext(LibraryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <section className="bg-light py-5 text-center">
                <div className="container">
                    <h1 className="display-4 font-weight-bold text-dark mb-4">Hello, welcome to your Book Library!</h1>
                    <p className="lead text-muted">
                        Discover new books, manage your personal library, and keep learning something new every day!
                    </p>
                </div>
            </section>

            {/* Search Bar */}
            <section className="py-3">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center">
                        
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
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book) => (
                                <div key={book.id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img
                                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1721399437~exp=1721403037~hmac=13468da9838afa345de9f0cf9956e4e9425717c4e26fba8135e83c896af32c28&w=740"
                                            alt="banner"
                                            className="card-img-top img-fluid"
                                        />
                                        <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                                            <div>
                                                <h5 className="card-title">{book.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                                            </div>
                                            <Link
                                                to={`/book/${book.id}`}
                                                className="btn btn-light border cursor-pointer mt-3 align-self-end"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <p className="text-muted">No books found. Try searching for a different term.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;