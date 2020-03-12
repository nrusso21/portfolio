import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SectionHeading = ({ title, animationDirection }) => {
  return (
    <ScrollAnimation
      className="flex flex-col justify-center"
      animateIn={`fadeIn${animationDirection}`}
      animateOnce
    >
      <div className="text-4xl font-heading font-semibold text-center text-indigo-900">
        {title}
      </div>
      <ScrollAnimation
        className="flex justify-center"
        delay={500}
        animateIn={`fadeIn${animationDirection}`}
        animateOnce
      >
        <div className="w-20 h-1 bg-indigo-900 mt-2 mb-20" />
      </ScrollAnimation>
    </ScrollAnimation>
  );
};

export default SectionHeading;
