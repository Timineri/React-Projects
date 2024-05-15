import Logo from "../Logo";
import Navbar from "../NavBar";
import star from "../../assets/starr.png";
import topImage from "../../assets/TOP-STRIP_FASHION-WEEK.gif";
import SearchBar from "../SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";
import React from "react";
// import Logo from "../Logo";
// import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <>
      <Navbar type="wrapperOne">
        <img src={topImage} alt="" />
      </Navbar>
      <Navbar type="wrapperTwo">
        <span className="firstLogo">
          <span className="content">
            <img src={star} alt="" className="starr" />
            <a href="*" className="sell-link">
              Sell on Jumia
            </a>
          </span>
          <Logo width="50px" />
        </span>
      </Navbar>
      <Navbar type="wrapperThree">
        <Logo width="150px" height="35px" />
        <SearchBar />
        <UserInfo />
      </Navbar>
    </>
  );
}
