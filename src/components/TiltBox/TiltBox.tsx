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

  return (
    <>
      <div id="tilt-box" ref={tiltBoxRef}>
        TiltBox
      </div>
    </>
    
  )
};

export default TiltBox;
