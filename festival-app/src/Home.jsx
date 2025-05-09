import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";

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
        <div className="w-[50%] rounded overflow-hidden shadow-lg">
          <img src="https://placehold.co/200x200" className="w-full" alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
