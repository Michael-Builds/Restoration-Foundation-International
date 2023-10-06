import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ToolBar from './components/ToolBar';
import Navigation from './components/NavBar'
import Carousel from './components/Carousel'

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <ToolBar />
            <Navigation />
            <Carousel />
        </>
    );
};

export default Home;