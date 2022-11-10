import React from 'react';
import image from '../../assets/images/about/person.jpg';
import useTitle from '../../hooks/useTitle';

const About = () => {

    useTitle('About')
    return (
        <div className='mt-14'>
            <h2 className='text-4xl text-purple-600 font-serif '>About Me</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2 mb-5 mt-10">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-4xl font-semibold tracking-wider  bg-teal-accent-400 text-purple-500 rounded-full font-serif ">Hi, I am Marie!</p>
                            </div>
                            <p className="font-sans tracking-tight text-gray-500  sm:leading-none max-w-lg mb-6">
                                Watching my dreams become a reality is truly something amazing. I am the mother of 2 beautiful little girls and 1 handsome little man. In my spare time I love walking in the woods, puttering in my gardens and sitting down with a hot cup of coffee; but my true passion is photography. I love capturing life’s special moments, life goes way too fast!
                            </p>
                            <p className="text-gray-500 text-xs  md:text-lg">My studio is located just north of Emily Park in Omemee. Check out the photos below to see a peek of my newly renovated space. I am able to accommodate all of your studio wishes and have a lounging area for you to rest while you wait. I also love shooting outdoors and am willing to meet you at your favourite spot.I can’t wait to hear from you and start capturing your life’s special moments! ~Marie</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <div className="">
                            <img className="rounded" src={image} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};



export default About;