import React from "react";
import Particles from "react-particles-js";
import Icon from "@mdi/react";
import { mdiArrowDown } from "@mdi/js";

import particlesConfig from "../config/particlesConfig";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-indigo-800">
        <Particles params={particlesConfig} height="100vh" />
        <div className="absolute self-center z-10 text-3xl lg:text-5xl font-heading font-light text-gray-200 text-center select-none">
          Hello, I'm{" "}
          <span className="text-red-600 font-semibold">Nick Russo</span>.<br />
          I'm a full-stack web developer.
        </div>
        <a href="#about" className="outline-button button-position absolute self-center flex content-center text-white hover:bg-teal-400 hover:border-transparent transition-easing">
          Explore my work
          <Icon path={mdiArrowDown} color="white" className="inline h-6 ml-4" />
        </a>
      </div>

      <style jsx>
        {`
          .button-position {
            bottom: 11rem;
          }
          @media (min-width: 768px) {
              .button-position{
                  bottom: 26rem;
              }
          }
          @media (min-width: 1024px) {
              .button-position{
                  bottom: 23rem;
              }
          }
        `}
      </style>
    </>
  );
};

export default Hero;
