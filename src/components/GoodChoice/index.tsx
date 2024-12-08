import React from "react";
import { motion } from "framer-motion";

const GoodChoice = () => {
  const letters = "Good Choice!".split("");

  return (
    <div className="text-container">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default GoodChoice;
