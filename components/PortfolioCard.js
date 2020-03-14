import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "@mdi/react";
import { mdiGithubCircle } from "@mdi/js";

const PortfolioCard = ({
  cardKey,
  title,
  projectStack,
  githubHref,
  deployedHref,
  bgImgPath
}) => {
  useEffect(() => {
    const cardHover = document.querySelector(`.card-${cardKey}`);
    cardHover.onmouseover = cardMouseOver;
    cardHover.onmouseout = cardMouseOut;

    let titleClasses = document.querySelector(`.title-${cardKey}`).classList;
    let buttonClasses = document.querySelector(`.buttons-${cardKey}`).classList;
    let bgClasses = document.querySelector(`.bg-${cardKey}`).classList;

    const mouseOverClassesToggle = (
      elClasses,
      addedClasses,
      removedClasses
    ) => {
      elClasses.remove(removedClasses);
      if (elClasses.contains(addedClasses)) {
        elClasses.remove("anim-paused");
        elClasses.add("anim-running");
      } else {
        elClasses.add(addedClasses);
      }
    };

    const mouseOutClassesToggle = (elClasses, removedClasses, addedClasses) => {
      elClasses.remove(removedClasses);
      elClasses.remove("anim-running");
      elClasses.add(addedClasses);
    };

    function cardMouseOver() {
      mouseOverClassesToggle(titleClasses, "fadeInDown", "fadeOutUp");

      mouseOverClassesToggle(buttonClasses, "fadeInUp", "fadeOutDown");

      bgClasses.remove("opaque-transition");
      bgClasses.add("transparent-transition");
    }

    function cardMouseOut() {
      mouseOutClassesToggle(titleClasses, "fadeInDown", "fadeOutUp");

      mouseOutClassesToggle(buttonClasses, "fadeInUp", "fadeOutDown");

      bgClasses.remove("transparent-transition");
      bgClasses.add("opaque-transition");
    }
  });

  return (
    <>
      <ScrollAnimation
        className={`card-${cardKey} flex flex-col justify-around h-56 md:h-72 overflow-hidden`}
        animateIn="fadeInUp"
        animateOnce
      >
        <div className={`bg-${cardKey} w-full h-full fixed bg-img`}></div>
        <div
          className={`title-${cardKey} animated fadeInDown anim-paused fast-anim text-center select-none`}
        >
          <h1 className="text-indigo-900">{title}</h1>
          <div className="font-body text-purple-800">{projectStack}</div>
        </div>
        <div className={`buttons-${cardKey} animated fadeInUp anim-paused fast-anim flex content-center self-center`}>
          <a
            href={deployedHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`outline-button text-purple-800 border-purple-800 transition-easing hover:bg-purple-800 hover:border-transparent hover:text-white`}
          >
            Check it out!
          </a>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4"
          >
            <Icon
              path={mdiGithubCircle}
              className="card-github-link transition-easing w-10"
            />
          </a>
        </div>
      </ScrollAnimation>
      <style jsx>{`
        .bg-img {
          background-image: url(${bgImgPath});
          background-size: cover;
          background-position: center;
        }
        .anim-paused {
          animation-play-state: paused;
        }
        .anim-running {
          animation-play-state: running;
        }
        .fast-anim {
          animation-duration: 500ms;
        }
        .transparent-transition {
          opacity: 0;
          -webkit-transition: opacity 500ms ease-in-out;
          transition: opacity 500ms ease-in-out;
        }
        .opaque-transition {
          opacity: 1;
          -webkit-transition: opacity 500ms ease-in-out;
          transition: opacity 500ms ease-in-out;
        }
      `}</style>
    </>
  );
};

export default PortfolioCard;
