import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import waterSpace from "/water-space.png";
import panchyshynPortfolio from "/panchyshyn-portfolio.png";

import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "Water Quality Map",
    img: waterSpace,
    description:
      "Website for an analysis of the quality of drinking water and map with sources in a Lviv region.",
  },
  {
    id: 2,
    title: "Landing portfolio page",
    img: panchyshynPortfolio,
    description: "A landing portfolio page, my first commerce page.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //  offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
