import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import FullReport from "./Pages/FullReport.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/report/:section" element={<FullReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
