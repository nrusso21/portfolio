import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ScrollAnimation from 'react-animate-on-scroll';

import {
  mdiSpeedometer,
  mdiMonitorCellphone,
  mdiLightbulbOn,
  mdiRocket,
  mdiGithubCircle,
  mdiLinkedin,
  mdiTwitter,
} from '@mdi/js';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Bullet from '../components/Bullet';
import SkillBullet from '../components/SkillBullet';
import PortfolioCard from '../components/PortfolioCard';
import ContactForm from '../components/ContactForm';
import SocialIcon from '../components/SocialIcon';

const Home = () => {
  const [viewportWidth, setViewportWidth] = useState(null);
  if (process.browser) {
    useEffect(() => setViewportWidth(document.children[0].clientWidth), [
      document.children[0].clientWidth,
    ]);
  }

  return (
    <>
      <Head>
        <title>Nick Russo Dev</title>
        <meta name="title" content="Nick Russo Dev" />
        <meta name="description" content="Nick Russo's Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nickrusso.dev/" />
        <meta property="og:title" content="Nick Russo Dev" />
        <meta
          property="og:description"
          content="Nick Russo's Development Portfolio"
        />
        <meta property="og:image" content="/thumbnail.jpg" />
        {/* TWITTER */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.nickrusso.dev/" />
        <meta property="twitter:title" content="Nick Russo Dev" />
        <meta
          property="twitter:description"
          content="Nick Russo's Development Portfolio"
        />
        <meta property="twitter:image" content="/thumbnail.jpg" />
      </Head>

      <section id="home">
        <Hero />
      </section>

      <Nav />

      <section id="about" className="content-section">
        <div className="container mx-auto">
          <SectionHeading
            title="About"
            animationDirection="Left"
            color="indigo-900"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-8 lg:mb-0">
            <Bullet
              icon={mdiSpeedometer}
              label="Fast"
              body="Optimized load times and app performance are my first and foremost priorities."
              viewportWidth={viewportWidth}
            />
            <Bullet
              icon={mdiMonitorCellphone}
              label="Responsive"
              body="My applications are designed to work and look great on any device."
              delay={333}
              viewportWidth={viewportWidth}
            />
            <Bullet
              icon={mdiLightbulbOn}
              label="Intuitive"
              body="I posses a keen sense for clean, intuitive UI/UX design."
              delay={667}
              viewportWidth={viewportWidth}
            />
            <Bullet
              icon={mdiRocket}
              label="Dynamic"
              body="Even the most simple websites can be lively and engaing."
              delay={1000}
              viewportWidth={viewportWidth}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <ScrollAnimation
              className="my-12 md:my-0"
              animateIn="fadeInLeft"
              animateOnce={true}
            >
              <img
                src="/img/hexagon-avatar.png"
                className="w-64 md:w-48 lg:w-64 mx-auto"
              />
              <h1 className="text-center my-4 text-gray-700">Hello, World!</h1>
              <div className="px-20 text-center font-body text-gray-600">
                I'm a full-stack developer located in Charlotte, NC. <br /> My
                passion for crafting efficient, well-optimized applications with
                engaging and intuitive user experiences knows no bounds!
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
              <SkillBullet
                imgSrc="/img/skills/react-logo.svg"
                label="React"
                justification="center"
              />
              <SkillBullet
                imgSrc="/img/skills/javascript-logo.svg"
                label="JavaScript"
                justification="left"
              />
              <SkillBullet
                imgSrc="/img/skills/html-logo.svg"
                label="HTML"
                justification="right"
              />
              <SkillBullet
                imgSrc="/img/skills/css-logo.svg"
                label="CSS"
                justification="center"
              />
              <SkillBullet
                imgSrc="/img/skills/photoshop-logo.svg"
                label="Photoshop"
                justification="left"
              />
              <SkillBullet
                imgSrc="/img/skills/illustrator-logo.svg"
                label="Illustrator"
                justification="right"
              />
              <SkillBullet
                imgSrc="/img/skills/figma-logo.svg"
                label="Figma"
                justification="center"
              />
              <SkillBullet
                imgSrc="/img/skills/node-js-logo.svg"
                label="Node.js"
                justification="left"
              />
              <SkillBullet
                imgSrc="/img/skills/mysql-logo.svg"
                label="MySQL"
                justification="right"
              />
              <SkillBullet
                imgSrc="/img/skills/next-js-logo.svg"
                label="Next.js"
                justification="center"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="portfolio" className="content-section bg-gray-100">
        <div className="container mx-auto">
          <SectionHeading
            title="Portfolio"
            animationDirection="Right"
            color="indigo-900"
          />
          <div className="grid grid-cols-2 lg:grid-cols-3">
            <PortfolioCard
              cardKey="1"
              title="Gourmand"
              projectStack="React"
              githubHref="https://github.com/stringmander/gourmand"
              deployedHref="https://gourmand.netlify.com/"
              bgImgPath="/img/portfolio/gourmand.jpg"
            />
            <PortfolioCard
              cardKey="2"
              title="YouTube Search"
              projectStack="React"
              githubHref="https://github.com/stringmander/react-youtube-search"
              deployedHref="https://youtube-search-react-app.netlify.com/"
              bgImgPath="/img/portfolio/youtube-search.jpg"
              delay={viewportWidth > 640 ? 250 : 0}
            />
            <PortfolioCard
              cardKey="3"
              title="Unsplash Search"
              projectStack="React"
              githubHref="https://github.com/stringmander/react-unsplash-search"
              deployedHref="https://unsplash-search-react-app.netlify.com/"
              bgImgPath="/img/portfolio/unsplash-search.jpg"
              delay={viewportWidth > 640 ? 500 : 0}
            />
            <PortfolioCard
              cardKey="4"
              title="Season Detector"
              projectStack="React"
              githubHref="https://github.com/stringmander/react-hooks-seasons-app"
              deployedHref="https://seasons-hooks-react-app.netlify.com/"
              bgImgPath="/img/portfolio/seasons-hooks.jpg"
            />
            <PortfolioCard
              cardKey="5"
              title="Translate Demo"
              projectStack="React"
              githubHref="https://github.com/stringmander/react-translate-form"
              deployedHref="https://translate-react-app.netlify.com/"
              bgImgPath="/img/portfolio/translate-demo.jpg"
              delay={viewportWidth > 640 ? 250 : 0}
            />
            <PortfolioCard
              cardKey="6"
              title="Redux Blog Demo"
              projectStack="React Redux"
              githubHref="https://github.com/stringmander/react-redux-blog"
              deployedHref="https://react-redux-jsonplaceholder-blog.netlify.com/"
              bgImgPath="/img/portfolio/redux-blog.jpg"
              delay={viewportWidth > 640 ? 500 : 0}
            />
            <PortfolioCard
              cardKey="7"
              title="Budgety"
              projectStack="JavaScript"
              githubHref="https://github.com/stringmander/budgety"
              deployedHref="https://stringmander.github.io/budgety/"
              bgImgPath="/img/portfolio/budgety.jpg"
            />
            <PortfolioCard
              cardKey="8"
              title="Pig Game"
              projectStack="JavaScript"
              githubHref="https://github.com/stringmander/dom-pig-game"
              deployedHref="https://stringmander.github.io/dom-pig-game/"
              bgImgPath="/img/portfolio/pig-game.jpg"
              delay={250}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="content-section bg-indigo-800 pt-0">
        <svg
          className="mb-12"
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0 L50 100 L100 0 Z" fill="#eff5ee"></path>
        </svg>

        <div className="container mx-auto">
          <SectionHeading
            title="Contact"
            animationDirection="Left"
            color="white"
          />
          <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <h3 className="text-center text-teal-300 -mt-4 mb-16">
              Have questions or want to collaborate?
            </h3>
          </ScrollAnimation>

          <ScrollAnimation animateIn="zoomIn" animateOnce>
            <ContactForm />
          </ScrollAnimation>
        </div>
      </section>
      <footer className="pt-16 pb-12 bg-indigo-900">
        <div className="flex justify-center mb-12">
          <SocialIcon
            href="https://github.com/stringmander"
            icon={mdiGithubCircle}
          />
          <SocialIcon
            href="https://www.linkedin.com/in/nicholas-russo-620856195/"
            icon={mdiLinkedin}
          />
          <SocialIcon
            href="https://twitter.com/NickRus93469915"
            icon={mdiTwitter}
          />
        </div>
        <div className="font-body text-xs text-gray-600 text-center">
          NICHOLAS RUSSO <span className="text-red-600">©2020</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
