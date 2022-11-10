
import React, { useEffect, useState } from 'react';
import AllReviewCard from './AllReviewCard';



const AllReviews = () => {


    const [reviewServices, setReviewServices] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-rho.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => setReviewServices(data))

    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 mx-auto'>
            {
                reviewServices.map(reviewService => <AllReviewCard
                    key={reviewService._id}
                    reviewService={reviewService}
                ></AllReviewCard>)
            }
        </div>
    )
};

export default AllReviews;