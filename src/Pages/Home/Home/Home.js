
import useTitle from '../../../hooks/useTitle';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner'
import HomeServices from '../HomeService/HomeServices';



const Home = () => {

    useTitle('Home');



    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;