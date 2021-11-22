import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./style.css";

export const BackgroundAnimation = () => {
  const background = useRef();

  function createCloud() {
    const cloud = document.createElement("div");
    cloud.classList.add("nuvemBackgroud");
    background.current?.appendChild(cloud);

    return cloud;
  }

  function excludeCloud(cloudEl) {
    background.current?.removeChild(cloudEl);
  }

  function animation() {
    const timerToNewAnimation = Math.random() * (20000 - 5000 + 1) + 5000;
    setTimeout(() => animation(), timerToNewAnimation);

    const windowWidth = window.innerWidth;

    const cloud = createCloud();
    let cloudPosition = Number(
      getComputedStyle(cloud).getPropertyValue("left").split(/px/g)[0],
    );

    const windowHeight = Math.random() * (window.innerHeight + 500);
    cloud.style.top = windowHeight + "px";

    const interval = setInterval(() => {
      if (cloudPosition < windowWidth) {
        cloudPosition += 2;
        cloud.style.left = cloudPosition + "px";
      } else {
        clearInterval(interval);
        excludeCloud(cloud);
      }
    }, 30);
  }

  useEffect(() => {
    if (background.current) {
      animation();
    }
  });

  return <Bg ref={background}></Bg>;
};

const Bg = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 160vh;
`;
