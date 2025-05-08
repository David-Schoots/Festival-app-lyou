import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Startup from "./Startup";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
