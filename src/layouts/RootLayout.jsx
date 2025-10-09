import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="layout">
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
