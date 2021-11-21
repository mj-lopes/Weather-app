import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { debounce } from "../../util/debounce";
import { getDeviceType } from "../../util/getDeviceType";

export const Map = () => {
  const locationMap = useSelector((state) => state.todayPrevision.data?.coord);
  const [screenSize, setScreenSize] = useState(0);

  function updateContainerWidth() {
    const device = getDeviceType();
    if (device === "mobile" || device === "tablet") {
      setScreenSize(window.innerWidth);
    } else {
      setScreenSize(window.innerWidth - 15);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", debounce(updateContainerWidth, 500));
    updateContainerWidth();
    return () => {
      window.removeEventListener("resize", debounce(updateContainerWidth, 500));
    };
  });

  if (!locationMap) return null;
  return (
    <div style={{ zIndex: "10" }}>
      <iframe
        width={screenSize}
        height="500"
        src={`https://embed.windy.com/embed2.html?lat=${locationMap.lat}&lon=${locationMap.lon}&zoom=15&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1`}
        title="Map forescast"
      ></iframe>
    </div>
  );
};
