import React from 'react';
import image from '../../assets/images/contact/contact.jpg';
import useTitle from '../../hooks/useTitle';

const Contact = () => {

    useTitle('Contact')
    return (

        <div>
            <h2 className='text-4xl text-purple-600 font-serif'>Contact Me</h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100 mb-5">
                <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                        <p className="dark:text-gray-400 text-gray-400 font-medium text-center">marie@daxonphotography.com <br />
                            Omemee, Ontario <br />  675-313-1082</p>
                    </div>
                    <img src={image} alt="" className="mt-2 rounded" />
                </div>
                <form noValidate="" className="space-y-6 bg-purple-50 p-10 text-left rounded">
                    <div>
                        <label for="name" className="text-sm">Full name*</label>
                        <input id="name" type="text" placeholder="" className="w-full rounded dark:bg-gray-800 input input-bordered" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email*</label>
                        <input id="email" type="email" className="w-full rounded dark:bg-gray-800 input input-bordered" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Message*</label>
                        <textarea id="message" rows="3" className="w-full  rounded dark:bg-gray-800 input input-bordered"></textarea>
                    </div>
                    <button type="submit" className="w-full text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900 bg-purple-300 input input-bordered">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;