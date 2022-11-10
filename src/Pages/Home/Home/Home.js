import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;