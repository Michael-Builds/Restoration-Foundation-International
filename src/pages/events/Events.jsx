import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import Recent_Event from './components/Recent';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll'

const Recent = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navigation />
            <section style={{ marginTop: "-40px" }}>
                <Header />
                <Recent_Event />
                <Footer />
                <ScrollToTop />
            </section>

        </>
    );
};

export default Recent;

