import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function ScrollAnimText({
  children,
  enter,
  exit,
  delay = 0,
  reference,
}) {
  const variants = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        opacity: {
          delay: delay,
        },
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      exit="exit"
      variants={variants}
      whileInView="whileInView"
      viewport={{ root: reference }}
    >
      {children}
    </motion.div>
  );
}
