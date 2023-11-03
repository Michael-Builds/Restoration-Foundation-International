import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css';
import Home from './pages/home/Home'
import About from "./pages/about/About";
import Founder from './pages/founder/Founder'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
    </Router>
  )
}
export default App;
