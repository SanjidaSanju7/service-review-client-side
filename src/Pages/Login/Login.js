import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="bg-white rounded shadow-2xl p-7 w-full lg:w-1/3 mx-auto text-left mt-8 mb-5">
            <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                Please login for give a review
            </h3>
            <form>
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
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                    >
                        Password
                    </label>
                    <input
                        placeholder="Your Password"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="password"
                    />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-500"
                    >
                        Login
                    </button>
                </div>
                <p className="text-xs text-center text-gray-600 sm:text-sm font-medium">
                    Social Login

                </p>
                <p className="text-xs text-gray-600 sm:text-sm text-center">
                    Don't have an account yet?
                    <Link to='/Signup' className="text-purple-600"> Sign Up.</Link>
                </p>
            </form>
        </div>

    );
};

export default Login;