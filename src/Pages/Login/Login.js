import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login');

    const { providerLogin, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();


    // google sign in

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    // handle login 
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }
                console.log(user.email);
                // jwt token
                fetch('https://service-review-server-rho.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('user-token', data.token);
                    })

                form.reset();
                setError('');
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }

    return (
        <div className="bg-white rounded shadow-2xl p-7 w-full lg:w-1/3 mx-auto text-left mt-8 mb-5">
            <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                Please login for give a review
            </h3>
            <form onSubmit={handleLogin} >
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
                        Login
                    </button>
                </div>
                <div className="mt-4 mb-4 sm:mb-4">
                    <p className="text-xs text-center text-gray-600 sm:text-sm font-medium ">
                        Social Login
                    </p>
                    <button
                        onClick={handleGoogleSignIn}
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-purple-500 mt-2"
                    >
                        <FaGoogle></FaGoogle> <p className='ml-2'>Log In with Google</p>
                    </button>
                </div>

                <p className="text-xs text-gray-600 sm:text-sm text-center">
                    Don't have an account yet?
                    <Link to='/Signup' className="text-purple-600"> Sign Up.</Link>
                </p>
            </form>
        </div>

    );
};

export default Login;