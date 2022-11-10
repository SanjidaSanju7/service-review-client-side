import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useTitle('Services')

    useEffect(() => {
        fetch('https://service-review-server-rho.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-5 mt-10 mx-auto'>
            <div className='text-center mb-4'>
                <h2 className="text-5xl  text-purple-600 font-serif">Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to="/services"><button className="btn btn-active bg-purple-500 " >See All</button></Link>
        </div>

    );
};

export default Services;