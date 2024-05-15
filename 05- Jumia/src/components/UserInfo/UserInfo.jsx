import React from "react";
import "./UserInfo.css";
import { FaRegUser } from "react-icons/fa6";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="userInfoContent">
        <FaRegUser />
        Account
        <MdOutlineKeyboardArrowDown />
      </div>
      <div className="userInfoContent">
        <FiHelpCircle />
        Help
        <MdOutlineKeyboardArrowDown />
      </div>
      <div className="userInfoContent">
        <AiOutlineShoppingCart />
        Cart
      </div>
    </div>
  );
}
