import React from 'react';
import Content from './Content';
import { AppProvider } from './context';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './StripeSubmenus.css';
import Submenu from './Submenu';

const StripeSubmenus = () => {
    return (
        <AppProvider>
            <Navbar />
            <Content />
            <Sidebar />
            <Submenu />
        </AppProvider>
    )
}

export default StripeSubmenus;
