import React from "react";

const SkillBullet = ({ imgSrc, label, justification }) => {
  return (
    <>
      <div
        className={`skill-bullet inline-flex ${
          justification === "center" ? "w-full" : "w-1/2"
        }`}
      >
        <h3 className={`skill-bullet-label ${justification} text-sm lg:text-base text-gray-700`}>
          {" "}
          {label}{" "}
        </h3>
        <div className={"hex-wrapper small mx-1"}>
          <div className="hexagon">
            <img src={imgSrc} className="hexagon-image" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-bullet {
          ${justification === "left"
            ? "justify-content: flex-end;"
            : justification === "right"
            ? "justify-content: start;"
            : "justify-content: center;"}
        }
        .skill-bullet-label {
          position: absolute;
          align-self: center;
        }
        .center {
          left: 64%;
        }
        .left {
          right: 74%;
        }
        .right {
          left: 74%;
        }
        @media (min-width: 360px) {
          .center {
            left: 61%;
          }
          .left {
            right: 71%;
          }
          .right {
            left: 71%;
          }
        }
        @media (min-width: 1024px) {
          .center {
            left: 57%;
          }
          .left {
            right: 62%;
          }
          .right {
            left: 62%;
          }
        }
      `}</style>
    </>
  );
};

export default SkillBullet;
