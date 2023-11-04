import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import Main from './components/Main'
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';

const Donate = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navigation />
            <section style={{ marginTop: "-40px" }}>
                <Header />
                <Main />
                <Footer />
                <ScrollToTop />
            </section>

        </>
    );
};

export default Donate;

