import "./App.scss";
import React from "react";

import { Navbar, NavigationDots } from "./components";
import { Header, About, Projects, Skills, Testimonial, Footer } from "./container";
import SocialMedia from "../src/components/SocialMedia";

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