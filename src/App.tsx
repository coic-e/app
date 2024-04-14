import React from "react";
import "leaflet/dist/leaflet.css";

import { router } from "./routes";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/global";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;
