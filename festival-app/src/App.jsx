import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Startup from "./Startup";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
