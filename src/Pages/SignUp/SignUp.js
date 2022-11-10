import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {

    useTitle('Signup')

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="bg-white rounded shadow-2xl p-7 w-full lg:w-1/3 mx-auto text-left mt-8 mb-5">
            <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                Please Sign Up for give a review
            </h3>
            <form onSubmit={handleSubmit} >
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                    >
                        Full Name
                    </label>
                    <input
                        placeholder="Enter Your Full Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                    >
                        Photo URL
                    </label>
                    <input
                        placeholder="PhotoURL"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="photoURL"
                        name="photoURL"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                    >
                        Email
                    </label>
                    <input
                        placeholder="Your Email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                    >
                        Password
                    </label>
                    <input
                        placeholder="Your Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                    />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <p className="text-xs text-red-500 sm:text-sm text-center">
                        {error}
                    </p>
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-500"
                    >
                        Sign Up
                    </button>
                </div>


                <p className="text-xs text-gray-600 sm:text-sm text-center">
                    Already have an accout? Please
                    <Link to='/login' className="text-purple-600"> Login.</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;