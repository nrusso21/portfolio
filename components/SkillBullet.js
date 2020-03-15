import React from "react";

const SkillBullet = ({ imgSrc, label, side }) => {
  return (
    <>
      <div
        className={`skill-bullet flex ${side === "center" ? "col-span-2" : ""}`}
      >
        <h3 className={`skill-bullet-label ${side} text-gray-700`}>
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
          ${side === "left" ? "justify-self: end;" : side === "right" ? "justify-self: start;" : "justify-content: center;"}
        }
        .skill-bullet-label {
          position: absolute;
          align-self: center;
        }
        .center {
          left: 17rem;
        }
        .left {
          right: 19rem;
        }
        .right {
          left: 19rem;
        }
        @media (min-width: 768px) {
          .center {
            left: 15rem;
          }
          .left {
            right: 17rem;
          }
          .right {
            left: 17rem;
          }
        }
        @media (min-width: 1024px) {
          .center {
            left: 23rem;
          }
          .left {
            right: 25rem;
          }
          .right {
            left: 25rem;
          }
        }
      `}</style>
    </>
  );
};

export default SkillBullet;