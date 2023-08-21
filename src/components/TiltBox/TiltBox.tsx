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

  // Update the angle value in the .tilt-box-angle li element
  useEffect(() => {
    if (!tiltBoxRef.current) return;

    const tiltBoxElement = document.querySelector("#tilt-box");
    const tiltBoxAngleElement = document.querySelector("#tilt-box-angle");
    const tiltBoxPercentXElement = document.querySelector("#tilt-box-percent-x");

    tiltBoxElement?.addEventListener("tiltChange", (event: any) => {
      if (!tiltBoxAngleElement) return;
      tiltBoxAngleElement.textContent = `angle: ${Math.round(event.detail.angle)}`;
    });

    tiltBoxElement?.addEventListener("tiltChange", (event: any) => {
      if (!tiltBoxPercentXElement) return;
      tiltBoxPercentXElement.textContent = `percentX: ${Math.round(event.detail.percentageX)}`;
    });
  });

  return (
    <>
      <div id="tilt-box" ref={tiltBoxRef}>
        <ul>
          <li id="tilt-box-angle">angle:</li>
          <li id="tilt-box-percent-x">percentX:</li>
        </ul>
        
      </div>
    </>
  )
};

export default TiltBox;
