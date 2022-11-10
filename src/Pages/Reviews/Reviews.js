
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {

    useTitle('My Reviews')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }

        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
                // console.log(data);
            })


    }, [user?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully', {
                            position: 'top-center'
                        })
                        const remaining = reviews.filter(rw => rw._id !== id);
                        setReviews(remaining)
                    }


                })

        }
    }

    return (

        <div>
            <h2 className="text-4xl text-center mt-4 text-purple-500 font-serif">You have {reviews.length} Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10 mx-auto'>
                {
                    reviews.map(review => <ReviewRow
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></ReviewRow>)
                }

            </div>
        </div>
    );
};

export default Reviews;