import React from 'react';


const ServiceCard = ({ service }) => {

    const { name, image, price, description, } = service;
    return (

        <div className="max-w-xs p-6 rounded-md  dark:bg-gray-900 dark:text-gray-50 text-left mx-auto mb-10 bg-slate-100 shadow-lg">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
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

            <button className="btn btn-wide bg-purple-500 mt-5">Details</button>

        </div>


    );
};

export default ServiceCard;