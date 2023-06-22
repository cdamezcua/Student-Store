import * as React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <div className="logo">
    <Link to="/">
        <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="logo" />
    </Link>
  </div>;
}
