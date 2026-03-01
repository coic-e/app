import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import HorseAnimation from "../components/HorseAnimation";

import "../styles/pages/landing.css";

function Landing() {
  return (
    <div id="page-landing">
      <HorseAnimation />
      <div className="content-wrapper">
        <main>
          <h1>MAPA DE RAVE</h1>
          <p>Descubra a Batida do Underground</p>
        </main>

        <Link to="/raves" className="enter-app">
          <FiArrowRight size={26} color="#ffffff" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
