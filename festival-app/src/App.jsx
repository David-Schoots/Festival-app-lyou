import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState, useContext } from "react";

import Startup from "./pages/Startup";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import Location from "./pages/Location";
import Music from "./pages/Music";
import TimeTable from "./pages/TimeTable";

// Language context setup
const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("nl");
  const toggleLang = () => setLang((prev) => (prev === "nl" ? "en" : "nl"));
  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Startup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pages/Info" element={<Info />} />
          <Route path="/pages/Location" element={<Location />} />
          <Route path="/pages/Music" element={<Music />} />
          <Route path="/pages/timetable" element={<TimeTable />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
