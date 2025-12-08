import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main>
        <Outlet /> {/* This is where child routes (Home, About) appear */}
      </main>
      <Footer />

      {/* This line enables scroll saving/restoring automatically */}
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
