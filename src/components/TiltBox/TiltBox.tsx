import "./TiltBox.css";
import VanillaTilt from "vanilla-tilt";

import { useEffect, useRef } from "react";

const TiltBox = () => {
  const tiltBoxRef = useRef(null);

  useEffect(() => {
    const currentTiltBoxRef: any = tiltBoxRef.current;
    if (!currentTiltBoxRef) return;
    
    VanillaTilt.init(currentTiltBoxRef, {
      max: 25,
      speed: 400
    });

    return () => {
      if (!currentTiltBoxRef) return;
      currentTiltBoxRef.vanillaTilt.destroy();
    }
  }, []);

  useEffect(() => {
    if (!tiltBoxRef.current) return;

    createTiltEventListener("tilt-box-angle", "angle");
    createTiltEventListener("tilt-box-percent-x", "percentageX");
    createTiltEventListener("tilt-box-percent-y", "percentageY");
    createTiltEventListener("tilt-box-tilt-x", "tiltX");
    createTiltEventListener("tilt-box-tilt-y", "tiltY");
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
          <li id="tilt-box-tilt-y">tiltY:</li>
        </ul>
        
      </div>
    </>
  )
};

export default TiltBox;
