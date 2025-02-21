import "./App.css";
import React, { Suspense } from "react";
import Dashboard from "./components/Dashboard.js";
import HomePage from "./HomePage.js";
import NewsPage from "./NewsPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const loading = (
  <div
    className="w-100 d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <h1 className="">loading....</h1>
  </div>
);

function App() {
  return (
    <BrowserRouter>
        <Dashboard />
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
