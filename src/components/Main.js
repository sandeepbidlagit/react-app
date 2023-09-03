import React from "react";
import "./styles/Main.scss";
import ExamplePdf from "./assets/Sandeep_Resume.pdf";
import man3 from "./assets/man-3.jpg";
import { Link } from "react-scroll";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


export default function Main() {
  return (

    <div id="main">
          <div className="container">
      <div id="main__container">
        <div id="main__content">
          <div className="text">
            <p>Hey there</p>
            <h1>
              I'm <span> Sandeep</span> <br />
              Front End Developer
            </h1>
            <p>
              A Front End Developer Web Developer passionate about creating
              interactive
               application and experience on the web web applications
            </p>

            <div className="buttons">
              <button><a href="mailto:sandeep.bidla556@gmail.com"><BusinessCenterIcon/> Hire Me</a></button>
              <button>
                <Link href={ExamplePdf} download="Resume-PDF" target="_blank">
              <PictureAsPdfIcon/>    Download Resume
                </Link>{" "}
              </button>
            </div>




          </div>
          
        </div>
        

        <div className="main__img">
          <img src={man3} alt="" />
        </div>

        
      </div>
      <div className="indicator">
            <Link activeClass='active' to="about" spy={true} smooth={true} offset={-55} duration={500}>
                    <div class="index-page-scroll-indicator">
                        <div class="index-page-scroll-indicator-arrow"></div>
                    </div>
                </Link>
                </div>
    </div>
  
  
    </div>
  
  );
}
