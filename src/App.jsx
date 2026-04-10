import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/AuthPages/Auth";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
