import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
