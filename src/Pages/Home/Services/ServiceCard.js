import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const { _id, name, image, price, description, } = service;
    return (
        <PhotoProvider>
            <div className="max-w-xs p-6 rounded-md  dark:bg-gray-900 dark:text-gray-50 text-left mx-auto mb-10 bg-purple-50 shadow-lg">

                <PhotoView src={image} ><img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /></PhotoView>

                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">
                        {name}
                    </h2>
                </div>
                <p className="dark:text-gray-100 font-semibold" >Price: ${price}</p>
                <p className="dark:text-gray-100">
                    {
                        description.length > 100 ?
                            <span>{description.slice(0, 100) + '...'}</span>
                            :
                            { description }
                    }
                </p>

                <Link to={`/services/${_id}`}>
                    <button className="btn btn-wide bg-purple-500 mt-5">View Details</button>
                </Link>

            </div>
        </PhotoProvider >
    );
};

export default ServiceCard;