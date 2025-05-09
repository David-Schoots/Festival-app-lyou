import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Header() {
  const [theme, setTheme] = useState("light"); // Default theme
  const [lang, setLang] = useState("en");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "eng" ? "nl" : "eng"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("bg-black", "text-white");
    } else {
      document.documentElement.classList.remove("bg-black", "text-white");
    }
  }, [theme]);

  return (
    <header className="flex items-center justify-between p-4">
      <img
        src={theme === "dark" ? "/icon-black-192x192.png" : "/icon-192x192.png"}
        alt="Festival Header Logo"
        className="w-14 h-14"
      />
      <div className="flex items-center space-x-4">
        <FaMoon className="text-2xl" onClick={toggleTheme} />
        <div className="flex items-center space-x-1">
          <TbWorld className="text-2xl" onClick={toggleLang} />
          <p className="text-lg">{lang === "eng" ? "Eng" : "NL"}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
