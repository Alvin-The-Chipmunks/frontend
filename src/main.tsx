import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { APIProvider } from "@vis.gl/react-google-maps";
import AppRouter from "./AppRouter";
// import App from "./App.v2";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <AppRouter/>
    </APIProvider>
  </StrictMode>
);
