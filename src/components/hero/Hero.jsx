import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>VLADYSLAV RYBAK</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a href="#Portfolio">
              <motion.button variants={textVariants}>
                See The Latest Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button className="contactButton" variants={textVariants}>
                Contact Me
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="Scroll image"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="imageContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.img src="/me.jpg" alt="Hero image" />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Front-End Developer Web Designer
      </motion.div>
    </div>
  );
};

export default Hero;
