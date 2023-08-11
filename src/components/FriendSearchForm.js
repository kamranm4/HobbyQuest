import React, { useState } from 'react';
// import User from '../models/user';

const FriendSearchForm = () => {
    const [searchText, setSearchText] = useState('');
    // const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Perform the search using Mongoose
        // Update the searchResults state with the results
        // TODO
    };

    return (
        <div>
            <h1>Friend Search Form</h1>
            {/* Add search form and display search results here */}
            <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for a friend"
            />
            <button onClick={handleSearch}>Search</button>
            {/* Display search results here */}
        </div>
    );
};

export default FriendSearchForm;
