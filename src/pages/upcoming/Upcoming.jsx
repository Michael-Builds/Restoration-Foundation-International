import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import Events from './components/Events';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll'

const Upcoming = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navigation />
            <section style={{ marginTop: "-40px" }}>
                <Header />
                <Events />
                <Footer />
                <ScrollToTop />
            </section>

        </>
    );
};

export default Upcoming;

