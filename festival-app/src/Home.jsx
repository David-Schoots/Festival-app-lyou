import { motion } from "framer-motion";

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
     {/* searchbar */}
    </motion.div>
  );
}

export default Home;
