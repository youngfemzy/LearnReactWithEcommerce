import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Auth from "./pages/AuthPages/Auth";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <Navbar />
      {/* auth context provider */}
      <AuthProvider>
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
      </AuthProvider>
    </>
  );
}

export default App;
