import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Carousel from './components/Carousel'
import Blog from '../blog/Blog';
import About from './components/About'
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import Impact from '../components/Impacts';
import Service from './components/Service';

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
            <Impact />
            <Blog />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;