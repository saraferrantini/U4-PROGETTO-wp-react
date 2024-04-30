import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import instagramIcon from "../assets/instagram.svg";
import facebookIcon from "../assets/facebook.svg";
import pinterestIcon from "../assets/pinterest.svg";
import whatsappIcon from "../assets/whatsapp.svg";
import "./style.css";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#008a89" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="50" />
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: "white" }}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account" style={{ color: "white" }}>
                Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payment" style={{ color: "white" }}>
                Pagamento
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" style={{ color: "white" }}>
                Carrello
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" style={{ color: "white" }}>
                Shop
              </Link>
            </li>
            {/* Icone social media*/}
            <li className="nav-item">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  style={{ width: "20px", marginRight: "10px" }}
                  className="white-icon"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  style={{ width: "20px", marginRight: "10px" }}
                  className="white-icon"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <img
                  src={pinterestIcon}
                  alt="Pinterest"
                  style={{ width: "20px", marginRight: "10px" }}
                  className="white-icon"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer" className="nav-link">
                <img src={whatsappIcon} alt="whatsapp" style={{ width: "20px" }} className="white-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
