import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navigation from './components/NavBar'
import Carousel from './components/Carousel'
import About from './components/About'
import Service from './components/Service'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <TopBar />
            <Navigation />
            <Carousel />
            <About />
            <Service />
        </>
    );
};

export default Home;