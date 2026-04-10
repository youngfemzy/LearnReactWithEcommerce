import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/">
            <h1 className="logo">Ecom</h1>
          </Link>

          <div className="navbar-links">
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/about" className="navbar-link">
              About
            </Link>
            <Link to="/auth" className="navbar-link">
              Auth
            </Link>
            <Link to="/checkout" className="navbar-link">
              Checkout
            </Link>
          </div>

          <div className="navbar-auth">
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
