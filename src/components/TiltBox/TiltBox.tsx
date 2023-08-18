import "./TiltBox.css";

import { useRef } from "react";

const TiltBox = () => {
  const tiltBoxRef = useRef(null);

  return (
    <>
      <div id="tilt-box" ref={tiltBoxRef}>
        TiltBox
      </div>
    </>
    
  )
};

export default TiltBox;
