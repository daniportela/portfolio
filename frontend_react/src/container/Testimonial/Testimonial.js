import "./Testimonial.scss";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import AppWrapper from "../../wrapper/AppWrapper";
import MotionWrapper from "../../wrapper/MotionWrapper";

import { urlFor, client } from "../../client";

function Testimonial() {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClick(index) {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const testimonialsQuery = "*[_type == 'testimonials']";
    const brandsQuery = "*[_type == 'brands']";

    client
      .fetch(testimonialsQuery)
      .then(testimonialsData => setTestimonials(testimonialsData));
    client.fetch(brandsQuery).then(brandsData => setBrands(brandsData));
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imageUrl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map(brand => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrapper(
  MotionWrapper(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
