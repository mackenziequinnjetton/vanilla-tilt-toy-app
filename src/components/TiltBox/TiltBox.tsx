import "./TiltBox.css";
import VanillaTilt from "vanilla-tilt";

import { useEffect, useRef } from "react";

const TiltBox = () => {
  const tiltBoxRef = useRef(null);

  useEffect(() => {
    if (!tiltBoxRef.current) return;
    
    VanillaTilt.init(tiltBoxRef.current, {
      max: 25,
      speed: 400
    });
  }, []);

  useEffect(() => {
    if (!tiltBoxRef.current) return;

    createTiltEventListener("tilt-box-angle", "angle");
    createTiltEventListener("tilt-box-percent-x", "percentageX");
    createTiltEventListener("tilt-box-percent-y", "percentageY");
    createTiltEventListener("tilt-box-tilt-x", "tiltX");
  });

  const createTiltEventListener = (tiltDisplayElementId: string, tiltEventAttr: string) => {
    const tiltBoxElement = document.querySelector("#tilt-box");
    const tiltDisplayElement = document.querySelector(`#${tiltDisplayElementId}`);
    if (!tiltBoxElement || !tiltDisplayElement) return;
    tiltBoxElement.addEventListener("tiltChange", (event: any) => {
      tiltDisplayElement.textContent = `${tiltEventAttr}: `;
      tiltDisplayElement.textContent += Math.round(event.detail[tiltEventAttr]);
    });
  };

  return (
    <>
      <div id="tilt-box" ref={tiltBoxRef}>
        <ul>
          <li id="tilt-box-angle">angle:</li>
          <li id="tilt-box-percent-x">percentageX:</li>
          <li id="tilt-box-percent-y">percentageY:</li>
          <li id="tilt-box-tilt-x">tiltX:</li>
        </ul>
        
      </div>
    </>
  )
};

export default TiltBox;
