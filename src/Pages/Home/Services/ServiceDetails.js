import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    const { name, image, description } = useLoaderData()
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src={image}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            {name}
                        </h5>
                        <p className="mb-5 text-gray-800 text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            {/* add a review */}
            <h2 className='text-4xl text-purple-600 font-serif'>All Reviews</h2>
            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid bg-purple-100">
                    <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-semibold">Give a review about: {name}</p>
                            <p>Please login</p>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                            <input name="firstName" type="text" placeholder="First Name" className="input input-bordered w-full" />
                            <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full " />
                            <input name="email" type="text" placeholder="Your Email" className="input input-bordered w-full readOnly" />
                            <textarea name="message" className="textarea textarea-bordered p-10" placeholder="message"></textarea>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
};



export default ServiceDetails;