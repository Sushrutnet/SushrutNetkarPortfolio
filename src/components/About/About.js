import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const About = () =>  (
  <Section id="About">
  
    <SectionDivider divider />
    <SectionTitle>About</SectionTitle>
    <SectionText>
    My name is Sushrut 22 still a student, and I’m currently seeking a position in software development.

I have always been interested in computers and software,I’m skilled with HTML, CSS and JS, and I am trying to learn other programming languages, step by step.
That’s all about me.
    </SectionText>
    
    <SectionDivider colorAlt />
  </Section>
);
 export default About;
