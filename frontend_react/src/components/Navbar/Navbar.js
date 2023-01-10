import "./Navbar.scss";
import React, { useState } from "react";

import images from "../../constants/images";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { motion } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <a className="app__navbar-logo" href="#home">
        <img src={images.logo} alt="logo" />
      </a>
      <ul className="app__navbar-links">
        {["sobre mí", "portfolio", "habilidades", "contacto"].map(item => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["soy", "portfolio", "habilidades", "contacto"].map(item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
