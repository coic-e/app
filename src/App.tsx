import React from "react";
import "leaflet/dist/leaflet.css";
import { MeshGradientRenderer } from "@johnn-e/react-mesh-gradient";

import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global";
function App() {
  return (
    <>
      <MeshGradientRenderer
        id="gradient-container"
        className="gradient"
        colors={["#C3E4FF", "#6EC3F4", "#EAE2FF", "#B9BEFF", "#B3B8F9"]}
      />
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
