import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroVideo, LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>

  <Section row nopadding>
  
    <LeftSection>

      <SectionTitle main center>
        Welcom To<br/>
    Sushrut Netkar Portfolio
      </SectionTitle>
      <SectionText>
      </SectionText>
      <Button onClick={() => Window.location= 'https://www.google.com'}>Learn More</Button>
    </LeftSection>
    
  </Section>
</>
);

export default Hero;