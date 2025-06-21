import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
      <section id="work">
        <Projects />
        <Experiences />
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </div>
  );
};

export default App;
