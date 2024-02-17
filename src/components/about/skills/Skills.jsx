import { motion } from "framer-motion";

const Skills = () => {
  const items = [
    "React",
    "TypeScript",
    "JavaScript",
    "SCSS",
    "CSS",
    "HTML",
    "Figma",
  ];

  return (
    <div className="skills">
      {items.map((item) => (
        <motion.button key={item} whileHover={{ backgroundColor: "orange" }}>
          {item}
        </motion.button>
      ))}
    </div>
  );
};

export default Skills;
