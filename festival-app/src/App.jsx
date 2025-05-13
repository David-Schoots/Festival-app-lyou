import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Startup from "./pages/Startup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Location from "./pages/Location";
import Music from "./pages/Music";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages/Info" element={<Info />} />
        <Route path="/pages/Location" element={<Location />} />
        <Route path="/pages/Music" element={<Music />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
