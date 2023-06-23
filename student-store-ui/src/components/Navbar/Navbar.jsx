import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Group } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <Group spacing="xl">
        <Link to="/" className="link">Home</Link>
        <Link to="/#about" className="link">About Us</Link>
        <Link to="/#contact" className="link">Contact Us</Link>
        <Link to="/#Buy" className="link">Buy Now</Link>
      </Group>
    </nav>
  );
}
