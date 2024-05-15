import React from "react";
import logo from "../assets/jumia-logo.png";

export default function Logo({ width, height }) {
  return <img src={logo} style={{ width, height }} alt="" />;
}
