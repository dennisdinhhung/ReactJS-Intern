import React from 'react';
import { AppProvider } from './context';
import Home from './Home';
import Modal from './Modal';
import Sidebar from './Sidebar';
import './SidebarModal.css';

const SidebarModal = () => {
    return (
        <AppProvider>
            <Home />
            <Modal />
            <Sidebar />
        </AppProvider>
    )
}

export default SidebarModal;
