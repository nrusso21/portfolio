import React from 'react';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Bullet from '../components/Bullet';

import Icon from '@mdi/react';
import { mdiSpeedometer, mdiMonitorCellphone, mdiLightbulbOn, mdiRocket } from '@mdi/js';

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

    <section id="about" className="content-section container bg-grey-100">
      <SectionHeading text="About" animationDirection="Left" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2">
        <Bullet 
          icon={mdiSpeedometer}
          label="Fast"
          body="Optimized load times and app performance are my first and foremost priorities."
          delay={125}
        />
        <Bullet 
          icon={mdiMonitorCellphone}
          label="Responsive"
          body="My applications are designed to work and look great on any device."
          delay={250}
        />
        <Bullet 
          icon={mdiLightbulbOn}
          label="Intuitive"
          body="I posses a keen sense for clean, intuitive UI/UX design."
          delay={375}
        />
        <Bullet 
          icon={mdiRocket}
          label="Dynamic"
          body="Even the most simple websites can be lively and engaing."
          delay={500}
        />
      </div>
    </section>
  </>
);

export default Home;
