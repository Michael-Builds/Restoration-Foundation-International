import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Founder from './pages/founder/Founder';
import Blog from './pages/blog/Blog';
import Causes from "./pages/causes/Causes";
import Upcoming from './pages/upcoming/Upcoming';
import Recent from './pages/events/Events';
import Contact from './pages/contact/Contact';
import Donate from './pages/donate/Donate';


const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

      </Routes>

    </Router>
  );
};

export default App;
