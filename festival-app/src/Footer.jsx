import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiInfo } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";

export default function Footer() {
  return (
    <div className="w-full fixed bottom-0 shadow-md flex justify-around items-center py-4 px-8">
      {/* Home Icon */}
      <div className="flex flex-col items-center">
        <AiOutlineHome className="text-red-500 text-3xl" />
        <div className="w-6 h-1 bg-red-500 mt-1 rounded-full"></div>
      </div>

      {/* Location Icon */}
      <div className="flex flex-col items-center">
        <GoLocation className="text-gray-500 text-3xl" />
      </div>

      <div className="flex flex-col items-center">
        <IoMdMusicalNote className="text-gray-500 text-3xl" />
      </div>

      {/* Info Icon */}
      <div className="flex flex-col items-center">
        <FiInfo className="text-gray-500 text-3xl" />
      </div>
    </div>
  );
}
