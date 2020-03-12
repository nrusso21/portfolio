import React, { useState, useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "@mdi/react";

const Bullet = ({ icon, label, body, delay }) => {
  const [viewportWidth, setViewportWidth] = useState(null);
  if (process.browser) {
    useEffect(() => setViewportWidth(document.children[0].clientWidth), [
      document.children[0].clientWidth
    ]);
  }

  return (
    <ScrollAnimation
      className="flex flex-col w-full"
      animateIn="fadeIn"
      delay={viewportWidth > 640 ? delay : 0}
      animateOnce
    >
      <ScrollAnimation
        className="flex justify-center"
        animateIn="flipInY"
        delay={viewportWidth > 640 ? 100 + delay : 0}
        animateOnce
      >
        <div className="hex-wrapper">
          <div className="hexagon">
            <Icon path={icon} className="hexagon-icon" />
          </div>
        </div>
      </ScrollAnimation>
      <h1 className="text-center mt-4 mb-2 text-gray-700">{label}</h1>
      <div className="mb-12 px-8 text-center font-body text-gray-600">
        {body}
      </div>
    </ScrollAnimation>
  );
};

export default Bullet;
