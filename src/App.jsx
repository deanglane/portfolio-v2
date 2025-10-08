// css imports
import "./App.css";

// pages imports
import Home from "./pages/Home";
import Projects from "./pages/Projects";

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
          <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
