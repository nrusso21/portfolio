import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "@mdi/react";

const Bullet = ({ icon, label, body, delay }) => {
  return (
    <ScrollAnimation
      className="flex flex-col w-full px-8"
      animateIn="fadeIn"
      delay={delay}
      animateOnce={true}
    >
      <ScrollAnimation
        className="flex justify-center"
        animateIn="flipInY"
        delay={delay}
        animateOnce={true}
      >
        <div className="hex-wrapper">
          <div className="hexagon">
            <Icon path={icon} className="hexagon-icon" />
          </div>
        </div>
      </ScrollAnimation>
      <h1 className="text-center mt-4 mb-2 text-indigo-900">{label}</h1>
      <div className="mb-12 text-center font-heading font-light">{body}</div>
    </ScrollAnimation>
  );
};

export default Bullet;
