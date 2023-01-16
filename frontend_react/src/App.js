import "./App.scss";
import React from "react";

import { Navbar, SocialMedia, ChangeLanguage } from "./components";
import { Header, About, Projects, Skills, Testimonial, Footer } from "./container";

export default function App() {
  return (
    <div className="app">
      <ChangeLanguage />
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