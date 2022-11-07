import React from 'react';
import image from '../../../assets/images/banner/banner.jpg';

const Banner = () => {
    return (
        <div>

            <div className="hero min-h-screen">
                <div>
                    <img src={image} alt=" " />
                </div>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">
                            Make Your All Events <span className='text-7xl'>Memorable</span>
                        </h1>
                        <p className="mb-5">The Best Way To Preserve Your Memories</p>
                        <button className="btn bg-purple-800 hover:bg-purple-500">Find More</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;