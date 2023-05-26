import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/tejas.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/TAJResume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Tejas Annasaheb Jagtap, currently pursuing Bachelor of
            Technology in Computer Science Engineering in Indian Institute of
            Information Technology Pune. I am a passionate back-end developer
            based in Karad, Maharashtra, India.
          </StyledParagraph>
          <StyledParagraph>
            My expertise lies in programming languages such as Javascript,
            Python, and C++. I have hands-on experience in working with various
            technologies like MongoDB, ReactJS, ExpressJS, and NodeJS. Tools
            that I use for that are Git, GitHub, Heroku, Postmen.
          </StyledParagraph>
          <StyledParagraph>
            I have eagerness to learn something new every day and I love to
            share my knowledge to my fellow students and developers. And I am
            looking forward to talk with you!
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-Jagtap-Tejas"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
