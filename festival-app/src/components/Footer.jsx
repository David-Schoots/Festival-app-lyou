import { BrowserRouter as Router, Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiInfo } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";

export default function Footer() {
  return (
    <div className="w-full fixed bottom-0 shadow-md flex justify-around items-center py-4 px-8 bg-white">
      {/* Home Icon */}
      <Link to="/home" className="flex flex-col items-center">
        <AiOutlineHome className="text-red-500 text-3xl" />
        <div className="w-6 h-1 bg-red-500 mt-1 rounded-full"></div>
      </Link>

      {/* Location Icon */}
      <Link to="/location" className="flex flex-col items-center">
        <GoLocation className="text-gray-500 text-3xl" />
      </Link>

      {/* Music Icon */}
      <Link to="/music" className="flex flex-col items-center">
        <IoMdMusicalNote className="text-gray-500 text-3xl" />
      </Link>

      {/* Info Icon */}
      <Link to="./pages/Info" className="flex flex-col items-center">
        <FiInfo className="text-gray-500 text-3xl" />
      </Link>
    </div>
  );
}
