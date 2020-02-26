import React from "react";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section id="home">
      <Hero />

      <Nav />
    </section>

    <section id="about" className="content-section container">
      <SectionHeading text="About" animationDirection="Left" />
      <div className="flex flex-row" >
        <div className="hex-wrapper">
          <div className="hexagon"></div>
        </div>
        <div className="hex-wrapper">
          <div className="hexagon"></div>
        </div>
      </div>
    </section>
  </>
);

export default Home;
