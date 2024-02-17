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
        ></motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/vladyslav-rybak/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/linkedin.svg" alt="Linkedin icon" />
          </a>
          <a
            href="https://www.instagram.com/vladyslavrybak/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/instagram.svg" alt="Instagram icon" />
          </a>
          <a
            href="https://github.com/Vladykkk"
            rel="noreferrer"
            target="_blank"
          >
            <img src="/github.svg" alt="Github icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
