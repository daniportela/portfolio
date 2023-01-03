import React from "react";

import { Header, About, Projects, Skills, Testimonial, Footer } from "./container";

export default function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};