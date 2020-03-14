import React from "react";
import Icon from "@mdi/react";

const SocialIcon = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon w-12 h-12 p-2 mx-3 bg-indigo-800 hover:bg-red-600 transition-easing"
    >
      <Icon path={icon} color="white" />
    </a>
  );
};

export default SocialIcon;
