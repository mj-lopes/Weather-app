import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Map = () => {
  const locationMap = useSelector((state) => state.todayPrevision.data?.coord);
  const [screenSize, setScreenSize] = useState(0);

  function debounce(func, wait) {
    let timer = null;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
    };
  }

  function updateContainerWidth() {
    setScreenSize(window.innerWidth - 15);
  }

  useEffect(() => {
    window.addEventListener("resize", debounce(updateContainerWidth, 500));
    updateContainerWidth();
    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  });

  if (!locationMap) return null;
  return (
    <div style={{ marginTop: "1rem" }}>
      <iframe
        width={screenSize}
        height="600"
        src={`https://embed.windy.com/embed2.html?lat=${locationMap.lat}&lon=${locationMap.lon}&zoom=15&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1`}
        title="Map forescast"
      ></iframe>
    </div>
  );
};
