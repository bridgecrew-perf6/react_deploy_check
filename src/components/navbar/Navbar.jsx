import React from 'react';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#wpt3">What is GPT3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#Home">Home</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Zain Gashti</a></p>
        </div>
      </div>
    </div>
    )
}

export default Navbar 