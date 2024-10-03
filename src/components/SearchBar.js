import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search by title, author, or genre..."
                value={query}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
