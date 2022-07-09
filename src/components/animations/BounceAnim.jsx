import * as React from "react";
import { motion } from "framer-motion";

export const BounceAnim = ({ children }) => {
  const transitionValues = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <motion.div transition={transitionValues} animate={{ y: ["20%", "-20%"] }}>
      {children}
    </motion.div>
  );
};
