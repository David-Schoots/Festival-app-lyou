import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="/logo.png" alt="Logo" />
        <h1
          onClick={handleClick}
          className="text-3xl font-bold text-center mt-3 cursor-pointer hover:text-blue-500 transition"
        >
          Festival App
        </h1>
      </div>
    </motion.div>
  );
}

export default Landing;
