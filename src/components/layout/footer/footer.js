import React from "react";
import "./footer.css" 
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";


export default function footer(){
    return(
        <footer>
        <div class="footer-content">
            <h3 className="footer-title">Developer</h3>
            <p className="footer-subtitle">Desafio Técnico - OmniX</p>
        </div>
        <div className="footer-bottom">
                    <div className="footer-menu">
                      <ul className="menu">
                        <li><a className="footer-link" href="/"><FaGithub /></a></li>
                        <li><a className="footer-link" href="/Products"><FaLinkedin /></a></li>
                        <li><a className="footer-link" href="/Products"><FaStackOverflow /></a></li>
                      </ul>
                    </div>
        </div>
    </footer>
    )
}