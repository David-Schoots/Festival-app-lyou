import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
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
    </motion.div>
  );
}
