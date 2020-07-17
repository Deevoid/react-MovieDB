import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fas fa-video"></i>MovieDB
      </Link>
    </div>
  );
}
