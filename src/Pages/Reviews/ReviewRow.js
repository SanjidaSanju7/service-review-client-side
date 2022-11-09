import React from 'react';

const ReviewRow = ({ review }) => {

    const { img, customer, serviceName, message } = review;
    return (

        <div className="card w-72 shadow-lg mx-auto py-2 bg-purple-100">
            <figure><img className='w-1/4 rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">
                    Name : {customer} <br />
                    Service : {serviceName}
                </h2>
                <p className='text-justify'>Review : {message}</p>
                <div className="card-actions justify-end">
                    <button className='btn btn-sm bg-purple-500'>Delete</button>
                    <button className='btn btn-sm bg-purple-500'>Update</button>
                </div>
            </div>
        </div>

    );
};

export default ReviewRow;