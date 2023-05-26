import React from "react";
import { StyledPlayground } from "../styles/Playground.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import "./exp.css";

function Experience() {
  return (
    <>
      <StyledPlayground id="playground">
        <SectionHeading>
          <SectionTitle number="03">Experience</SectionTitle>
        </SectionHeading>
        <section className="experience">
          <div className="job">
            <h3 className="job-title">Web Developer Intern</h3>
            <a className="job-duration" href="http://amplifierelectronics.in/">
              Amplifier Electronics Pvt. Ltd
            </a>
            <p className="job-description">
              <ul>
                <li>
                  Developed and maintained web applications using Node.js,
                  React.js, MongoDB, and Express.js.
                </li>
                <li>
                  Designed and implemented RESTful APIs using Express.js and
                  MongoDB, enabling seamless communication between the server
                  and client.
                </li>
                <li>
                  Gained hands-on experience in Back-end development and
                  contributed to various projects during my internship.
                </li>
                <li>
                  Collaborated with a team of developers to implement new
                  features, fix bugs, and improve performance.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </StyledPlayground>
    </>
  );
}

export default Experience;
