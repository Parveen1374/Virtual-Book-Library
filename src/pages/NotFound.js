import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
    return (
        <div className="container text-center mt-5 vh-100">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="text-muted">Page Not Found</h2>
            <p className="lead">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-light border mt-3">Go Back Home</Link>
        </div>
    );
};

export default NotFound;
