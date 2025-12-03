import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Sheard/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;
