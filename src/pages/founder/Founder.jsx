import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation'
import Header from './components/Header';
import About from './components/About'
import Footer from '../components/Footer';
import ScrollToTop from '../components/Scroll';
import Impact from '../components/Impacts';
import Team from '../components/Team';

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
                <About />
                <Impact />
                <Team />
                <Footer />
                <ScrollToTop />
            </section>

        </>
    );
};

export default Founder;

