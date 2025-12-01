import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : 500;

  const excuses = [
    "404% sure it was here a minute ago.",
    "This page escaped into a different branch.",
    "A semicolon rebellion broke the build.",
    "The router took a coffee break.",
    "It worked on my machine. 🤷‍♂️",
    "The DOM ate this page.",
    "A cosmic ray flipped a bit somewhere.",
  ];

  const [excuse, setExcuse] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Pick a random excuse
    const random = excuses[Math.floor(Math.random() * excuses.length)];
    setExcuse(random);

    // Store error message only (NO stack trace)
    setMessage(error?.message || "No error message available.");

    // Also log to the browser console
    console.error("Error caught by ErrorPage:", error);
  }, [error]);

  return (
    <main className={styles.container}>
      {/* 🔹 Main Popup Card */}
      <div className={styles.card}>
        <div className={styles.emoji}>🧑‍💻☕</div>

        <h1 className={styles.code}>{status}</h1>

        <h2 className={styles.title}>Oops… Something went wrong.</h2>

        <p className={styles.text}>
          The page you’re looking for has either rage quit or been yeeted into
          another dimension.
        </p>

        <p className={styles.excuse}>
          Debug excuse of the moment: <span>{excuse}</span>
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            🏠 Back Home
          </Link>

          <button
            className={styles.ghostBtn}
            onClick={() => {
              if (window.history.length > 1) window.history.back();
              else window.location.href = "/";
            }}
          >
            ⬅️ Go Back
          </button>
        </div>

        <p className={styles.footer}>
          Pro tip: Try turning it off and on again. Or press{" "}
          <code>Ctrl + Z</code> on life.
        </p>
      </div>

      {/* 🔹 Terminal Output BELOW the card */}
      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>⚠️ Debug Terminal Output</div>
        <pre className={styles.terminalBody}>
          {`Error Message:
          ${message}`}
        </pre>
      </div>
    </main>
  );
}
// import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

// export default function ErrorPage() {
//   const error = useRouteError();
//   const status = isRouteErrorResponse(error) ? error.status : 500;

//   return (
//     <div className="mx-auto max-w-3xl px-4 py-16 text-center">
//       <h1 className="text-3xl font-bold text-[#8B5E34]">Ah-shit!.</h1>
//       <p className="mt-4">Something went fucking wrong with the code.</p>
//       <p className="mt-2 opacity-70">Status: {status}</p>
//       <Link
//         to="/"
//         className="inline-block mt-8 px-4 py-2 rounded-lg bg-[#F77F00] text-white hover:bg-[#E76F00] transition"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// }
