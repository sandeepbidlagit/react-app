import React, { useState } from "react";
import "./styles/About.scss";
import contentImg from "./assets/content_img_big.jpg";
import ExamplePdf from "./assets/Sandeep_Resume.pdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Link } from "react-scroll";

export default function About() {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <div className="container">
      <section id="about">
        <div className="row">
          <div className="column1">
            <div className="about-img">
              <img src={contentImg} alt="" />
            </div>
          </div>
          <div className="column2">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Skills</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Experience</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* about content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>About Me</h2>
                <p>
                  Front End development with over 6+ years of experience with
                  the technologies using: HTML5, CSS3, Bootstrap, Sass/Scss,
                  JavaScript, DOM Manipulation, Git, & GitHub
                </p>

                <p>
                  My strengths are hardworking, self-motivated and positive mind
                  set.
                </p>

                <p>
                  I have done my Graduation, Bachelor of Arts — Delhi University
                </p>

                <button>
                  <Link href={ExamplePdf} download="Resume-PDF" target="_blank">
                    <PictureAsPdfIcon /> Download Resume
                  </Link>{" "}
                </button>
              </div>

              {/* Skills content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
            
               <div className="skill-wrap">
                <div class="skill-box">
                  <span class="title">HTML</span>

                  <div class="skill-bar">
                    <span class="skill-per html">
                      <span class="tooltip">95%</span>
                    </span>
                  </div>
                </div>

                <div class="skill-box">
                  <span class="title">CSS</span>

                  <div class="skill-bar">
                    <span class="skill-per css">
                      <span class="tooltip">90%</span>
                    </span>
                  </div>
                </div>

                <div class="skill-box">
                  <span class="title">SASS/SCSS</span>

                  <div class="skill-bar">
                    <span class="skill-per SASS">
                      <span class="tooltip">90%</span>
                    </span>
                  </div>
                </div>

                <div class="skill-box">
                  <span class="title">Bootstrap</span>

                  <div class="skill-bar">
                    <span class="skill-per bootstrap">
                      <span class="tooltip">85%</span>
                    </span>
                  </div>
                </div>

                <div class="skill-box">
                  <span class="title">JavaScript</span>

                  <div class="skill-bar">
                    <span class="skill-per javascript">
                      <span class="tooltip">60%</span>
                    </span>
                  </div>
                </div>
                <div class="skill-box">
                  <span class="title">React JS</span>

                  <div class="skill-bar">
                    <span class="skill-per reactJS">
                      <span class="tooltip">55%</span>
                    </span>
                  </div>
                </div>

                </div>


              </div>

              {/* Experience content */}

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Front End Developer</h3>
                  <span>
                    Mitratech Hyderabad 20 Sept 2022 - 20 January 2023
                  </span>
                  <ul>
                    <li>
                      Worked with Front End Developer technologies like, HTML5,
                      CSS3, code for Building the web Applications.
                    </li>
                    <li>
                      Building Reusable Component and Front- End Libraries
                    </li>

                    <li>Front- End Developing tools such as Git, GitHub</li>
                    <li>
                      Building reusable components and front-end libraries.
                    </li>
                    <li>
                      Maintaining quality and ensure responsiveness of
                      applications.
                    </li>
                  </ul>
                </div>

                <div className="exp-column">
                  <h3>Front End Developer</h3>
                  <span>Vinsol 27 September 2021 – 05 July 2022</span>
                  <ul>
                    <li>
                      Front End Developer technologies, HTML5, CSS3, Sass code
                      for Building the web Applications.
                    </li>
                    <li>
                      Used Bootstrap 4 for developing website in html with the
                      responsive manner
                    </li>
                    <li>
                      Experience in Responsive Web Design using CSS Frameworks.
                    </li>
                    <li>
                      Experience of building rich, high performance, responsive
                      and cross browser UI.
                    </li>
                  </ul>
                </div>

                <div className="exp-column">
                  <h3>UI Developer, Delhi</h3>
                  <span>Sakshem IT Solution 3 Sept 2019 – 29 April 2020</span>
                  <ul>
                    <li>
                      Conceptualize and create intuitive, engaging, and
                      brand-consistent web experiences.
                    </li>
                    <li>
                      Sliced PSD files sent from the client and used HTML, CSS,
                      Bootstrap. Also Making HTML Emailers with the experience
                      of e-commerce website.
                    </li>
                    <li>
                      Responsible for Designing Websites, Finalize the End
                      Outcome, Updating Website and Solving Errors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
