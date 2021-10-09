import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import { CSSTransition } from "react-transition-group";

const Fade = ({ children }) => {
  const animationControl = useAnimation();
  const { inView, entry, ref } = useInView();
  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.7,
      },
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          x: "100vw",
        }}
        animate={animationControl}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Fade;
