import React from "react";
// import { IoIosHome } from "react-icons/io";
import Button from "./Button";
import "./SearchBar.css";
export default function SearchBar() {
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search product"
      />
      <Button />
    </>
  );
}
