import React from 'react';
import Head from 'next/head';
import "animate.css/animate.min.css"

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />

    <Nav />

    <section id="about" >
      <SectionHeading text="About" animationDirection="Left" />
    </section>
  </div>
)

export default Home
