import React from "react";
import "./navbar.css"
import { FaShoppingBag } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


export default function Navbar(){
    return (
          <nav>
            <div className="logo">
              <p className="text-logo">Logo</p>
            </div>
            <div className="nav-list">
              <ul className="nav-group">
                <li className="nav-link"><a className="nav-item" href="/"><FaHome /></a></li>
                <li className="nav-link"><a className="nav-item" href="/Offers"><FaShoppingBag /></a></li>
              </ul>
            </div>
          </nav>
    )
}
