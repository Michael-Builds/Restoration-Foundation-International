import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Carousel from './components/Carousel'
import About from './components/About'
import Service from './components/Service'
import Facts from './components/Facts';
import Causes from './components/Causes';
import Donate from './components/Donate';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navigation />
            <Carousel />
            <About />
            <Service />
            <Facts />
            <Causes />
            <Donate/>
        </>
    );
};

export default Home;