import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import NavbarSection from '../components/navbar/NavbarSection';

const Root = () => {
    return (
        <div>
            <NavbarSection></NavbarSection>
            <div style={{ minHeight: '90vh' }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;