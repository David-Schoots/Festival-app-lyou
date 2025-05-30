import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiInfo } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";

import { IoMdMusicalNote } from "react-icons/io";

export default function Footer() {
  const location = useLocation(); // Get the current route

  const isActive = (path) => location.pathname === path; // Check if the path matches the current route

  return (
    <div className="w-full fixed bottom-0 shadow-md flex justify-around items-center py-4 px-8 bg-white  dark:bg-black">
      {/* Home Icon */}
      <Link
        to="/home"
        className={`flex flex-col items-center ${
          isActive("/home") ? "text-red-500" : "text-gray-500"
        }`}
      >
        <AiOutlineHome className="text-3xl" />
        {isActive("/home") && (
          <div className="w-6 h-1 bg-red-600 mt-1 rounded-full"></div>
        )}
      </Link>

      {/* Location Icon */}
      <Link
        to="/pages/location"
        className={`flex flex-col items-center ${
          isActive("/pages/location") ? "text-red-500" : "text-gray-500"
        }`}
      >
        <GoLocation className="text-3xl" />
        {isActive("/pages/location") && (
          <div className="w-6 h-1 bg-red-600 mt-1 rounded-full"></div>
        )}
      </Link>

      {/* Music Icon */}
      <Link
        to="/pages/music"
        className={`flex flex-col items-center ${
          isActive("/pages/music") ? "text-red-500" : "text-gray-500"
        }`}
      >
        <IoMdMusicalNote className="text-3xl" />
        {isActive("/pages/music") && (
          <div className="w-6 h-1 bg-red-600 mt-1 rounded-full"></div>
        )}
      </Link>

      {/* Time Icon */}
      <Link
        to="/pages/timetable"
        className={`flex flex-col items-center ${
          isActive("/pages/timeTable") ? "text-red-500" : "text-gray-500"
        }`}
      >
        <MdAccessTime className="text-3xl" />
        {isActive("/pages/timetable") && (
          <div className="w-6 h-1 bg-red-600 mt-1 rounded-full"></div>
        )}
      </Link>

      {/* Info Icon */}
      <Link
        to="/pages/info"
        className={`flex flex-col items-center ${
          isActive("/pages/info") ? "text-red-500" : "text-gray-500"
        }`}
      >
        <FiInfo className="text-3xl" />
        {isActive("/pages/info") && (
          <div className="w-6 h-1 bg-red-600 mt-1 rounded-full"></div>
        )}
      </Link>
    </div>
  );
}
