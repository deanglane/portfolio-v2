import styles from "./TestComponent.module.css";
import React, { useEffect, useRef, useState } from "react";

function TestComponent() {
  const iframeRef = useRef(null);
  const [highScore, setHighScore] = useState(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.focus();
    }

    function handleMessage(event) {
      // Limit to your own origin for safety
      if (event.origin !== window.location.origin) return;

      const data = event.data;
      if (data && data.type === "GODOT_HIGH_SCORE") {
        setHighScore(data.value);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="wrapper">
      <h2>Tappy Plane</h2>
      <p className={styles.pStyle}>
        Best score: <strong>{highScore !== null ? highScore : "—"}</strong>
      </p>
      <div className={styles.gameContainer}>
        <iframe
          ref={iframeRef}
          className={styles.iframe}
          src="/src/public/godot/tappy-plane/tappy-plane.html"
          title="Tappy Plane"
          tabIndex={0}
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default TestComponent;
