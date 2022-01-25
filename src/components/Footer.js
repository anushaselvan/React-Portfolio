import React from 'react';
import '../styles/Footer.css';



function Footer() {
    return (
      <div className="Footer">
        <a href="https://github.com/anushaselvan" target="blank"> 
            <img src ={require("../components/assets/icons8-github-48.png")} alt="gitHub logo"/></a>

        <a href="https://www.linkedin.com/in/anusha-s-89734421b/" target="blank">
            <img src ={require('../components/assets/icons8-linkedin-48.png')} alt="linkedIn logo"/></a>
   
        <a href="mailto:anushaselvan@gmail.com?" target="blank">
            <img src ={require('../components/assets/icons8-mail-48.png')} alt="mail icon"/></a>

      </div>
    );
  }
  
  export default Footer;