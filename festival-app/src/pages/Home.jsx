import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FiInfo } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
      <h2 className="text-4xl text-[#247BA0] font-roboto font-bold mt-12 ml-8 mb-8">
        Festival Stages
      </h2>

      {/* Swiper Carousel */}
      {/* <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-full max-w-md flex items-center justify-center"
      > */}
      {/* Slide 1 */}
      {/*  <SwiperSlide>
          <div className="w-full px-8">
            <div className="relative w-full h-96 mb-12 rounded-3xl overflow-hidden shadow-lg"> */}
      {/* Background Image */}
      {/*  <img
                src="https://placehold.co/400x500"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
 */}
      {/* Info Icon */}
      {/*   <div className="absolute top-3 right-3 rounded-full p-1">
                <FiInfo className="text-gray-800 text-xl" />
              </div> */}

      {/* Label at the Bottom */}
      {/*   <div className="absolute bottom-4 left-4 right-4 bg-[#0A2A43] text-white rounded-xl flex items-center px-4 py-2">
                <GoLocation className="mr-2" />
                <span>Temp Artist</span>
              </div>
            </div>
          </div>
        </SwiperSlide> */}

      {/* Slide 2 */}
      {/* <SwiperSlide>
          <div className="w-full px-8">
            <div className="relative w-full h-96 mb-12 rounded-3xl overflow-hidden shadow-lg"> */}
      {/* Background Image */}
      {/*   <img
                src="https://placehold.co/400x500"
                alt="Placeholder"
                className="w-full h-full object-cover"
              /> */}

      {/* Info Icon */}
      {/*  <div className="absolute top-3 right-3 rounded-full p-1">
                <FiInfo className="text-gray-800 text-xl" />
              </div>
 */}
      {/* Label at the Bottom */}
      {/*  <div className="absolute bottom-4 left-4 right-4 bg-[#0A2A43] text-white rounded-xl flex items-center px-4 py-2">
                <GoLocation className="mr-2" />
                <span>Temp Artist</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </motion.div>
  );
}

export default Home;
