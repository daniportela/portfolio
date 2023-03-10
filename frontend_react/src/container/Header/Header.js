import "./Header.scss";
import React from "react";

import AppWrapper from "../../wrapper/AppWrapper";

import { motion } from "framer-motion";
import images from "../../constants/images";
import { useTranslation } from "react-i18next";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
};

function Header() {
  const { t } = useTranslation();

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">{t("headerText1")}</p>
              <h1 className="head-text">Dani</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">{t("headerText2")}</p>
            <p className="p-text">{t("headerText3")}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.logoSVG}
          alt="profile_circle"
          className="overlay_logo"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.reactIcon, images.node, images.figma].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrapper(Header, "home");
