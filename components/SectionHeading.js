import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SectionHeading = ({ text, animationDirection }) => {
  return (
    <div className="flex flex-col justify-center">
      <ScrollAnimation
        animateIn={`fadeIn${animationDirection}`}
        animateOnce={true}
      >
        <div className="text-4xl font-heading font-semibold text-center text-indigo-900">
          {text}
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        className="flex justify-center"
        delay={500}
        animateIn={`fadeIn${animationDirection}`}
        animateOnce={true}
      >
        <div className="w-20 h-1 bg-indigo-900 mt-2 mb-20" />
      </ScrollAnimation>
    </div>
  );
};

export default SectionHeading;
