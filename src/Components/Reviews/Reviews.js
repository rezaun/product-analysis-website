import React, { useEffect, useState } from 'react';
import './Reviews.css'

const Reviews = () => {
    const[review, setReview] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setReview(data));
    },[])
    
    return (
        <> 
        <h1>Review all of our Burger</h1>
            <div className='reviews'>
                {review.map(review => (
                    <div className='single-product' key={review.id}>
                        <img src={review.picture} alt={review.name} />
                        <p>Name:<b> {review.name}</b></p>
                        <p>Review: {review.review} /10</p>
                        <p>Price: ${review.price}</p>
                    </div>
                ))}

            </div>

        </>

    );
};

export default Reviews;