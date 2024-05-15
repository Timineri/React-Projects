import React from "react";
import "./Header/Header.css";
export default function Navbar({ children, type }) {
  return <div className={`${type}`}>{children}</div>;
}
