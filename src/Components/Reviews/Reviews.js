import React, { useState } from 'react';
import './Reviews.css'

const Reviews = () => {
    const[review, setReview] = useState([]);
    
    return (
        <> 
            <div className='reviews'>
                <h1>Review best burger in the Town</h1>
            </div>

        </>

    );
};

export default Reviews;