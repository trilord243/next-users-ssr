import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-primary ">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Trilord users
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse ms-auto"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link ms-auto" href="/about ">
              About
            </Link>
            <Link className="nav-link ms-auto" href="/services">
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
