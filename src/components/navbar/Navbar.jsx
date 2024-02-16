import { motion } from "framer-motion";

import Sidebar from "../sidebar/Sidebar";

import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vladyslav Rybak
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a href="#">
            <img src="/instagram.svg" alt="Instagram icon" />
          </a>
          <a href="#">
            <img src="/github.svg" alt="Github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
