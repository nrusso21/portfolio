import React from "react";

const SkillBullet = ({ imgSrc, label, left, right }) => {
  return (
    <>
      <div className={`grid ${!left && !right ? "col-span-2" : ""}`}>
        <h3 className="skill-bullet-label text-gray-700"> {label} </h3>
        <div className={`skill-bullet hex-wrapper small mx-1`}>
          <div className="hexagon">
            <img src={imgSrc} className="hexagon-image" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-bullet {
          ${left ? "justify-self: end;" : right ? "justify-self: start;" : "justify-self: center;"}
          }
        .skill-bullet-label {
          align-self: center;
          position: absolute;
          ${left ? "right: 25.3rem" : right ? "left: 25.3rem" : "left: 23rem"}
        }
      `}</style>
    </>
  );
};

export default SkillBullet;
