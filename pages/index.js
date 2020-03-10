import React from "react";
import Head from "next/head";
import ScrollAnimation from "react-animate-on-scroll";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Bullet from "../components/Bullet";
import SkillBullet from "../components/SkillBullet";

import Icon from "@mdi/react";
import {
  mdiSpeedometer,
  mdiMonitorCellphone,
  mdiLightbulbOn,
  mdiRocket,
  mdiPencilRuler
} from "@mdi/js";

const Home = () => {
  return (
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
        <SectionHeading title="About" animationDirection="Left" />
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <Bullet
            icon={mdiSpeedometer}
            label="Fast"
            body="Optimized load times and app performance are my first and foremost priorities."
          />
          <Bullet
            icon={mdiMonitorCellphone}
            label="Responsive"
            body="My applications are designed to work and look great on any device."
            delay={333}
          />
          <Bullet
            icon={mdiLightbulbOn}
            label="Intuitive"
            body="I posses a keen sense for clean, intuitive UI/UX design."
            delay={667}
          />
          <Bullet
            icon={mdiRocket}
            label="Dynamic"
            body="Even the most simple websites can be lively and engaing."
            delay={1000}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ScrollAnimation className="my-12 md:my-0" animateIn="slideInLeft" animateOnce={true}>
            <img src="/img/hexagon-avatar.png" className="w-64 mx-auto" />
            <h1 className="text-center my-4 text-gray-700">Hello, World!</h1>
            <div className="px-20 text-center font-body text-gray-600">
              I'm a full-stack developer located in Charlotte, NC. <br /> My
              passion for crafting effecient, well-optimized applications with
              engaging and intuitive user experiences knows no bounds!
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            className="grid grid-cols-2"
            animateIn="slideInRight"
            animateOnce={true}
          >
            <SkillBullet imgSrc="/img/react-logo.svg" label="React" />
            <SkillBullet
              imgSrc="/img/javascript-logo.svg"
              label="JavaScript"
              left
            />
            <SkillBullet imgSrc="/img/html-logo.svg" label="HTML" right />
            <SkillBullet imgSrc="/img/css-logo.svg" label="CSS" />
            <SkillBullet imgSrc="/img/photoshop-logo.svg" label="Photoshop" left />
            <SkillBullet imgSrc="/img/illustrator-logo.svg" label="Illustrator" right />
            <SkillBullet imgSrc="/img/pencil-ruler.svg" label="UI/UX Design" />
            <SkillBullet imgSrc="/img/figma-logo.svg" label="Figma" left />
            <SkillBullet imgSrc="/img/node-js-logo.svg" label="Node.js" right />
            <SkillBullet imgSrc="/img/css-logo.svg" label="CSS" />
          </ScrollAnimation>
        </div>
      </section>


      <section id="portfolio" className="content-section container" >
        <SectionHeading title="Portfolio" animationDirection="Right" />
        <div className="grid grid-cols-2" >

        </div>

      </section>
    </>
  );
};

export default Home;
