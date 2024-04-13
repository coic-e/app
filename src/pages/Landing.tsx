import React, { Suspense } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../styles/pages/landing.css";
import ThreeElement from "../components/ThreeElement";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import Discoballs from "../components/Discoballs";
import Overlay from "../components/Overlay";

function Landing() {
  return (
    <>
      <Suspense fallback={null}>
        <Discoballs speed={1} />
      </Suspense>
      <Overlay />
    </>
  );
}

export default Landing;
