import "./Projects.scss";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";

import AppWrapper from "../../wrapper/AppWrapper";
import MotionWrapper from "../../wrapper/MotionWrapper";

import { urlFor, client } from "../../client";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [projectsFilter, setProjectsFilter] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"]`;

    client.fetch(query).then(data => {
      setProjects(data);
      setProjectsFilter(data);
    });
  }, []);

  function handleProjectsFilter(item) {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setProjectsFilter(projects);
      } else {
        setProjectsFilter(
          projects.filter(project => project.tags.includes(item))
        );
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">
        Mi <span>portfolio</span> creativo
      </h2>
      <div className="app__work-filter">
        {["Diseño Web", "Frontend", "Fullstack", "Todo"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleProjectsFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {projectsFilter.map((project, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(project.imgUrl)} alt={project.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5
                }}
                className="app__work-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                    <AiFillEye />
                </a>

                {project.codeLink && ( 
                  <a href={project.codeLink} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  )
                }
                
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrapper(
  MotionWrapper(Projects, "app__works"),
  "portfolio",
  "app__primarybg"
);
