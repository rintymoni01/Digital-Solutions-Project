import React from 'react';
import ServisesCategory from './ServisesComponents/ServisesCategory';
import HomeComponents from '../Home/HomeComponents/HomeComponents';
import SectionComponents from './ServisesComponents/SectionComponents';
import AboutMid from '../About/AboutComponents/AboutMid';

const Servises = () => {
    return (
        <div>
          <ServisesCategory></ServisesCategory> 
          <SectionComponents></SectionComponents>
          <AboutMid></AboutMid>
        </div>
    );
};

export default Servises;