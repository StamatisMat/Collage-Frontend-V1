// Filename - components/Footer.js

import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom"

const Footer = () => {
	return (
		<div className="footer-box">
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-column">
                        <div className="footer-heading">Services</div>
                        <NavLink className="footer-link" to="https://github.com/StamatisMat/" target="_blank">Software Development</NavLink>
                        <NavLink className="footer-link" to="https://flickr.com/people/stamatis_mat/" target="_blank">Photography</NavLink>
                    </div>
                    <div className="footer-column">
                        <div className="footer-heading">Contact</div>
                        <NavLink className="footer-link" to="https://www.linkedin.com/in/stamatis-matziounis/" target="_blank">LinkedIn</NavLink>
                        <NavLink className="footer-link" to="mailto:stamatis_mat@hotmail.com" target="_blank">Email</NavLink>
                        <NavLink className="footer-link" to="https://calendly.com/stamatismat" target="_blank">Calendly</NavLink>
                    </div>
                    <p className="footer-copyright">
				        Copyright &copy; : Stamatis Matziounis
			        </p>
                    
                </div>
            </div>
        </div>
        
        
        
        
        
	);
};
export default Footer;
