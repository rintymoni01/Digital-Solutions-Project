import React from 'react';
import AboutCategory from './AboutComponents/AboutCategory';
import HomeComponents from '../Home/HomeComponents/HomeComponents';
import HomeSection from '../Home/HomeComponents/HomeSection';
import AboutSection from './AboutComponents/AboutSection';
import AboutMid from './AboutComponents/AboutMid';


const About = () => {
    return (
        <div>
        <AboutCategory></AboutCategory>
     <HomeSection></HomeSection>
        <HomeComponents></HomeComponents>
        <AboutSection></AboutSection>
        <AboutMid></AboutMid>
        </div>
    );
};

export default About;