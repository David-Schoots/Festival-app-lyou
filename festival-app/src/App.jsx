import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/logo.png" alt="" /> {/* Logo */}
      {/* text under the logo */}
      <h1 className="text-3xl font-bold text-center mt-3">Festival App</h1>
    </div>
  );
}

export default App;
