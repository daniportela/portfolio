import "./Skills.scss";
import React, { useState, useEffect, Fragment } from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import MotionWrapper from "../../wrapper/MotionWrapper";

import Tippy from "@tippyjs/react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";
    const experienceQuery = "*[_type == 'experiences']";

    client.fetch(skillsQuery).then(skillData => setSkills(skillData));
    client
      .fetch(experienceQuery)
      .then(experienceData => setWorkExperience(experienceData));
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(skill => (
            <motion.div
              key={skill._id}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {workExperience.map((experience, idx) => (
            <motion.div
              key={experience.year + idx}
              className="app__skills-exp-item"
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-jobs">
                {experience.jobs.map(job => (
                  <Fragment key={experience._id}>
                    <Tippy content={job.desc} className="skills-tooltip">
                      <motion.div
                        id={job.name}
                        className="app__skills-exp-job"
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        <h4 className="bold-text">{job.name}</h4>
                        <p className="p-text">{job.company}</p>
                      </motion.div>
                    </Tippy>
                  </Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppWrapper(
  MotionWrapper(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
