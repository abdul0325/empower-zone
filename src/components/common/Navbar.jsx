import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 border-b border-gray-300 bg-white shadow-sm">
      <Link to="/" className="mr-6 text-blue-600 hover:text-blue-800">
        Home
      </Link>
      <Link to="/about" className="mr-6 text-blue-600 hover:text-blue-800">
        About
      </Link>
      <Link to="/contact" className="text-blue-600 hover:text-blue-800">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
