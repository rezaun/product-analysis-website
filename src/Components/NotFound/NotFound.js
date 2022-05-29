import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
                <h1> 
                    <span>404</span> 
                    Opps Page Not Found
                </h1>
                <button>
                    <Link to='/'>Back to Home Page</Link> 
                </button>
                
        </div>
    );
};

export default NotFound;