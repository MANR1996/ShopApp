import React from 'react';
import './index.css';

function Search() {
    return (
        <div className="Search">
            <svg className="Search-Icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0002 21L14.6562 14.656" stroke="#001342" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#001342" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" />
            </svg>
            <input className='Search-Input' type='search' placeholder='Search products' />
        </div>
    );
}

export default Search;