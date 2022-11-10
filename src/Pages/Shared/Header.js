import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../assets/images/header/camera.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    // 
    return (

        <div className="px-4 py-5 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 bg-purple-200">
            <div className="lg:grid-cols-3 grid-cols-2 grid items-center relative d-flex  ">
                <ul className="d-flex items-center hidden space-x-7 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <Link
                    to="/"
                    aria-label=""
                    title=""
                    className="inline-flex items-center lg:mx-auto"
                >
                    <img className='w-1/12 ml-2' src={image} alt="" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Marie Daxon Photography
                    </span>
                </Link>
                <ul className="d-flex items-center hidden ml-auto space-x-8 lg:flex">
                    <li>
                        <Link
                            to=""
                            aria-label=""
                            title=""
                            className="font-medium tracking-wide text-grey-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {
                                user?.uid ?
                                    <>
                                        {user?.displayName}
                                        <Link className='ml-2' to='/reviews'>My Reviews</Link>
                                        <Link className='ml-2' to='/addservice'>Add Service</Link>
                                        <button onClick={handleLogOut} className="btn-xs bg-purple-500 rounded">Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'> Login</Link>
                                        <Link to='/signup' className='ml-3'>Sign Up</Link>

                                    </>
                            }
                        </Link>
                    </li>
                    <li>
                        <Link
                            to=""
                            aria-label="user photo"
                            title="user photo"
                            className="font-bold tracking-widetransition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            {user?.photoURL ?
                                <img style={{ height: '30px' }}
                                    src={user?.photoURL} alt=''

                                >
                                </img>

                                : <FaUser></FaUser>
                            }
                        </Link>
                    </li>
                </ul>

                {/* mobile responsive */}
                <div className="ml-auto lg:hidden z-10">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label=""
                                            title=""
                                            className="inline-flex items-center"
                                        >
                                            <img className='w-1/12 ml-2' src={image} alt="" />
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Marie Daxon Photography
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4 bg-purple-100">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label=""
                                                title=""
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/services"
                                                aria-label=""
                                                title=""
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/blog"
                                                aria-label=""
                                                title=""
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/about"
                                                aria-label="about"
                                                title="about"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About Me
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/contact"
                                                aria-label="contact"
                                                title="contact"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Contact Me
                                            </Link>
                                        </li>
                                        <li>

                                            <Link
                                                to=""
                                                aria-label=""
                                                title=""
                                                className="font-medium tracking-wide text-grey-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                {
                                                    user?.uid ?
                                                        <>
                                                            {user?.displayName}
                                                            <Link className='ml-2' to='/reviews'>My Reviews</Link>
                                                            <Link className='ml-2' to='/addservice'>Add Service</Link>
                                                            <button onClick={handleLogOut} className="btn-xs bg-purple-500 rounded">Log out</button>
                                                        </>
                                                        :
                                                        <>
                                                            <Link to='/login'> Login</Link>
                                                            <Link to='/signup' className='ml-3'>Sign Up</Link>

                                                        </>
                                                }
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to=""
                                                aria-label="user photo"
                                                title="user photo"
                                                className="font-bold tracking-widetransition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                {user?.photoURL ?
                                                    <img style={{ height: '30px' }}
                                                        src={user?.photoURL} alt=''

                                                    >
                                                    </img>

                                                    : <FaUser></FaUser>
                                                }
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>


    );
};

export default Header;