import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav';
import Hero from '../components/Hero';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Hero />

    <Nav />
  </div>
)

export default Home
