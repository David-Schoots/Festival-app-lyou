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
      <div className="flex flex-col items-center text-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welkom op de hoi!</h1>
      </div>
    </motion.div>
  );
}

export default Home;
