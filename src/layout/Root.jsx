import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavbarSection from '../components/navbar/NavbarSection';

const Root = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;