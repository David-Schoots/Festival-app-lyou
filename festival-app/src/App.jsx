import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Startup from "./pages/Startup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pages/Info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
