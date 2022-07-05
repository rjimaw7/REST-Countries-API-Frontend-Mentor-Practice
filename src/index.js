import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCountry from "./pages/SingleCountry";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:countryCode" element={<SingleCountry />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
