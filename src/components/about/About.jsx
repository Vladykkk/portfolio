import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import Skills from "./skills/Skills";

import "./about.scss";

const variants = {
  initial: {
    x: -200,
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
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="wrapper" variants={variants}>
        <motion.div className="textContainer" variants={variants}>
          <motion.div className="biography" variants={variants}>
            <h2>Biography</h2>
            <p>
              I have started my career in web development at 2022, I was
              learning basics of layout with a lot of motivation and enthusiasm.
              After making my first{" "}
              <a
                href="https://vladykkk.github.io/my-portfolio/"
                rel="noreferrer"
                target="_blank"
              >
                portfolio
              </a>{" "}
              my friend have texted me, that he searching a developer for a
              landing portfolio page for him and I agree. That&apos;s how I earn
              my first money. After this I was developing more pet projects, and
              improves my skills, learning new technologies, discovering new
              features, and now I am learning React, and TypeScript, while
              searching a job vacancies.
            </p>
          </motion.div>
          <motion.div className="skillsContainer" variants={variants}>
            <h2>Skills</h2>
            <Skills />
          </motion.div>
          <motion.div className="certificates">
            <h2>Certificates</h2>
            <div className="certificatesImages">
              <img
                src="/best-lviv-certificate.png"
                alt="Best Lviv Hackathon certificate"
              />
              <img
                src="/best-kyiv-certificate.png"
                alt="Best Kyiv Hackathon certificate"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
