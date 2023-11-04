import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import Services from '../components/Service';
import Causes from '../components/Causes';
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll'

const Founder = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navigation />
            <section style={{ marginTop: "-40px" }}>
                <Header />
                <Services />
                <Causes />
                <Footer />
                <ScrollToTop />
            </section>

        </>
    );
};

export default Founder;

