// css imports
import "./App.css";

// pages imports
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Teckstack from "./pages/Techstack";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// components imports
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// dependencies imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="techstack" element={<Teckstack />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
