import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer(){

return(
    <footer className="footermain">
        <h1>
            Sharath SS - Software Engineer
        </h1>
        <br />
        
        <a href="#about" >About |</a>
        <a href="#projects"> Projects </a>
        
        <ul className="footer_socialmedia">
        <a href="https://www.facebook.com/" target="blank"className="footer__social-link">
        <i className="bi bi-facebook"></i>
        </a>
        <a href="https://github.com/Sharathsharif" target="blank"className="footer__social-link">
        <i className="bi bi-github"></i>
        </a>
        <a href="https://www.instagram.com/" target="blank"className="footer__social-link">
        <i className="bi bi-instagram"></i>
        </a>


        </ul>



    </footer>

)

}

export default Footer;