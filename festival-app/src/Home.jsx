import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FiInfo } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function Home() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "tween",
        ease: "easeIn",
        duration: 1,
      }}
    >
      {/* Search bar for searching artist */}
      <div className="flex items-center justify-center mt-4 mb-6">
        <div className="relative w-8/12">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <CiSearch className="text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search an artist..."
            className="p-4 pl-12 border border-gray-300 rounded-4xl shadow-md w-full"
          />
        </div>
      </div>

      <h2 className="text-4xl text-[#247BA0] font-bold mt-12 ml-8 mb-8">
        Festival Stages
      </h2>

      <div className="flex justify-center">
        <div className="relative w-60 h-96 rounded-3xl overflow-hidden shadow-lg">
          {/* Achtergrondafbeelding */}
          <img
            src="https://placehold.co/400x500"
            alt="Mountains"
            className="w-full h-full object-cover"
          />

          {/* Info icoon */}
          <div className="absolute top-3 right-3  rounded-full p-1">
            <FiInfo className="text-gray-800 text-xl" />
          </div>

          {/*  label onderaan */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#0A2A43] text-white rounded-xl flex items-center px-4 py-2">
            <GoLocation className="mr-2" />
            <span>Temp Artist</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
