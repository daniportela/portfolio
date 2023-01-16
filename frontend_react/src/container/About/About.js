import "./About.scss";
import React, { useState, useEffect } from "react";

import AppWrapper from "../../wrapper/AppWrapper";
import MotionWrapper from "../../wrapper/MotionWrapper";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { useTranslation } from "react-i18next";

function About() {
  const [abouts, setAbouts] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    const query = "*[_type == 'abouts']";

    client.fetch(query).then(data => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
      {t('aboutHeading')}
      </h2>
      <p className="p-text about-info">Soy Lic. en Diseño Multimedia (UADE) desde el 2019. Después de varios años de trabajar en este rubro (y dado que siempre tuve gran afición por la programación), decidí hacer un cambio en mi carrera. Comencé a aprender desarrollo web pasito a pasito (ya saben como es: primero HTML, luego CSS) hasta el punto de poder lograr soluciones de negocio fullstack y combinarlas con mis conocimientos de diseño.</p>
      <br/>
      <p className="p-text about-phrase">Carismático, comprometido y con un gran apetito de seguir creciendo como profesional.</p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrapper(
  MotionWrapper(About, "app__about"),
  "sobre mí",
  "app__whitebg"
);
