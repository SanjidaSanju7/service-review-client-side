import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateReview = () => {

    const storedReview = useLoaderData();
    const [reviews, setReviews] = useState(storedReview)

    const handleUpdateReview = event => {
        event.preventDefault();
        // console.log(reviews);
        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully', {
                        position: 'top-center'
                    })
                    console.log(data);
                }
            })

    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviews };
        newReview[field] = value;
        setReviews(newReview);
    }

    return (
        <div className='mt-8'>
            <h2 className='text-4xl text-purple-600 font-serif'>Update: {storedReview.serviceName} </h2>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form onSubmit={handleUpdateReview} noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-purple-100">
                    <fieldset className="grid gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input onChange={handleInputChange} name="email" type="email" placeholder="Email" className="input input-bordered w-full" defaultValue={storedReview.email} />
                            <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered p-10" placeholder="Your Message" type="text" defaultValue={storedReview.message}></textarea>
                        </div>
                    </fieldset>
                    <button className="btn mx-auto bg-purple-500 mt-5 w-1/4">Update Review</button>
                    <ToastContainer />
                </form>
            </section>
        </div>
    );
};

export default UpdateReview;