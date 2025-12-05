import styles from "./TestComponent.module.css";
import React, { useEffect, useRef } from "react";

function TestComponent() {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.gameContainer}>
      <h1>Tappy Plane</h1>
      <iframe
        ref={iframeRef}
        className={styles.iframe}
        src="/src/public/godot/tappy-plane/tappy-plane.html"
        title="Tappy Plane"
        tabIndex={0}
        allowFullScreen
      />
    </div>
  );
}

export default TestComponent;
