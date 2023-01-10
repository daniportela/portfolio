import "./App.scss";
import React from "react";

import { Navbar, SocialMedia } from "./components";
import { Header, About, Projects, Skills, Testimonial, Footer } from "./container";

export default function App() {
  return (
    <div className="app">
      <SocialMedia />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};